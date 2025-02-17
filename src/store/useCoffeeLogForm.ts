import { COFFEE_SCORE_TITLE } from 'src/constants';
import { create } from 'zustand';

type ScoreTitle = keyof typeof COFFEE_SCORE_TITLE;
type ScoreStepValues = {
  [key in ScoreTitle]: number;
};

interface ImageState {
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

  setTitle: (title: string) => void;
  setDescription: (title: string) => void;

  setScore: (key: ScoreTitle, value: number) => void;
  getScore: (key: ScoreTitle) => number;
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
