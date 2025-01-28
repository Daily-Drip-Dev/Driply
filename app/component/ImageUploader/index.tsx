import { typography } from 'src/vanilla-extract/typography.css';
import styles from './styles.css';
import { MdOutlineCameraAlt } from 'react-icons/md';
import clsx from 'clsx';

interface ImageUploaderProps {
  maxCount: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentCount: number;
}

export default function ImageUploader({ maxCount, onChange, currentCount }: ImageUploaderProps) {
  const disabled = currentCount === maxCount;
  return (
    <div className={clsx(styles.container, disabled && styles.disabled)}>
      <MdOutlineCameraAlt className={styles.icon} />
      <span className={typography.small}>
        {currentCount} / {maxCount}
      </span>
      <input type="file" accept="image/*" multiple disabled={disabled} className={styles.input} onChange={onChange} />
    </div>
  );
}
