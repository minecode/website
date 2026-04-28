import { Input } from '../ui/input';
import { THEME } from '../../constants/theme';

interface FormFieldProps {
  label: string;
  id: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  rows?: number;
  className?: string;
}

export function FormField({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  rows = 5,
  className = '',
}: FormFieldProps) {
  const isTextarea = type === 'textarea';

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className="w-full bg-gray-900/50 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#98ef3c] focus:outline-none rounded px-4 py-2 transition-colors"
          style={{ borderColor: `${THEME.colors.primary}4d` }}
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500 focus:border-[#98ef3c]"
        />
      )}
    </div>
  );
}
