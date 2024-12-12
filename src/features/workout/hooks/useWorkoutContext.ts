import { useContext } from 'react';
import { WorkoutContext, WorkoutContextType } from '../services/WorkoutState';

export const useWorkoutStateContext = (): WorkoutContextType => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      'useWorkoutStateContext must be used within a WorkoutStateProvider'
    );
  }

  return context;
};
