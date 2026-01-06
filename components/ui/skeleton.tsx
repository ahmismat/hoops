import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        'bg-slate-200 dark:bg-slate-800',
        'animate-pulse',
        'relative overflow-hidden',
        'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
        className
      )}
      {...props}
    />
  )
}

function SkeletonImage({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-slate-200 dark:bg-slate-800',
        'animate-pulse overflow-hidden',
        'relative',
        'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
        'border border-slate-300 dark:border-slate-700',
        className
      )}
      {...props}
    />
  )
}

function SkeletonText({ lines = 1, className, ...props }: React.ComponentProps<'div'> & { lines?: number }) {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            'h-4',
            i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
          )}
          style={{
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  )
}

function SkeletonCard({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div 
      className={cn(
        'p-8 border border-slate-200 dark:border-slate-800',
        'bg-white dark:bg-slate-900',
        className
      )} 
      {...props}
    >
      <Skeleton className="h-6 w-2/3 mb-4" />
      <SkeletonText lines={3} />
    </div>
  )
}

export { Skeleton, SkeletonImage, SkeletonText, SkeletonCard }
