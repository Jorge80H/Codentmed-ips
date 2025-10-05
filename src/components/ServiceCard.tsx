import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LucideIcon, Check } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  cta?: string;
  href?: string;
  features?: string[];
}

export default function ServiceCard({ icon: Icon, title, description, cta, href, features }: ServiceCardProps) {
  return (
    <Card className="p-8 space-y-4 hover:-translate-y-1 transition-transform duration-200">
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      {cta && (
        <Button 
          variant="ghost" 
          className="w-full justify-start p-0 h-auto font-medium text-primary hover:text-primary"
          data-testid={`button-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {cta} →
        </Button>
      )}
    </Card>
  );
}
