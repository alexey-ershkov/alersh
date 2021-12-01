import React from 'react';

interface Props {
  className?: string;
}

const Divider: React.FC<Props> = ({ className = '' }) => {
  return <div className={`w-px mx-6 h-5/6 bg-gray-400 ${className}`} />;
};

export default Divider;
