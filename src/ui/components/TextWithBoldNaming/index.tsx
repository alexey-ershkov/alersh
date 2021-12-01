import React from 'react';

import Text from '../Text';

interface Props {
  boldText: string;
  text: string;
}

const TextWithBoldNaming: React.FC<Props> = ({ boldText, text }) => {
  return (
    <div className="flex flex-col items-end justify-between">
      <Text className="w-full">
        <div className="font-bold">{boldText}</div>
        {text}
      </Text>
    </div>
  );
};

export default TextWithBoldNaming;
