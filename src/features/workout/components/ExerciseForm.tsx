'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components';
import { CheckBox, CheckboxEnum } from './Checkbox';

type FormProps = {
  exerciseId: string;
  set: number;
};

type TimeFormProps = FormProps & {
  time?: number | null;
};

export const TimeForm = ({ exerciseId, set, time }: TimeFormProps) => {
  const [timeValue, setTimeValue] = useState<string>(
    time ? time.toString() : ''
  );
  const [rpeValue, setRpeValue] = useState<string>('');

  const [checkBoxValue, setCheckBoxValue] = useState<CheckboxEnum>(
    CheckboxEnum.unchecked
  );

  useEffect(() => {
    // TODO: update this in state
    console.log(`Update ${exerciseId} set:${set + 1}`);
    console.log(timeValue, rpeValue, checkBoxValue);
  }, [timeValue, rpeValue, checkBoxValue]);

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
      <CheckBox onChange={(e) => setCheckBoxValue(e)} />
    </div>
  );
};

type WeightAndRepsFormProps = FormProps & {
  weight?: number | null;
  repetitions?: number | null;
};

export const WeightAndRepsForm = ({
  exerciseId,
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

  const [checkBoxValue, setCheckBoxValue] = useState<CheckboxEnum>(
    CheckboxEnum.unchecked
  );

  useEffect(() => {
    // TODO: update this in state
    console.log(`Update ${exerciseId} set:${set + 1}`);
    console.log(repetitionsValue, weightValue, checkBoxValue);
  }, [repetitionsValue, weightValue, checkBoxValue]);

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
      <CheckBox onChange={(e) => setCheckBoxValue(e)} />
    </div>
  );
};

type RepsFormProps = FormProps & {
  repetitions?: number | null;
};

export const RepsForm = ({ exerciseId, set, repetitions }: RepsFormProps) => {
  const [repsValue, setRepsValue] = useState<string>(
    repetitions ? repetitions.toString() : ''
  );
  const [rpeValue, setRpeValue] = useState<string>('');
  const [checkBoxValue, setCheckBoxValue] = useState<CheckboxEnum>(
    CheckboxEnum.unchecked
  );

  useEffect(() => {
    // TODO: update this in state
    console.log(`Update ${exerciseId} set:${set + 1}`);
    console.log(repsValue, rpeValue, checkBoxValue);
  }, [repsValue, rpeValue]);

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
      <CheckBox onChange={(e) => setCheckBoxValue(e)} />
    </div>
  );
};
