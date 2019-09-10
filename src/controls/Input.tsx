import React from 'react';

interface CProps {
  name: string;
  value?: string;
  style?: React.CSSProperties;
  type?: string;
  placholder?: string;
  className?: string;
}

const Input = (props: CProps) => {
  const {
    name,
    placholder,
    value,
    type = 'input',
    className = 'input',
  } = props;

  return (<input
      {...props}
      name={name}
      className={className}
      type={type}
      placeholder={placholder}
      value={value}
    />);
}

export default Input;

