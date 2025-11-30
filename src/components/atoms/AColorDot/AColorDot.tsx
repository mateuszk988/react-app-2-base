import React from 'react';
import './AColorDot.scss';
import classNames from 'classnames';

type AColorDotSize = 'small' | 'medium' | 'large';

interface AColorDotProps {
  color: string;
  size?: AColorDotSize;
  className?: string;
}

const AColorDot: React.FC<AColorDotProps> = ({ color, size = 'medium', className }) => {
  const colorDotClasses = classNames('a-color-dot', `a-color-dot--${size}`, className);

  return <div className={colorDotClasses} style={{ backgroundColor: color }} />;
};

export default AColorDot;
