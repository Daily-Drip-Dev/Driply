import styles from './styles.css';
import Image from '../Image';
import { MdClose } from 'react-icons/md';

interface RemovableImageCardProps {
  imageUrl: string;
  onRemove: () => void;
}

export default function RemovableImageCard({ imageUrl, onRemove }: RemovableImageCardProps) {
  return (
    <div className={styles.container}>
      <button className={styles.removeButton} onClick={onRemove}>
        <MdClose />
      </button>

      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt="Removable" />
      </div>
    </div>
  );
}
