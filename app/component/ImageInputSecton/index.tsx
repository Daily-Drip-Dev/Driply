import { useCoffeeLogForm } from 'src/store/useCoffeeLogForm';
import ImageUploader from '../ImageUploader';
import RemovableImageCard from '../RemovableImage';
import { ChangeEvent } from 'react';
import styles from './styles.css';

const MAX_IMAGE_COUNT = 3;

export default function ImageInputSection() {
  const { images, pushImages, deleteImage } = useCoffeeLogForm();

  const handleUploaderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    pushImages(Array.from(files).slice(0, MAX_IMAGE_COUNT - images.length));
  };

  return (
    <section aria-labelledby="image-section" className={styles.container}>
      <ImageUploader maxCount={MAX_IMAGE_COUNT} onChange={handleUploaderChange} currentCount={images.length} />

      {images.map((image, index) => (
        <RemovableImageCard key={index} imageUrl={image.previewUrl} onRemove={() => deleteImage(index)} />
      ))}
    </section>
  );
}
