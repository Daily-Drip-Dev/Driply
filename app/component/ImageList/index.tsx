import RemovableImage from '../RemovableImage';
import styles from './styles.css';

interface ImageListProps {
  imageObjects: {
    id: string;
    url: string;
    onRemove: () => void;
  }[];
}

export default function ImageList({ imageObjects }: ImageListProps) {
  return (
    <div className={styles.container}>
      {imageObjects.map((image) => (
        <RemovableImage key={image.id} imageUrl={image.url} onRemove={image.onRemove} />
      ))}
    </div>
  );
}
