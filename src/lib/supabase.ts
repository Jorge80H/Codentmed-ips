import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Contact {
  id?: string
  name: string
  email: string
  phone?: string
  country?: string
  form_type: 'sponsor' | 'patient' | 'consultation' | 'general'
  message?: string
  language: 'es' | 'en'
  status?: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed'
  created_at?: string
  updated_at?: string
}

export interface Sponsor {
  id?: string
  contact_id: string
  company_name: string
  therapeutic_area?: string
  study_phase?: string
  country_interest?: string
  budget_range?: string
  timeline?: string
  created_at?: string
}

export interface Patient {
  id?: string
  contact_id: string
  age?: number
  medical_condition?: string
  study_interest?: string
  preferred_language: 'es' | 'en'
  medical_history?: string
  current_medications?: string
  created_at?: string
}

export interface PrivateConsultation {
  id?: string
  contact_id: string
  consultation_type: 'presencial' | 'virtual' | 'segunda_opinion'
  preferred_date?: string
  preferred_time?: string
  medical_specialty: string
  insurance_type?: string
  urgency_level?: 'low' | 'medium' | 'high'
  symptoms_description?: string
  created_at?: string
}

// Service functions
export class SupabaseService {
  // Contact methods
  static async createContact(contact: Omit<Contact, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('contacts')
      .insert(contact)
      .select()
      .single()
    
    if (error) throw error
    return data
  }

  static async updateContact(id: string, updates: Partial<Contact>) {
    const { data, error } = await supabase
      .from('contacts')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  }

  static async getContacts(filters?: { form_type?: string; status?: string; language?: string }) {
    let query = supabase.from('contacts').select('*')
    
    if (filters?.form_type) {
      query = query.eq('form_type', filters.form_type)
    }
    if (filters?.status) {
      query = query.eq('status', filters.status)
    }
    if (filters?.language) {
      query = query.eq('language', filters.language)
    }
    
    const { data, error } = await query.order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  }

  // Sponsor methods
  static async createSponsor(sponsor: Omit<Sponsor, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('sponsors')
      .insert(sponsor)
      .select()
      .single()
    
    if (error) throw error
    return data
  }

  static async getSponsorByContactId(contactId: string) {
    const { data, error } = await supabase
      .from('sponsors')
      .select('*, contacts(*)')
      .eq('contact_id', contactId)
      .single()
    
    if (error) throw error
    return data
  }

  // Patient methods
  static async createPatient(patient: Omit<Patient, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('patients')
      .insert(patient)
      .select()
      .single()
    
    if (error) throw error
    return data
  }

  static async getPatientByContactId(contactId: string) {
    const { data, error } = await supabase
      .from('patients')
      .select('*, contacts(*)')
      .eq('contact_id', contactId)
      .single()
    
    if (error) throw error
    return data
  }

  // Private consultation methods
  static async createPrivateConsultation(consultation: Omit<PrivateConsultation, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('private_consultations')
      .insert(consultation)
      .select()
      .single()
    
    if (error) throw error
    return data
  }

  static async getConsultationByContactId(contactId: string) {
    const { data, error } = await supabase
      .from('private_consultations')
      .select('*, contacts(*)')
      .eq('contact_id', contactId)
      .single()
    
    if (error) throw error
    return data
  }

  // Analytics methods
  static async getFormSubmissionStats(dateRange?: { start: string; end: string }) {
    let query = supabase
      .from('contacts')
      .select('form_type, language, country, created_at')
    
    if (dateRange) {
      query = query
        .gte('created_at', dateRange.start)
        .lte('created_at', dateRange.end)
    }
    
    const { data, error } = await query
    
    if (error) throw error
    return data
  }

  // Helper method for form submissions
  static async submitForm(formData: {
    contact: Omit<Contact, 'id' | 'created_at' | 'updated_at'>
    additionalData?: Partial<Sponsor> | Partial<Patient> | Partial<PrivateConsultation>
  }) {
    try {
      // Create contact first
      const contact = await this.createContact(formData.contact)
      
      // Create related data based on form type
      if (formData.additionalData && contact.id) {
        switch (formData.contact.form_type) {
          case 'sponsor':
            await this.createSponsor({
              ...formData.additionalData as Partial<Sponsor>,
              contact_id: contact.id
            } as Omit<Sponsor, 'id' | 'created_at'>)
            break
          case 'patient':
            await this.createPatient({
              ...formData.additionalData as Partial<Patient>,
              contact_id: contact.id
            } as Omit<Patient, 'id' | 'created_at'>)
            break
          case 'consultation':
            await this.createPrivateConsultation({
              ...formData.additionalData as Partial<PrivateConsultation>,
              contact_id: contact.id
            } as Omit<PrivateConsultation, 'id' | 'created_at'>)
            break
        }
      }
      
      return { success: true, contact }
    } catch (error) {
      console.error('Form submission error:', error)
      return { success: false, error }
    }
  }
}

export default SupabaseService