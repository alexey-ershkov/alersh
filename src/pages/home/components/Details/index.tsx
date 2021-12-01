import React from 'react';
import AboutMe from './components/AboutMe';
import Languages from './components/Languages';
import Education from './components/Education';
import Divider from '../../../../ui/components/Divider';

const Details = () => {
  return (
    <div className={'w-full h-screen flex justify-center items-center'}>
      <div className="w-1/2">
        <Languages />
        <Education  className={'mt-36'}/>
      </div>
      <Divider />
      <div className="w-1/2">
        <AboutMe />
      </div>
    </div>
  );
};

export default Details;
