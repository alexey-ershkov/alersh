import React, { useEffect } from 'react';

import MessageModal from '../../ui/components/MessageModal';
import Contacts from './components/Contacts';
import Details from './components/Details';
import MainInfo from './components/MainInfo';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen w-screen overflow-scroll overflow-x-hidden">
      <MessageModal />
      <div className="w-full h-screen text-center grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
        <MainInfo />
        <Contacts />
      </div>
      <Details />
    </div>
  );
};

export default HomePage;
