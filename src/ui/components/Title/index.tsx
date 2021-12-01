import React from 'react';

interface Props {
  className?: string;
}

const Title: React.FC<Props> = ({ children, className = '' }) => {
  return <div className={`font-sans text-5xl my-1 ${className}`}>{children}</div>;
};

export default Title;
