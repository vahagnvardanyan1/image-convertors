import { useState } from 'react';
import { redirectToFreeConvert } from '@/utils/redirect';

export default function ColorsPage() {
  const [bgColor, setBgColor] = useState('bg-white');

  const toggleBackgroundColor = () => {
    setBgColor(prevColor => (prevColor === 'bg-white' ? 'bg-gray-200' : 'bg-white'));
  };

  return (
    <div className={`${bgColor} min-h-screen flex items-center justify-center`}>
      <button
        onClick={toggleBackgroundColor}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Background Color
      </button>
    </div>
  );
}
