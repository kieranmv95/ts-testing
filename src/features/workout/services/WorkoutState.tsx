'use client';

import React, { createContext, useState, ReactNode } from 'react';
import { Workout } from '@/types';
import { data } from '../data';

export type WorkoutContextType = {
  data: Workout;
  values: { [key: string]: { [set: number]: any }[] };
  updateValue: (
    id: string,
    indeex: number,
    update: { [key: string]: any }
  ) => void;
};

export const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export const WorkoutStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [values, setValues] = useState<{ [key: string]: any }>({});

  const updateValue = (
    id: string,
    index: number,
    update: { [key: string]: any }
  ) => {
    console.log({ [id]: update, ...values });

    const buildUpdate = {
      [index]: update,
      ...values[id],
    };

    console.log({ [id]: buildUpdate, ...values });

    setValues({ [id]: buildUpdate, ...values });
  };

  return (
    <WorkoutContext.Provider value={{ data, values, updateValue }}>
      {children}
    </WorkoutContext.Provider>
  );
};
