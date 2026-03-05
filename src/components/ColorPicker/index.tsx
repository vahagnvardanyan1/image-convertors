import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import 'react-colorful/dist/index.css';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState('#ffffff');

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-semibold mb-2">Select Background Color</h2>
      <HexColorPicker color={color} onChange={setColor} aria-label="Color Picker" />
      <div
        className="mt-4 w-full h-32 rounded-lg"
        style={{ backgroundColor: color }}
        aria-label="Selected Color Preview"
      />
    </div>
  );
};

export default ColorPicker;
