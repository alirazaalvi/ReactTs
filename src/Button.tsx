import * as React from 'react';

interface CProps {
  label: string;
  style?: React.CSSProperties;
  className?: string;
  onClick(): void;
}

const Button = (props: CProps) => {
  const {
    onClick,
    style,
    label,
    className = 'button'} = props;
  return (<button
    onClick={onClick}
    className={className}
    style={style}
  >
    {label}
  </button>);
};

export default Button;