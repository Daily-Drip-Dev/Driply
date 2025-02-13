import styles from './styles.css';
import { useCoffeeLogForm } from 'src/store/useCoffeeLogForm';
import ImageUploader from '../ImageUploader';
import RemovableImageCard from '../RemovableImage';
import { ChangeEvent } from 'react';
import { DndContext, type DragMoveEvent } from '@dnd-kit/core';
import { horizontalListSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const MAX_IMAGE_COUNT = 3;

export default function ImageInputSection() {
  const { images, pushImages, deleteImage, switchImageOrder } = useCoffeeLogForm();

  const handleUploaderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    pushImages(Array.from(files).slice(0, MAX_IMAGE_COUNT - images.length));
  };

  const handleDragEnd = ({ active, over }: DragMoveEvent) => {
    if (!over || !active.id || !over.id || active.id === over.id) return;
    switchImageOrder(String(active.id), String(over.id));
  };

  return (
    <section aria-labelledby="image-section" className={styles.container}>
      <ImageUploader maxCount={MAX_IMAGE_COUNT} onChange={handleUploaderChange} currentCount={images.length} />

      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={images} strategy={horizontalListSortingStrategy}>
          {images.map((image, index) => (
            <Draggable key={image.id} imageUrl={image.previewUrl} onRemove={() => deleteImage(index)} id={image.id} />
          ))}
        </SortableContext>
      </DndContext>
    </section>
  );
}

function Draggable({ imageUrl, id, onRemove }: { imageUrl: string; id: string; onRemove: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <RemovableImageCard imageUrl={imageUrl} onRemove={onRemove} />
    </div>
  );
}
