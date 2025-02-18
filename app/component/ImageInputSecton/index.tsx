import styles from './styles.css';
import { useCoffeeLogForm } from 'src/store/useCoffeeLogForm';
import ImageUploader from '../ImageUploader';
import SortableImageCard from '../SortableImageCard';
import { ChangeEvent } from 'react';
import { DndContext, type DragMoveEvent } from '@dnd-kit/core';
import { horizontalListSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import imageCompression from 'browser-image-compression';

const MAX_IMAGE_COUNT = 3;

export default function ImageInputSection() {
  const { images, pushImages, deleteImage, switchImageOrder } = useCoffeeLogForm();

  const handleUploaderChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    for (const file of Array.from(files)) {
      if (file.size > 1 * 1024 * 1024) {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          initialQuality: 0.8,
          fileType: 'image/webp',
        };

        try {
          const compressedFile = await imageCompression(file, options);
          pushImages([compressedFile]);
        } catch (error) {
          alert('압축 중 오류가 발생해 업로드에 실패했습니다.');
        }
      } else {
        pushImages([file]);
      }
    }
  };

  const handleDragEnd = ({ active, over }: DragMoveEvent) => {
    if (!over || !active.id || !over.id || active.id === over.id) return;
    switchImageOrder(String(active.id), String(over.id));
  };

  return (
    <section aria-labelledby="image-section" className={styles.container}>
      <DndContext onDragEnd={handleDragEnd}>
        <ImageUploader maxCount={MAX_IMAGE_COUNT} onChange={handleUploaderChange} currentCount={images.length} />

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
  const { setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition: `${transition}, box-shadow 0.2s ease`,
    boxShadow: isDragging ? '0 10px 20px rgba(0, 0, 0, 0.5)' : 'none',
    zIndex: isDragging ? '1' : '0',
  };

  return (
    <div ref={setNodeRef} style={style}>
      <SortableImageCard id={id} imageUrl={imageUrl} onRemove={onRemove} />
    </div>
  );
}
