import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.css';
import clsx from 'clsx';

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  highlight?: boolean;
}

export default function Button({ children, highlight = false, disabled, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, highlight && styles.highlight, disabled && styles.disabled, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
