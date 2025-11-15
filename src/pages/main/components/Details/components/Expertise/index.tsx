import React from 'react';

import { InfoContainer, Leveler as LinearGrade, Title } from '@/shared/ui';
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
