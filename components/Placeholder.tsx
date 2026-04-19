export interface PlaceholderProps {
  label: string;
  color?: 'clay' | 'teal' | 'sand' | 'ink' | 'gold';
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const colorMap = {
  clay: 'bg-[#E8C9B5]',
  teal: 'bg-[#BCD1CE]',
  sand: 'bg-[#E3D4B8]',
  ink: 'bg-[#3A322B]',
  gold: 'bg-[#E8D9B2]',
};

export function Placeholder({
  label,
  color = 'sand',
  style,
  className = '',
  children,
}: PlaceholderProps) {
  const bgClass = colorMap[color];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-base ${bgClass} ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(
          135deg,
          rgba(42,37,32,0.04) 0px,
          rgba(42,37,32,0.04) 1px,
          transparent 1px,
          transparent 9px
        )`,
        ...style,
      }}
    >
      {children}
      <span
        className="rounded bg-paper/85 px-2 py-1 font-mono text-xs uppercase tracking-wider text-ink/40"
        style={{
          color: color === 'ink' ? 'rgba(243,234,219,0.4)' : 'rgba(42,37,32,0.4)',
        }}
      >
        {label}
      </span>
    </div>
  );
}
