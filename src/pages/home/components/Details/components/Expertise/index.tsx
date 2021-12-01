import React from 'react';

import LinearGrade from '../../../../../../ui/components/Leveler';
import Title from '../../../../../../ui/components/Title';

const Expertise = () => {
  return (
    <div className="flex flex-col items-end justify-center">
      <Title>Expertise</Title>
      <LinearGrade name="System Architecture" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="Web Development" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="Databases" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="Web Security" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="Quality Assurance" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="Networks" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="REST API" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="Mentoring & Teaching" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="UX/UI" tailwindLevelWidth="w-10/12" />
      <LinearGrade name="Data structures and algorithms" tailwindLevelWidth="w-10/12" />
    </div>
  );
};

export default Expertise;
