import type { ExerciseFormType, ExerciseType } from '@/types/Exercise';

type WorkoutExercise = {
  name: string;
  type: ExerciseType;
  formType: ExerciseFormType;
  sets: number;
  rest: number;
};

type WorkoutSection = {
  title: string;
  exercises: WorkoutExercise[];
};

export type Workout = {
  title: string;
  creationDate: string;
  categories: string[];
  sections: WorkoutSection[];
};
