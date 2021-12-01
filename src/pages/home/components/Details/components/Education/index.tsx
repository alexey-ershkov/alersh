import React from 'react';

import Divider from '../../../../../../ui/components/Divider';
import InfoContainer from '../../../../../../ui/components/InfoContainer';
import Text from '../../../../../../ui/components/Text';
import TextWithBoldNaming from '../../../../../../ui/components/TextWithBoldNaming';
import Title from '../../../../../../ui/components/Title';
import { educationData } from './data';

const Education: React.FC = () => {
  return (
    <InfoContainer>
      <Title>Education</Title>
      <div className="flex items-start justify-center h-80 md:h-56">
        <div className="flex flex-col h-4/5 w-32 items-center justify-around">
          {educationData.map(({ yearFrom, yearTo }) => (
            <Text className="text-red-600 font-bold">
              {yearFrom} - {yearTo}
            </Text>
          ))}
        </div>
        <Divider />
        <div className="w-40 md:w-64 flex flex-col justify-center">
          {educationData.map(({ educationName, educationProgram }) => (
            <TextWithBoldNaming boldText={educationName} text={educationProgram} />
          ))}
        </div>
      </div>
    </InfoContainer>
  );
};

export default Education;
