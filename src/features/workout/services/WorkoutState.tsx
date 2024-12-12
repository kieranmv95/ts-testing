'use client';

import React, { createContext, useState, ReactNode } from 'react';
import { Workout } from '@/types';
import { data } from '../data';

export type WorkoutContextType = {
  data: Workout;
  setState: React.Dispatch<React.SetStateAction<Workout>>;
};

export const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export const WorkoutStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<Workout>({});

  return (
    <WorkoutContext.Provider value={{ data, setState }}>
      {children}
    </WorkoutContext.Provider>
  );
};
