import { Icon } from './Icon';

export interface RatingProps {
  value: number;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 12,
  md: 14,
  lg: 16,
};

export function Rating({ value, count, size = 'sm' }: RatingProps) {
  const iconSize = sizeMap[size] + 2;

  return (
    <span className="inline-flex items-center gap-1" style={{ fontSize: sizeMap[size] }}>
      <Icon name="star" size={iconSize} fill="#C9A24A" stroke="none" />
      <span className="font-medium">{value.toFixed(1)}</span>
      {count !== undefined && <span className="text-muted">({count})</span>}
    </span>
  );
}
