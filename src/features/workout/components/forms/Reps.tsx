'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components';
import { CheckBox, CheckboxEnum } from '../Checkbox';
import { useWorkoutStateContext } from '../../hooks/useWorkoutContext';

type FormProps = {
  exerciseId: string;
  setIndex: number;
};

type RepsProps = FormProps & {
  repetitions?: number | null;
};

export const Reps = ({ exerciseId, setIndex, repetitions }: RepsProps) => {
  const [repsValue, setRepsValue] = useState<string>(
    repetitions ? repetitions.toString() : ''
  );
  const [rpeValue, setRpeValue] = useState<string>('');
  const [checkBoxValue, setCheckBoxValue] = useState<CheckboxEnum>(
    CheckboxEnum.unchecked
  );

  const { values, updateValue } = useWorkoutStateContext();

  useEffect(() => {
    updateValue(exerciseId, setIndex, {
      repsValue,
      rpeValue,
    });
  }, [repsValue, rpeValue]);

  return (
    <div className="grid gap-2 grid-cols-[24px_1fr_52px_36px]">
      <div className="w-6 bg-slate-700 rounded-lg flex justify-center items-center">
        {setIndex + 1}
      </div>
      <Input
        type={'number'}
        value={repsValue}
        onChange={(e) => setRepsValue(e.target.value)}
      />
      <Input
        type={'number'}
        placeholder="1-10"
        value={rpeValue}
        onChange={(e) => setRpeValue(e.target.value)}
      />
      <CheckBox onChange={(e) => setCheckBoxValue(e)} />
    </div>
  );
};
