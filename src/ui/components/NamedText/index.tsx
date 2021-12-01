import React from 'react';

interface Props {
  name: string;
  text: string;
}

const NamedText: React.FC<Props> = ({ name, text }) => {
  return (
    <div className={'flex items-center justify-center text-lg'}>
      <div className={'font-sans font-semibold text-red-600 mr-2'}>{name}</div>
      <div>{text}</div>
    </div>
  );
};

export default NamedText;
