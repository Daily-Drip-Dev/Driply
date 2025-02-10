import { create } from 'zustand';

interface ImageState {
  file: File;
  previewUrl: string;
}

interface CoffeeLogFormState {
  images: ImageState[];
  pushImages: (files: File[]) => void;
  deleteImage: (index: number) => void;
}

export const useCoffeeLogForm = create<CoffeeLogFormState>((set, get) => ({
  images: [],
  pushImages: (files) => {
    const transformedFiles = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    set({ images: [...get().images, ...transformedFiles] });
  },
  deleteImage: (index) => {
    const curImages = get().images;
    set({ images: [...curImages.slice(0, index), ...curImages.slice(index + 1)] });
  },
}));
