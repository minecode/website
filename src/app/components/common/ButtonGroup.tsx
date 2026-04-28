import { Button } from '../ui/button';
import { THEME } from '../../constants/theme';

interface ButtonAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

interface ButtonGroupProps {
  actions: ButtonAction[];
  direction?: 'row' | 'col';
  gap?: string;
  className?: string;
}

export function ButtonGroup({
  actions,
  direction = 'row',
  gap = '4',
  className = '',
}: ButtonGroupProps) {
  return (
    <div className={`flex flex-col sm:flex-${direction} gap-${gap} ${className}`}>
      {actions.map((action) => (
        <Button
          key={action.label}
          onClick={action.onClick}
          variant={action.variant === 'secondary' ? 'outline' : 'default'}
          size="lg"
          className="group font-semibold"
          style={
            action.variant === 'primary'
              ? {
                  backgroundColor: THEME.colors.primary,
                  color: 'black',
                }
              : {
                  borderColor: `${THEME.colors.primary}4d`,
                  color: 'white',
                }
          }
        >
          {action.label}
          {action.icon && <span className="ml-2">{action.icon}</span>}
        </Button>
      ))}
    </div>
  );
}
