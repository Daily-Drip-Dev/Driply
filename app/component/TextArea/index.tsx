import { TextareaHTMLAttributes } from 'react';
import styles from './styles.css';
import { typography } from 'src/vanilla-extract/typography.css';
import clsx from 'clsx';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  showCounter?: boolean;
}

export default function TextArea({
  value,
  onChange,
  placeholder,
  maxLength,
  showCounter,
  rows = 5,
  className,
  ...rest
}: TextAreaProps) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!maxLength || event.target.value.length <= maxLength) {
      onChange?.(event);
    }
  };

  return (
    <div className={styles.container}>
      <textarea
        className={clsx(styles.textarea, className)}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={handleChange}
        {...rest}
      />
      {showCounter && maxLength && (
        <span className={clsx(styles.counter, typography.small)}>
          ({value ? value.length : 0}/{maxLength})
        </span>
      )}
    </div>
  );
}
