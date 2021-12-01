import React from 'react';

interface Props {
  alignRight?: boolean;
}

const InfoContainer: React.FC<Props> = ({ children, alignRight = false }) => {
  const alignClass = alignRight ? 'md:items-end' : 'md:items-start';

  return (
    <div className={`flex flex-col items-center mt-16 md:mt-0 justify-center ${alignClass}`}>
      {children}
    </div>
  );
};

export default InfoContainer;
