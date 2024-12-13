import { WorkoutExercise, WorkoutSet } from '@/types';
import { ExerciseGridHeader } from '@/features/workout/components/ExerciseGridHeader';
import * as Forms from './forms';
import { ExerciseFormType } from '@/types/Exercise';

type ExerciseProps = {
  exercise: WorkoutExercise;
};

export const Exercise = ({ exercise }: ExerciseProps) => {
  const getExerciseForm = (
    formType: ExerciseFormType,
    index: number,
    set: WorkoutSet
  ) => {
    switch (formType) {
      case 'weightReps':
        return (
          <Forms.WeightAndReps
            exerciseId={exercise.id}
            setIndex={index}
            weight={set.weight}
            repetitions={set.repetitions}
          />
        );
      case 'reps':
        return (
          <Forms.Reps
            exerciseId={exercise.id}
            setIndex={index}
            repetitions={set.repetitions}
          />
        );
      case 'bodyWeight':
        return (
          <Forms.WeightAndReps
            exerciseId={exercise.id}
            setIndex={index}
            repetitions={set.repetitions}
            weight={set.weight}
          />
        );
      case 'time':
        return (
          <Forms.TimeForm
            exerciseId={exercise.id}
            setIndex={index}
            time={set.time}
          />
        );
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-sky-400">{exercise.name}</h3>
      <div className="grid gap-2 text-sm">
        <ExerciseGridHeader
          formType={exercise.formType}
          description={exercise.description}
        />

        {exercise.sets.map((set, i) => (
          <div key={i.toString()}>
            {getExerciseForm(exercise.formType, i, set)}
          </div>
        ))}
      </div>
    </div>
  );
};
