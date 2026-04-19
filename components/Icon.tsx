export interface IconProps {
  name: string;
  size?: number;
  stroke?: string;
  fill?: string;
  className?: string;
}

const ICONS: Record<string, string> = {
  search: 'M10 14l6 6m-8-8a7 7 0 1 1 0-14a7 7 0 0 1 0 14z',
  heart: 'M12 21s-7-4.5-9-9.5C1.6 7.5 4 4.5 7.5 4.5c2 0 3.5 1.2 4.5 2.5 1-1.3 2.5-2.5 4.5-2.5C20 4.5 22.4 7.5 21 11.5 19 16.5 12 21 12 21z',
  home: 'M3 12l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z',
  heart_fill: 'M12 21s-7-4.5-9-9.5C1.6 7.5 4 4.5 7.5 4.5c2 0 3.5 1.2 4.5 2.5 1-1.3 2.5-2.5 4.5-2.5C20 4.5 22.4 7.5 21 11.5 19 16.5 12 21 12 21z M12 21s-7-4.5-9-9.5C1.6 7.5 4 4.5 7.5 4.5c2 0 3.5 1.2 4.5 2.5 1-1.3 2.5-2.5 4.5-2.5C20 4.5 22.4 7.5 21 11.5 19 16.5 12 21 12 21z',
  bag: 'M5 7h14l-1 13H6L5 7zM9 7V5a3 3 0 016 0v2',
  star: 'M12 3l2.8 5.8L21 10l-4.5 4.4L17.6 21 12 17.8 6.4 21l1.1-6.6L3 10l6.2-1.2L12 3z',
  chevron: 'M9 6l6 6-6 6',
  chevronDown: 'M6 9l6 6 6-6',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  check: 'M5 12l4 4 10-10',
  close: 'M6 6l12 12M18 6L6 18',
  message: 'M4 5h16a1 1 0 011 1v11a1 1 0 01-1 1H9l-4 3v-3H4a1 1 0 01-1-1V6a1 1 0 011-1z',
  share: 'M6 12a2.5 2.5 0 105 0M18 6a2.5 2.5 0 105 0M18 18a2.5 2.5 0 105 0M8 11l8-4M8 13l8 4',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowLeft: 'M19 12H5M11 6l-6 6 6 6',
  sparkle: 'M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3',
  globe: 'M12 3c-3 3-3 15 0 18m0-18c3 3 3 15 0 18m9-8c0-7-4-9-9-9s-9 2-9 9',
  bell: 'M6 16V10a6 6 0 1112 0v6l2 2H4l2-2zM10 20a2 2 0 004 0',
  user: 'M12 8a3 3 0 110-6 3 3 0 010 6zM4 20c0-4.4 3.6-8 8-8s8 3.6 8 8',
  grid: 'M3 3h8v8H3V3zM13 3h8v8h-8V3zM3 13h8v8H3v-8zM13 13h8v8h-8v-8z',
  filter: 'M4 6h16M7 12h10M10 18h4',
  truck: 'M3 7h10v10H3zM13 10h4l3 3v4h-7V10zM7 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM17 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3z',
  package: 'M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M3 7l9 4 9-4',
  compass: 'M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zM15 9l-2 6-6 2 2-6 6-2z',
  image: 'M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2zM9 10a2 2 0 110-4 2 2 0 010 4zM21 16l-5-5-9 9',
};

export function Icon({ name, size = 20, stroke = 'currentColor', fill = 'none', className = '' }: IconProps) {
  const d = ICONS[name];
  if (!d) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block flex-shrink-0 ${className}`}
    >
      <path d={d} />
    </svg>
  );
}
