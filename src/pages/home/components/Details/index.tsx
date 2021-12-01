import React from 'react';

import Divider from '../../../../ui/components/Divider';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Languages from './components/Languages';
import Skills from './components/Skills';

const Details = () => {
  return (
    <div className="w-full h-auto md:h-screen flex justify-center items-center flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <Expertise />
        <Skills />
      </div>
      <Divider />
      <div className="w-full md:w-1/2">
        <AboutMe />
        <Languages />
        <Education />
      </div>
    </div>
  );
};

export default Details;
