import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-950 border-gray-200',
        destructive:
          'border-red-200 bg-red-50 text-red-900 [&>svg]:text-red-600',
        warning:
          'border-yellow-200 bg-yellow-50 text-yellow-900 [&>svg]:text-yellow-600',
        success:
          'border-green-200 bg-green-50 text-green-900 [&>svg]:text-green-600',
        info:
          'border-blue-200 bg-blue-50 text-blue-900 [&>svg]:text-blue-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Alert = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = 'Alert'

const AlertTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

// Alert with icon component
interface AlertWithIconProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'success' | 'warning' | 'destructive' | 'info'
  title?: string
  children: React.ReactNode
}

const AlertWithIcon = forwardRef<HTMLDivElement, AlertWithIconProps>(
  ({ variant, title, children, className, ...props }, ref) => {
    const icons = {
      success: CheckCircleIcon,
      warning: ExclamationTriangleIcon,
      destructive: XCircleIcon,
      info: InformationCircleIcon,
    }
    
    const Icon = icons[variant]
    
    return (
      <Alert ref={ref} variant={variant} className={className} {...props}>
        <div className="flex">
          <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            {title && <AlertTitle>{title}</AlertTitle>}
            <AlertDescription>{children}</AlertDescription>
          </div>
        </div>
      </Alert>
    )
  }
)
AlertWithIcon.displayName = 'AlertWithIcon'

export { Alert, AlertTitle, AlertDescription, AlertWithIcon }