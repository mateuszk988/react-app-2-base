import AButton from '@atoms/AButton/AButton';
import MSection from '@molecules/MSection/MSection';
import React from 'react';
import './MStatusFilter.scss';

type StatusValue = 'all' | 'active' | 'completed';
type StatusLabel = Capitalize<StatusValue>; // Capitalize stworzy unię: "All" | "Active" | "Completed"

interface StatusOption {
  value: StatusValue;
  label: StatusLabel;
}

interface MStatusFilterProps {
  statusOptions: StatusOption[];
  selectedStatus: StatusValue;
  onStatusChange: (status: StatusValue) => void;
}

const MStatusFilter: React.FC<MStatusFilterProps> = ({
  statusOptions,
  selectedStatus,
  onStatusChange,
}) => {
  const renderedFilterButtons = statusOptions.map((statusOption) => {
    const isSelected = statusOption.value === selectedStatus;

    return (
      <div key={statusOption.value} className="m-status-filter__item">
        <AButton
          className="m-status-filter__button"
          onClick={() => onStatusChange(statusOption.value)}
          isDisabled={isSelected}
        >
          {statusOption.label}
        </AButton>
      </div>
    );
  });

  return (
    <MSection title="Filter by Status">
      <div className="m-status-filter">{renderedFilterButtons}</div>
    </MSection>
  );
};

export default MStatusFilter;
