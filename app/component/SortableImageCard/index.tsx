import styles from './styles.css';
import Image from '../Image';
import { MdClose } from 'react-icons/md';
import { useSortable } from '@dnd-kit/sortable';

interface SortableImageCardProps {
  id: string;
  imageUrl: string;
  onRemove: () => void;
}

export default function SortableImageCard({ id, imageUrl, onRemove }: SortableImageCardProps) {
  const { attributes, listeners } = useSortable({ id });

  return (
    <div className={styles.container}>
      <button className={styles.removeButton} onClick={onRemove}>
        <MdClose />
      </button>

      <div className={styles.imageContainer} {...attributes} {...listeners}>
        <Image src={imageUrl} alt="Removable" />
      </div>
    </div>
  );
}
