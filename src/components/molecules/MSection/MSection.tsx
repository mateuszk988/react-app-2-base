import React from 'react';
import { ReactNode } from 'react';
import './MSection.scss';
import AText from '@atoms/AText/AText';

interface MSectionProps {
  title: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

const MSection: React.FC<MSectionProps> = ({ title, children, style = {} }) => (
  <div className="m-section" style={style}>
    <AText tag="h5" text={title} className="m-section__title m-section__title--highlighted" />
    {children}
  </div>
);

export default MSection;

/*
BEM - Block / Element / Modifier

Wzór: block__element--modifier

Np. m-section <-- blok
m-section__title <-- element (należy do danego bloku)

m-section--highlighted <-- modyfikator (modyfikator bloku m-section)

m-section__title--highlighted <-- modyfikator (modyfikator elementu m-section__title)

ANTI-PATTERNS IN PRACTISE:
1. blok z dwoma elementami -> m-section__title__content <-- elementy title i content <- ŹLE!
2. element z dwoma modyfikatorami --> m-section--highlighted--disabled <-- m-section--highlighted m-section--disabled
3. dajemy przy danym znaczniku tylko klasę z modyfikatorem (bez klasy bloku lub elementu)

*/
