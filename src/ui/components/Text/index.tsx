import React from 'react';

interface Props {
  className?: string;
}

const Text: React.FC<Props> = ({ children, className = '' }) => {
  return <div className={`font-sans my-2 text-base ${className}`}>{children}</div>;
};

export default Text;
