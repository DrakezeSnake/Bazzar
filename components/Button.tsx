import { ReactNode } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  color?: 'ink' | 'clay' | 'teal' | 'gold';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  color = 'ink',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-medium border transition-all duration-150 cursor-pointer';

  const variants = {
    primary: {
      ink: 'bg-ink text-paper border-transparent hover:shadow-sm hover:translate-y-[-1px]',
      clay: 'bg-clay text-white border-transparent hover:shadow-sm hover:translate-y-[-1px]',
      teal: 'bg-teal text-paper border-transparent hover:shadow-sm hover:translate-y-[-1px]',
      gold: 'bg-gold text-ink border-transparent hover:shadow-sm hover:translate-y-[-1px]',
    },
    secondary: {
      ink: 'bg-paper border-line text-ink hover:bg-sand',
      clay: 'bg-paper border-clay text-clay hover:bg-sand',
      teal: 'bg-paper border-teal text-teal hover:bg-sand',
      gold: 'bg-paper border-gold text-gold hover:bg-sand',
    },
    ghost: {
      ink: 'bg-transparent border-line text-ink hover:bg-sand-100',
      clay: 'bg-transparent border-clay text-clay hover:bg-sand-100',
      teal: 'bg-transparent border-teal text-teal hover:bg-sand-100',
      gold: 'bg-transparent border-gold text-gold hover:bg-sand-100',
    },
  };

  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-4 text-base',
  };

  const variantStyle = variants[variant][color];
  const sizeStyle = sizes[size];

  return (
    <button
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
