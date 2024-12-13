import { WorkoutExercise } from '@/types';
import { ExerciseGridHeader } from '@/features/workout/components/ExerciseGridHeader';
import {
  RepsForm,
  TimeForm,
  WeightAndRepsForm,
} from '@/features/workout/components/ExerciseForm';

type ExerciseProps = {
  exercise: WorkoutExercise;
};

export const Exercise = ({ exercise }: ExerciseProps) => (
  <div>
    <h3 className="text-lg font-bold text-sky-400">{exercise.name}</h3>
    <div className="grid gap-2 text-sm">
      <ExerciseGridHeader
        formType={exercise.formType}
        description={exercise.description}
      />

      {exercise.sets.map((set, i) => (
        <div key={i.toString()}>
          {exercise.formType === 'weightReps' && (
            <WeightAndRepsForm
              exerciseId={exercise.id}
              set={i}
              weight={set.weight}
              repetitions={set.repetitions}
            />
          )}
          {exercise.formType === 'reps' && (
            <RepsForm
              exerciseId={exercise.id}
              set={i}
              repetitions={set.repetitions}
            />
          )}
          {exercise.formType === 'bodyWeight' && (
            <WeightAndRepsForm
              exerciseId={exercise.id}
              set={i}
              repetitions={set.repetitions}
              weight={set.weight}
            />
          )}
          {exercise.formType === 'time' && (
            <TimeForm
              exerciseId={exercise.id}
              key={i.toString()}
              set={i}
              time={set.time}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);
