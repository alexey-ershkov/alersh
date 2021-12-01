import React from 'react';

import Divider from '../../../../ui/components/Divider';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Languages from './components/Languages';
import Skills from './components/Skills';

const Details = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2">
        <Expertise />
        <Skills />
      </div>
      <Divider />
      <div className="w-1/2">
        <AboutMe />
        <Languages />
        <Education className="mt-2" />
      </div>
    </div>
  );
};

export default Details;
