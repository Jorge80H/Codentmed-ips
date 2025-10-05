import { cn } from '@/lib/utils'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
}

export function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-primary-600',
        sizeClasses[size],
        className
      )}
    />
  )
}

interface LoadingProps {
  text?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Loading({ text, size = 'md', className }: LoadingProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center space-y-3', className)}>
      <Spinner size={size} />
      {text && <p className="text-sm text-gray-600">{text}</p>}
    </div>
  )
}

interface LoadingOverlayProps {
  isLoading: boolean
  text?: string
  children: React.ReactNode
}

export function LoadingOverlay({ isLoading, text = 'Loading...', children }: LoadingOverlayProps) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <Loading text={text} size="lg" />
        </div>
      )}
    </div>
  )
}

// Page-level loading component
interface PageLoadingProps {
  text?: string
}

export function PageLoading({ text = 'Loading page...' }: PageLoadingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Spinner size="xl" className="mx-auto mb-4" />
        <h2 className="text-lg font-medium text-gray-900 mb-2">CODENTMED IPS</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  )
}

// Button loading state
interface LoadingButtonProps {
  isLoading: boolean
  children: React.ReactNode
  loadingText?: string
}

export function LoadingButton({ isLoading, children, loadingText = 'Loading...' }: LoadingButtonProps) {
  if (isLoading) {
    return (
      <span className="flex items-center">
        <Spinner size="sm" className="mr-2" />
        {loadingText}
      </span>
    )
  }
  
  return <>{children}</>
}