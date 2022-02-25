import React from 'react';
import { Colors } from '../../models/enums/ColorsEnum';

interface CornerRoundedBtnProps {
  value: string;
  btnColor?: string;
}

export default function CornerRoundedBtn({
  value,
  btnColor = 'bg-[#9DAAF2]',
}: CornerRoundedBtnProps) {
  return (
    <p
      className={`flex rounded-lg items-center text-white text-sm font-medium  justify-center px-4 py-2  ${btnColor} hover:bg-primary cursor-pointer`}
    >
      {value}
    </p>
  );
}
