import React from 'react';
import './MList.scss';

interface MListProps {
  items: React.ReactNode[];
}

const MList: React.FC<MListProps> = ({ items }) => <ul className="m-list">{items}</ul>;

export default MList;
