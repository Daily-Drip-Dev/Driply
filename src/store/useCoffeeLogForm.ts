import { COFFEE_SCORE_TITLE } from 'src/constants';
import { create } from 'zustand';
import { arrayMove } from '@dnd-kit/sortable';

type ScoreTitle = keyof typeof COFFEE_SCORE_TITLE;
type ScoreStepValues = {
  [key in ScoreTitle]: number;
};
interface ImageState {
  id: string;
  file: File;
  previewUrl: string;
}
type MetaStepValues = {
  images: ImageState[];
  title: string;
  description: string;
};

interface CoffeeLogFormState extends ScoreStepValues, MetaStepValues {
  pushImages: (files: File[]) => void;
  deleteImage: (index: number) => void;
  switchImageOrder: (currentId: string, targetId: string) => void;

  setTitle: (title: string) => void;
  setDescription: (title: string) => void;

  setScore: (key: ScoreTitle, value: number) => void;
  getScore: (key: ScoreTitle) => number;
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

  flavor: 0,
  sweetness: 0,
  acidity: 0,
  balance: 0,
  overall: 0,
  setScore: (key, value) => {
    set((state) => ({ ...state, [key]: value }));
  },
  getScore: (key: ScoreTitle) => {
    return get()[key];
  },
}));
