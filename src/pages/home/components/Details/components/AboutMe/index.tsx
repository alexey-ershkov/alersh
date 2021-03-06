import React from 'react';

import InfoContainer from '../../../../../../ui/components/InfoContainer';
import NamedText from '../../../../../../ui/components/NamedText';
import Text from '../../../../../../ui/components/Text';
import Title from '../../../../../../ui/components/Title';
import { aboutMeData, aboutMeText } from './data';

const AboutMe: React.FC = () => {
  return (
    <InfoContainer>
      <Title>About Me</Title>
      {aboutMeData.map((data, idx) => (
        <NamedText key={idx} {...data} />
      ))}
      <Text className="text-center md:text-left  w-5/6 mt-2 whitespace-pre-line">
        {aboutMeText}
      </Text>
    </InfoContainer>
  );
};

export default AboutMe;
