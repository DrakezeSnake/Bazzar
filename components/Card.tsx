import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'sand';
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const bgClass = variant === 'sand' ? 'bg-sand' : 'bg-paper';

  return (
    <div
      className={`rounded-lg border border-line-2 shadow-sm ${bgClass} ${className}`}
    >
      {children}
    </div>
  );
}
