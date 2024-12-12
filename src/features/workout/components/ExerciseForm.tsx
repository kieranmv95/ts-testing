'use client';

import { useState } from 'react';
import { Input } from '@/components';
import { CheckBox } from './Checkbox';

type FormProps = {
  set: number;
};

type TimeFormProps = FormProps & {
  time?: number | null;
};

export const TimeForm = ({ set, time }: TimeFormProps) => {
  const [timeValue, setTimeValue] = useState<string>(
    time ? time.toString() : ''
  );
  const [rpeValue, setRpeValue] = useState<string>('');

  return (
    <div className="grid gap-2 grid-cols-[24px_1fr_52px_36px]">
      <div className="w-6 bg-slate-700 rounded-lg flex justify-center items-center">
        {set + 1}
      </div>
      <Input
        type={'number'}
        value={timeValue}
        onChange={(e) => setTimeValue(e.target.value)}
      />
      <Input
        type={'number'}
        placeholder="1-10"
        value={rpeValue}
        onChange={(e) => setRpeValue(e.target.value)}
      />
      <CheckBox />
    </div>
  );
};

type WeightAndRepsFormProps = FormProps & {
  weight?: number | null;
  repetitions?: number | null;
};

export const WeightAndRepsForm = ({
  set,
  weight,
  repetitions,
}: WeightAndRepsFormProps) => {
  const [weightValue, setWeightValue] = useState<string>(
    weight ? weight.toString() : ''
  );
  const [repetitionsValue, setRepetitionsValue] = useState<string>(
    repetitions ? repetitions.toString() : ''
  );
  const [rpeValue, setRpeValue] = useState<string>('');

  return (
    <div className="grid gap-2 grid-cols-[24px_1fr_68px_52px_36px]">
      <div className="w-6 bg-slate-700 rounded-lg flex justify-center items-center">
        {set + 1}
      </div>
      <Input
        type={'number'}
        value={weightValue}
        onChange={(e) => setWeightValue(e.target.value)}
      />
      <Input
        type={'number'}
        value={repetitionsValue}
        onChange={(e) => setRepetitionsValue(e.target.value)}
      />
      <Input
        type={'number'}
        placeholder="1-10"
        value={rpeValue}
        onChange={(e) => setRpeValue(e.target.value)}
      />
      <CheckBox />
    </div>
  );
};

type RepsFormProps = FormProps & {
  repetitions?: number | null;
};

export const RepsForm = ({ set, repetitions }: RepsFormProps) => {
  const [repsValue, setRepsValue] = useState<string>(
    repetitions ? repetitions.toString() : ''
  );
  const [rpeValue, setRpeValue] = useState<string>('');

  return (
    <div className="grid gap-2 grid-cols-[24px_1fr_52px_36px]">
      <div className="w-6 bg-slate-700 rounded-lg flex justify-center items-center">
        {set + 1}
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
      <CheckBox />
    </div>
  );
};
