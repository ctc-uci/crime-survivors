import React from 'react';

interface DotPropType {
  isSelected: boolean;
  onClick: () => void;
}

const Dot: React.FC<DotPropType> = ({ isSelected, onClick }) => {
  const bgColor = isSelected ? '#2C3E54' : '#316E83';
  return (
    <button
      type="button"
      style={{
        border: `solid ${bgColor}`,
        borderRadius: 50,
        backgroundColor: isSelected ? bgColor : '',
        padding: 5,
        borderWidth: 1,
        margin: 10,
      }}
      onClick={onClick}
    />
  );
};

export default Dot;
