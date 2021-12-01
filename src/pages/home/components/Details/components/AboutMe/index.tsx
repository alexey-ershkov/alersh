import React from 'react';

import NamedText from '../../../../../../ui/components/NamedText';
import Text from '../../../../../../ui/components/Text';
import Title from '../../../../../../ui/components/Title';

interface Props {
  className?: string;
}

const AboutMe: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`${className} flex flex-col items-start justify-center`}>
      <Title>About Me</Title>
      <NamedText name="Date of birth:" text="August 22, 2000" />
      <NamedText name="Age:" text="21" />
      <NamedText name="Gender:" text="Male" />
      <Text className="text-left w-5/6 mt-2 whitespace-pre-line">
        A BMSTU Student studying on the 4th course for a CAD Developer and «Technopark» course
        graduatee in system architecture and web development. {'\n'} I have worked with a lot of
        technologies and participated in many different projects with team and by myself. I also
        have a freelance experience. Now I’m working at VK (prev. Mail Ru Group) company as a
        frontend developer in Relap recommendation system.
      </Text>
    </div>
  );
};

export default AboutMe;
