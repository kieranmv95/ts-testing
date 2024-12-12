'use client';

import { Header, Section } from '../components';
import { WorkoutStateProvider } from '../services/WorkoutState';
import { useWorkoutStateContext } from '../hooks/useWorkoutContext';

const RenderSections = () => {
  const {
    data: { sections },
  } = useWorkoutStateContext();

  return (
    <div className="grid gap-4">
      {sections.map((section) => (
        <Section key={section.title} section={section} />
      ))}
    </div>
  );
};

export const Workout = () => {
  return (
    <WorkoutStateProvider>
      <Header />
      <RenderSections />
    </WorkoutStateProvider>
  );
};
