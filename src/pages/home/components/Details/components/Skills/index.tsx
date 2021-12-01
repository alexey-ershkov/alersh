import React from 'react';

import InfoContainer from '../../../../../../ui/components/InfoContainer';
import LinearGrade from '../../../../../../ui/components/Leveler';
import Title from '../../../../../../ui/components/Title';
import { skillsData } from './data';

const Skills = () => {
  return (
    <InfoContainer alignRight>
      <Title>Skills</Title>
      {skillsData.map((data) => (
        <LinearGrade {...data} />
      ))}
    </InfoContainer>
  );
};

export default Skills;
