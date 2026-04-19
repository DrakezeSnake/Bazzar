interface StoreAvatarProps {
  store?: { name?: { en?: string; ar?: string } } | string;
  size?: number;
  color?: 'clay' | 'teal' | 'sand' | 'ink' | 'gold';
}

const colorMap = {
  clay: '#C97A50',
  teal: '#1F4A47',
  sand: '#C9A24A',
  ink: '#2A2520',
  gold: '#C9A24A',
};

export function StoreAvatar({ store, size = 40, color = 'ink' }: StoreAvatarProps) {
  const name = typeof store === 'string' ? store : (store?.name?.en || '?');
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <div
      style={{
        width: size,
        height: size,
        background: colorMap[color],
        color: '#FBF6EC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        fontFamily: 'var(--font-display)',
        fontSize: size * 0.42,
        fontWeight: 500,
        letterSpacing: '-0.02em',
      }}
    >
      {initials}
    </div>
  );
}
