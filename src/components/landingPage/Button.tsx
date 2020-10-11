import React from 'react';

interface ButtonPropType {
  body: string;
  fgColor: string;
  bgColor: string;
  style?: object;
  icon?: string;
}

const Button: React.FC<ButtonPropType> = ({
  body, fgColor, bgColor, style,
}) => {
  const defStyle = {
    display: 'flex',
    flexFlow: 'row',
    color: fgColor,
    backgroundColor: bgColor,
    border: `1px solid ${fgColor}`,
    borderRadius: 4,
    padding: 10,
  };

  return (
    <button type="button" style={{ ...defStyle, ...style }}>
      <div>{body}</div>
    </button>
  );
};

export default Button;
