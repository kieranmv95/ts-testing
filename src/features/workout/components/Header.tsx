'use client';

import { useWorkoutStateContext } from '@/features/workout/hooks/useWorkoutContext';

export const Header = () => {
  const {
    data: { title, description, categories },
  } = useWorkoutStateContext();

  return (
    <div className="space-y-2 mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p>{description}</p>}
      {categories && (
        <div className="flex">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-sky-400 text-black py-1 px-3 rounded-full text-sm"
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
