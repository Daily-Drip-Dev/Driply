import clsx from 'clsx';
import { TbLoader2 } from 'react-icons/tb';
import styles from './styles.css';
interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function Loader({ size = 'md' }: LoaderProps) {
  return (
    <div className={clsx(styles.container, styles.size[size])}>
      <TbLoader2 />
    </div>
  );
}
