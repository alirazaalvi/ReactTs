import React from 'react';

interface CProps {
  id?: string;
  name: string;
  value?: string;
  style?: React.CSSProperties;
  type?: string;
  placeholder?: string;
  className?: string;
  onChange(e: React.ChangeEvent<any>): void;
  onBlur(e: React.FocusEvent<any>): void;
}

const Input = (props: CProps) => {
  const {
    name,
    placeholder,
    value,
    type = 'input',
    className = 'input',
    onChange,
    onBlur,
  } = props;

  return (<input
      {...props}
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />);
}

export default Input;

