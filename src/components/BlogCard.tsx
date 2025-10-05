import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
}

export default function BlogCard({ image, category, title, excerpt, author, date, readTime }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:-translate-y-1 transition-transform duration-200">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 text-sm">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
            {category}
          </span>
          <span className="text-muted-foreground">{readTime}</span>
        </div>

        <h3 className="text-xl font-semibold text-card-foreground line-clamp-2 hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-card-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="text-primary hover:text-primary p-0 h-auto"
            data-testid="button-read-more"
          >
            Leer →
          </Button>
        </div>
      </div>
    </Card>
  );
}
