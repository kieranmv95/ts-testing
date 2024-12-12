import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => (
  <input
    {...props}
    className={`block w-full px-2.5 py-2 bg-slate-700 border-zinc-700 placeholder-slate-400 text-white text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500`}
  />
);
