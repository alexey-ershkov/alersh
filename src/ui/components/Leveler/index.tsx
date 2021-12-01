import React from 'react';

import Text from '../Text';

interface Props {
  tailwindLevelWidth: string;
  name: string;
}

const LinearGrade: React.FC<Props> = ({ name, tailwindLevelWidth }) => {
  return (
    <div className="flex items-center justify-around font-bold font-sans h-7">
      <Text>{name}</Text>
      <div className="rounded relative h-2.5 w-60 bg-gray-500 ml-6">
        <div className={`absolute h-2.5 bg-red-600 rounded ${tailwindLevelWidth}`} />
      </div>
    </div>
  );
};

export default LinearGrade;
