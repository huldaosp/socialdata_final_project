import { Smile, Meh, Frown } from 'lucide-react';

type SmileyType = 'happy' | 'neutral' | 'sad';

interface SmileyIconProps {
  type: SmileyType;
  size?: number;
  className?: string;
}

export function SmileyIcon({ type, size = 48, className = '' }: SmileyIconProps) {
  const getColor = () => {
    switch (type) {
      case 'happy':
        return 'var(--smiley-happy)';
      case 'neutral':
        return 'var(--smiley-neutral)';
      case 'sad':
        return 'var(--smiley-sad)';
    }
  };

  const Icon = type === 'happy' ? Smile : type === 'neutral' ? Meh : Frown;

  return (
    <Icon
      size={size}
      className={className}
      style={{ color: getColor() }}
      strokeWidth={1.5}
    />
  );
}
