import ACheckbox from '@atoms/ACheckbox/ACheckbox';
import AColorDot from '@atoms/AColorDot/AColorDot';
import AText from '@atoms/AText/AText';
import MSection from '@molecules/MSection/MSection';
import { capitalize } from '@utils/general';
import React from 'react';
import './MColorFilter.scss';

type ColorChangeActionType = 'added' | 'removed';

interface MColorFilterProps {
  availableColors: string[]; // ['orange', 'pink', 'yellow']
  selectedColors: string[]; // ['pink']
  onColorChange: (color: string, action: ColorChangeActionType) => void; // onColorChange('orange', 'added')
}

const MColorFilter: React.FC<MColorFilterProps> = ({
  availableColors,
  selectedColors,
  onColorChange,
}) => {
  const handleColorChange = (color: string, isChecked: boolean) => {
    const actionType: ColorChangeActionType = isChecked ? 'removed' : 'added';
    onColorChange(color, actionType);
  };

  // 'orange' --> <div> ... </div>
  const renderedColors = availableColors.map((color) => {
    const isChecked = selectedColors.includes(color); // includes sprawdza, czy dana wartość istnieje w tablicy

    return (
      <div key={color} className="m-color-filter__item">
        <ACheckbox isChecked={isChecked} onChange={() => handleColorChange(color, isChecked)} />
        <AColorDot className="color-filter__dot" color={color} size="small" />
        <AText text={capitalize(color)} />
      </div>
    );
  });

  return (
    <MSection title="Filter by Color">
      <div className="m-color-filter">{renderedColors}</div>
    </MSection>
  );
};

export default MColorFilter;
