import React from 'react';

import { InfoContainer, Leveler as LinearGrade, Title } from '@/shared/ui';
import { skillsData } from './data';

const Skills = () => {
  return (
    <InfoContainer alignRight>
      <Title>Skills</Title>
      {skillsData.map((data, idx) => (
        <LinearGrade key={idx} {...data} />
      ))}
    </InfoContainer>
  );
};

export default Skills;
