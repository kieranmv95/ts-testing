import type { ExerciseFormType, ExerciseType } from '@/types/Exercise';

export type WorkoutSet = {
  repetitions?: number;
  time?: number | null;
  weight?: number | null;
};

export type WorkoutExercise = {
  id: string;
  name: string;
  description?: string;
  type: ExerciseType;
  formType: ExerciseFormType;
  sets: WorkoutSet[];
  rest?: number;
};

export type WorkoutSection = {
  title: string;
  description?: string;
  exercises: WorkoutExercise[];
};

export type Workout = {
  title: string;
  description?: string;
  creationDate: string;
  categories: string[];
  sections: WorkoutSection[];
};
