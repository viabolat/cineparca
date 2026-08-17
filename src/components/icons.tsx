interface IconProps {
  size?: number;
  color?: string;
}

const base = {
  fill: 'none',
  strokeWidth: 2.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function PinIcon({ size = 38, color = 'var(--color-accent-600)' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={color}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function SearchIcon({ size = 16, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={color}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function WifiIcon({ size = 17, color = 'var(--color-neutral-500)' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={color}>
      <path d="M5 13a10 10 0 0 1 14 0" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}

export function WifiOffIcon({ size = 17, color = 'var(--color-accent-600)' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={color}>
      <path d="M5 13a10 10 0 0 1 14 0" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export function AlertIcon({ size = 16, color = 'var(--color-accent-700)' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={color} style={{ flex: 'none', marginTop: 1 }}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function ClockIcon({ size = 12, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={color}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function ChevronLeftIcon({ size = 20, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={color}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function CloseIcon({ size = 15, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={color}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
