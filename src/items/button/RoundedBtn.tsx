import React from 'react';
import { Colors } from '../../models/enums/ColorsEnum';

interface RoundedBtnProps {
  value: string;
  btnColor?: string;
}

export default function RoundedBtn({ value }: RoundedBtnProps) {
  return (
    <p
      className={`rounded-full items-center text-white text-sm font-normal  justify-center px-5 py-2.5 bg-primary  cursor-pointer`}
    >
      {value}
    </p>
  );
}
