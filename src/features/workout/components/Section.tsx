'use client';

import { useState } from 'react';
import { WorkoutSection } from '@/types';
import { Button } from '@/components';
import { Exercise } from './Exercise';

type SectionProps = {
  section: WorkoutSection;
};

export const Section = ({ section }: SectionProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-slate-800 p-4 rounded-md">
      <div className="grid grid-cols-[auto_auto] justify-between items-center gap-4">
        <h2 className="font-bold text-2xl">{section.title}</h2>
        <Button onClick={() => setShow(!show)} type="button">
          {show ? 'hide' : 'show'}
        </Button>
      </div>

      {show && (
        <div className="border-t border-slate-400 pt-4 mt-4">
          {section.description && (
            <p className="mb-4 text-sm bg-slate-700 p-3 rounded">
              {section.description}
            </p>
          )}
          <div className="grid gap-4">
            {section.exercises.map((exercise, i) => (
              <Exercise exercise={exercise} key={`${exercise.name}-${i}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
