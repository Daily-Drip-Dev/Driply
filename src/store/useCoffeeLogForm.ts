import { arrayMove } from '@dnd-kit/sortable';
import { create } from 'zustand';

interface ImageState {
  id: string;
  file: File;
  previewUrl: string;
}

interface CoffeeLogFormState {
  images: ImageState[];
  pushImages: (files: File[]) => void;
  deleteImage: (index: number) => void;
  switchImageOrder: (currentId: string, targetId: string) => void;

  // TODO: 카카오 위치에 대한 정보 저장 필요
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (title: string) => void;
}

export const useCoffeeLogForm = create<CoffeeLogFormState>((set, get) => ({
  images: [],
  pushImages: (files) => {
    const transformedFiles = files.map((file) => {
      const url = URL.createObjectURL(file);
      return {
        id: url,
        file,
        previewUrl: url,
      };
    });
    set({ images: [...get().images, ...transformedFiles] });
  },
  deleteImage: (index) => {
    const curImages = get().images;
    URL.revokeObjectURL(curImages[index].previewUrl);
    set({ images: [...curImages.slice(0, index), ...curImages.slice(index + 1)] });
  },
  switchImageOrder: (currentId, targetId) => {
    const prevImages = get().images;
    const currentIndex = prevImages.findIndex(({ id }) => id === currentId);
    const targetIndex = prevImages.findIndex(({ id }) => id === targetId);

    if (currentIndex === targetIndex) return;
    const newImages = arrayMove(prevImages, currentIndex, targetIndex);
    set({ images: newImages });
  },

  title: '',
  description: '',
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
}));
