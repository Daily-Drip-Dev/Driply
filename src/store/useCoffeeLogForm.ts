import { create } from 'zustand';

interface ImageState {
  file: File;
  previewUrl: string;
}

interface CoffeeLogFormState {
  images: ImageState[];
  pushImages: (files: File[]) => void;
  deleteImage: (index: number) => void;

  // TODO: 카카오 위치에 대한 정보 저장 필요
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (title: string) => void;
}

export const useCoffeeLogForm = create<CoffeeLogFormState>((set, get) => ({
  images: [],
  pushImages: (files) => {
    const trsnsfiledFiles = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    set({ images: [...get().images, ...trsnsfiledFiles] });
  },
  deleteImage: (index) => {
    const curImages = get().images;
    set({ images: [...curImages.slice(0, index), ...curImages.slice(index + 1)] });
  },

  title: '',
  description: '',
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
}));
