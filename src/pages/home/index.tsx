import React from 'react';

import Contacts from './components/Contacts';
import MainInfo from './components/MainInfo';
import Details from './components/Details';

const HomePage = () => {
  return (
    <>
      <div className="w-full h-screen text-center grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
        <MainInfo />
        <Contacts />
      </div>
      <div>
        <Details />
      </div>
    </>
  );
};

export default HomePage;
