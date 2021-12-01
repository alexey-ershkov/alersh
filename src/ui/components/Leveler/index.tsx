import React from 'react';

import Text from '../Text';

export interface LevelerProps {
  tailwindLevelWidth: string;
  name: string;
}

const LinearGrade: React.FC<LevelerProps> = ({ name, tailwindLevelWidth }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around font-bold font-sans h-auto md:h-7">
      <Text>{name}</Text>
      <div className="rounded relative h-2.5 w-60 bg-gray-500 ml-0 md:ml-6">
        <div className={`absolute h-2.5 bg-red-600 rounded ${tailwindLevelWidth}`} />
      </div>
    </div>
  );
};

export default LinearGrade;
