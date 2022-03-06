import React from 'react';
import RoundedBtn from '../../items/button/RoundedBtn';
import { Colors } from '../../models/enums/ColorsEnum';

interface NavbarProps {
  from: string;
}

export default function Navbar({ from }: NavbarProps) {
  const scrollToBottom = () =>
    window.scrollTo({ top: 1.6 * window.screen.height, behavior: 'smooth' });
  return (
    <div className="bg-[#1A2238]  flex justify-between items-center lg:px-44 sm:px-8 w-full   content-center font-medium text-lg text-white shadow-sm z-20 ">
      <div className="flex justify-center  py-6">
        <p>Ges</p>
        <span className="text-[#FF6A3D]">Dec</span>
      </div>
      <div onClick={scrollToBottom}>
        <RoundedBtn value={'Go to Details'} />
      </div>
    </div>
  );
}
