import React from 'react';

import Divider from '../../../../ui/components/Divider';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Languages from './components/Languages';

const Details = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/2">
        <Languages />
        <Education className="mt-20" />
      </div>
      <Divider />
      <div className="w-1/2">
        <AboutMe />
      </div>
    </div>
  );
};

export default Details;
