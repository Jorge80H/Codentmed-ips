-- Create enum types
CREATE TYPE form_type_enum AS ENUM ('sponsor', 'patient', 'consultation', 'general');
CREATE TYPE language_enum AS ENUM ('es', 'en');
CREATE TYPE status_enum AS ENUM ('new', 'contacted', 'qualified', 'converted', 'closed');
CREATE TYPE consultation_type_enum AS ENUM ('presencial', 'virtual', 'segunda_opinion');
CREATE TYPE urgency_level_enum AS ENUM ('low', 'medium', 'high');

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create contacts table (main table)
CREATE TABLE contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  country VARCHAR(100),
  form_type form_type_enum NOT NULL,
  message TEXT,
  language language_enum DEFAULT 'es',
  status status_enum DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create sponsors table
CREATE TABLE sponsors (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
  company_name VARCHAR(255) NOT NULL,
  therapeutic_area VARCHAR(255),
  study_phase VARCHAR(50),
  country_interest VARCHAR(100),
  budget_range VARCHAR(100),
  timeline VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create patients table
CREATE TABLE patients (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
  age INTEGER,
  medical_condition VARCHAR(255),
  study_interest VARCHAR(255),
  preferred_language language_enum DEFAULT 'es',
  medical_history TEXT,
  current_medications TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create private_consultations table
CREATE TABLE private_consultations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
  consultation_type consultation_type_enum NOT NULL,
  preferred_date DATE,
  preferred_time TIME,
  medical_specialty VARCHAR(100) NOT NULL,
  insurance_type VARCHAR(100),
  urgency_level urgency_level_enum DEFAULT 'medium',
  symptoms_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_form_type ON contacts(form_type);
CREATE INDEX idx_contacts_language ON contacts(language);
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created_at ON contacts(created_at);
CREATE INDEX idx_contacts_country ON contacts(country);

CREATE INDEX idx_sponsors_contact_id ON sponsors(contact_id);
CREATE INDEX idx_sponsors_company_name ON sponsors(company_name);
CREATE INDEX idx_sponsors_therapeutic_area ON sponsors(therapeutic_area);

CREATE INDEX idx_patients_contact_id ON patients(contact_id);
CREATE INDEX idx_patients_medical_condition ON patients(medical_condition);
CREATE INDEX idx_patients_age ON patients(age);

CREATE INDEX idx_consultations_contact_id ON private_consultations(contact_id);
CREATE INDEX idx_consultations_specialty ON private_consultations(medical_specialty);
CREATE INDEX idx_consultations_type ON private_consultations(consultation_type);
CREATE INDEX idx_consultations_date ON private_consultations(preferred_date);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE private_consultations ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (insert only) and admin access (full)
-- Contacts policies
CREATE POLICY "Allow public insert on contacts" ON contacts
  FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role full access to contacts" ON contacts
  FOR ALL 
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Sponsors policies
CREATE POLICY "Allow public insert on sponsors" ON sponsors
  FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role full access to sponsors" ON sponsors
  FOR ALL 
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Patients policies
CREATE POLICY "Allow public insert on patients" ON patients
  FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role full access to patients" ON patients
  FOR ALL 
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Private consultations policies
CREATE POLICY "Allow public insert on private_consultations" ON private_consultations
  FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow service role full access to private_consultations" ON private_consultations
  FOR ALL 
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contacts_updated_at 
  BEFORE UPDATE ON contacts 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Create views for easy querying
CREATE VIEW contact_summary AS
SELECT 
  c.*,
  CASE 
    WHEN c.form_type = 'sponsor' THEN s.company_name
    WHEN c.form_type = 'patient' THEN p.medical_condition
    WHEN c.form_type = 'consultation' THEN pc.medical_specialty
    ELSE NULL
  END as additional_info
FROM contacts c
LEFT JOIN sponsors s ON c.id = s.contact_id
LEFT JOIN patients p ON c.id = p.contact_id
LEFT JOIN private_consultations pc ON c.id = pc.contact_id;

-- Insert sample data for testing (optional)
-- INSERT INTO contacts (name, email, phone, country, form_type, message, language)
-- VALUES 
--   ('Test Sponsor', 'sponsor@test.com', '+57 300 123 4567', 'Colombia', 'sponsor', 'Interested in clinical studies', 'es'),
--   ('Test Patient', 'patient@test.com', '+57 300 765 4321', 'Colombia', 'patient', 'Looking for rheumatology study', 'es'),
--   ('Test Consultation', 'consultation@test.com', '+1 555 123 4567', 'United States', 'consultation', 'Need rheumatology consultation', 'en');