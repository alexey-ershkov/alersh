import React from 'react';

import Divider from '../../../../../../ui/components/Divider';
import Text from '../../../../../../ui/components/Text';
import TextWithBoldNaming from '../../../../../../ui/components/TextWithBoldNaming';
import Title from '../../../../../../ui/components/Title';

interface Props {
  className?: string;
}

const Education: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-end justify-center ${className}`}>
      <Title>Education</Title>
      <div className="flex items-center justify-center h-60">
        <div>
          <TextWithBoldNaming
            boldText="Bauman Moscow State Technical University"
            text="Robotics and Complex Automation (CAD developer)"
          />
          <TextWithBoldNaming
            boldText="Mail.ru Group Programming Course"
            text="System Architecture"
          />
        </div>
        <Divider />
        <div className="flex flex-col h-4/5 w-32 items-center justify-around">
          <Text className="text-red-600 font-bold">2018 - Current</Text>
          <Text className="text-red-600 font-bold">2019 - 2021</Text>
        </div>
      </div>
    </div>
  );
};

export default Education;
