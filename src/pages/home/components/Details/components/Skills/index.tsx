import React from 'react';

import LinearGrade from '../../../../../../ui/components/Leveler';
import Title from '../../../../../../ui/components/Title';

const Skills = () => {
  return (
    <div className="flex flex-col items-end justify-center">
      <Title>Skills</Title>
      <LinearGrade name="JavaScript/CSS/HTML" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="React/Typescript" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="Node.js" tailwindLevelWidth="w-8/12" />
      <LinearGrade name="MongoDB" tailwindLevelWidth="w-5/12" />
      <LinearGrade name="Git" tailwindLevelWidth="w-11/12" />
      <LinearGrade name="SQL/MySQL/Postgres" tailwindLevelWidth="w-8/12" />
      <LinearGrade name="Python" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="Django/Flask" tailwindLevelWidth="w-8/12" />
      <LinearGrade name="Go" tailwindLevelWidth="w-5/12" />
      <LinearGrade name="C/C++" tailwindLevelWidth="w-7/12" />
    </div>
  );
};

export default Skills;
