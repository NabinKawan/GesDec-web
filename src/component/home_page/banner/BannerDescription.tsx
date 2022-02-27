import React from 'react';

// Homepage banner description

export default function BannerDescription() {
  return (
    <div className="flex flex-col space-y-3  items-center text-white font-sans">
      <p className="lg:text-2xl sm:text-xl font-medium ">Sign Gesture Detection</p>
      <p className="lg:text-lg sm:text-base text-center font-normal">Detects the gesture sign movement and classifies it</p>
    </div>
  );
}
