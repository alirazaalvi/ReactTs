import * as React from 'react';

interface CProps {
  cLabel: string;
  cStyle?: React.CSSProperties;
  cClassName?: string;
  onClick(): void;
}

const Button = (props: CProps) => {
  const {
    onClick,
    cStyle,
    cLabel,
    cClassName = 'button'} = props;
  return (<button
    onClick={onClick}
    className={cClassName}
    style={cStyle}
  >
    {cLabel}
  </button>);
};

export default Button;