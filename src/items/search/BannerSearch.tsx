import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function BannerSearch() {
  return (
    <div className="flex bg-white space-x-2 rounded-md w-[70vh] h-10 px-4 py-6 items-center shadow-lg">
      <input placeholder="Search applications" className="w-full py-2  focus:outline-none" />

    </div>
  );
}
