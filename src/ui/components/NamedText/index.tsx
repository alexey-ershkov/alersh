import React from 'react';

export interface NamedTextProps {
  name: string;
  text: string;
}

const NamedText: React.FC<NamedTextProps> = ({ name, text }) => {
  return (
    <div className="flex items-center justify-center text-lg">
      <div className="font-sans font-semibold text-red-500 mr-2">{name}</div>
      <div>{text}</div>
    </div>
  );
};

export default NamedText;
