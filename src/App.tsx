import MColorFilter from '@molecules/MColorFilter/MColorFilter';
import { AVAILABLE_COLORS } from '@utils/general';
import { useState } from 'react';

function App() {
  const [selectedColors, setSelectedColors] = useState(['orange']);

  const handleColorChange = (color: string, actionType: 'added' | 'removed') => {
    const selectedColorsAfterChange =
      actionType === 'removed'
        ? selectedColors.filter((selectedColor) => selectedColor !== color)
        : [...selectedColors, color];

    setSelectedColors(selectedColorsAfterChange);
  };

  return (
    <MColorFilter
      availableColors={AVAILABLE_COLORS}
      selectedColors={selectedColors}
      onColorChange={handleColorChange}
    />
  );
}

export default App;
