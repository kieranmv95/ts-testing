'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

export enum CheckboxEnum {
  unchecked,
  success,
  fail,
}

export const CheckBox = () => {
  const [checkBoxStatus, setCheckBoxStatus] = useState<CheckboxEnum>(
    CheckboxEnum.unchecked
  );

  const getColor = () => {
    switch (checkBoxStatus) {
      case CheckboxEnum.fail:
        return 'bg-red-400';
      case CheckboxEnum.success:
        return 'bg-green-400';
      default:
        return 'bg-slate-700';
    }
  };

  const getNextStatus = () => {
    switch (checkBoxStatus) {
      case CheckboxEnum.unchecked:
        return CheckboxEnum.success;
      case CheckboxEnum.success:
        return CheckboxEnum.fail;
      case CheckboxEnum.fail:
        return CheckboxEnum.unchecked;
      default:
        return CheckboxEnum.unchecked;
    }
  };

  return (
    <div
      className={`grid items-center text-center justify-center w-full h-full  rounded-lg cursor-pointer ${getColor()}`}
      tabIndex="0"
      onClick={() => setCheckBoxStatus(getNextStatus())}
      onKeyPress={(e) => {
        e.preventDefault();
        console.log(e.key);
        if (e.key === ' ' || e.key === 'Enter') {
          setCheckBoxStatus(getNextStatus());
        }
      }}
    >
      {checkBoxStatus === CheckboxEnum.fail && (
        <div className="font-extrabold text-slate-800 text-md">
          <FontAwesomeIcon icon={faX} className="text-md" />
        </div>
      )}
      {checkBoxStatus === CheckboxEnum.success && (
        <div className="font-extrabold text-slate-800 text-md">
          <FontAwesomeIcon icon={faCheck} className="text-md" />
        </div>
      )}
    </div>
  );
};