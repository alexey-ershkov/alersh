import React from 'react';

import InfoContainer from '../../../../../../ui/components/InfoContainer';
import LinearGrade from '../../../../../../ui/components/Leveler';
import Title from '../../../../../../ui/components/Title';
import { expertiseData } from './data';

const Expertise = () => {
  return (
    <InfoContainer alignRight>
      <Title>Expertise</Title>
      {expertiseData.map((data, idx) => (
        <LinearGrade key={idx} {...data} />
      ))}
    </InfoContainer>
  );
};

export default Expertise;
