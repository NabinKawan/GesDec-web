import React from 'react';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { ImSad2 } from 'react-icons/im';

interface PredictionCardProps {
  title: string;
  accuracy: number;
}

export default function PredictionCard({ title, accuracy }: PredictionCardProps) {
  return (
    <div className="flex w-full rounded-lg bg-gray-300 relative">
      <div
        style={{ width: `${accuracy}%` }}
        className={`flex  justify-between items-center px-4 py-2 h-12 text-lg text-white font-medium font-sans bg-green-300  rounded-lg `}
      ></div>
      <div className="absolute flex w-full justify-between items-center px-4 py-2 h-12 text-lg text-gray-700 font-medium font-sans">
        <div className="flex space-x-8 ">
          <p className="">{title}</p>
          <p className="font-semibold">{accuracy}%</p>
        </div>
        {accuracy > 80 ? (
          <BsFillEmojiSmileFill className="text-orange-600 text-xl" />
        ) : (
          <ImSad2 className="text-red-700 text-xl" />
        )}
      </div>
    </div>
  );
}
