import { InputHTMLAttributes } from 'react';
import styles from './styles.css';
import clsx from 'clsx';
import { typography } from 'src/vanilla-extract/typography.css';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  showCounter?: boolean;
}

export default function Input({
  value,
  onChange,
  placeholder,
  maxLength,
  showCounter,
  className,
  ...rest
}: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!maxLength || event.target.value.length <= maxLength) {
      onChange?.(event);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={clsx(styles.input, className)}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      {showCounter && maxLength && (
        <span className={clsx(styles.counter, typography.xSmall)}>
          ({value ? value.length : 0}/{maxLength})
        </span>
      )}
    </div>
  );
}
