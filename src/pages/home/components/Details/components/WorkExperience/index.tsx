import React from 'react';

import Divider from '../../../../../../ui/components/Divider';
import InfoContainer from '../../../../../../ui/components/InfoContainer';
import Text from '../../../../../../ui/components/Text';
import TextWithBoldNaming from '../../../../../../ui/components/TextWithBoldNaming';
import Title from '../../../../../../ui/components/Title';
import { workingExperienceData } from './data';

const WorkingExperience: React.FC = () => {
  return (
    <InfoContainer alignRight>
      <Title>Working experience</Title>
      <div className="flex items-end justify-center h-80 md:h-56">
        <div className="flex flex-col h-4/5 w-36 items-center justify-around">
          {workingExperienceData.map(({ from, to }, idx) => (
            <Text key={idx} className="text-red-500 font-bold text-right">
              {from} - {to}
            </Text>
          ))}
        </div>
        <Divider />
        <div className="w-40 md:w-52 flex flex-col justify-center">
          {workingExperienceData.map(({ organisation, role }, idx) => (
            <TextWithBoldNaming key={idx} boldText={organisation} text={role} />
          ))}
        </div>
      </div>
    </InfoContainer>
  );
};

export default WorkingExperience;
