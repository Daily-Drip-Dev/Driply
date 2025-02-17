import { COFFEE_SCORE_TITLE } from 'src/constants';
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

  scores: {
    flavor: 0;
    sweetness: 0;
    acidity: 0;
    balance: 0;
    overall: 0;
  };
  setScore: (key: keyof typeof COFFEE_SCORE_TITLE, value: number) => void;
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

  title: '',
  description: '',
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),

  scores: {
    flavor: 0,
    sweetness: 0,
    acidity: 0,
    balance: 0,
    overall: 0,
  },
  setScore: (key: keyof typeof COFFEE_SCORE_TITLE, value: number) => {
    set((state) => ({
      scores: {
        ...state.scores,
        [key]: value,
      },
    }));
  },
}));
