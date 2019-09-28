import * as React from 'react';

interface CProps {
  label: string;
  style?: React.CSSProperties;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?(e: React.FormEvent<HTMLButtonElement>): void;
}

const Button = (props: CProps) => {
  const {
    onClick,
    style,
    label,
    type = 'button',
    disabled = false,
    className = 'button'} = props;
  return (<button
    onClick={onClick}
    className={className}
    style={style}
    type={type}
    disabled={disabled}
    {...props}
  >
    {label}
  </button>);
};

export default Button;