import portrait from 'assets/portrait.jpeg';
import vk_logo from 'assets/VK_logo.png';
import React from 'react';

import Title from '../../../../ui/components/Title';

const MainInfo = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={portrait}
        className="rounded-full border-red-600 border-4 w-64 h-64"
        alt="portrait"
      />
      <Title>Alexey Ershkov</Title>
      <div className="text-gray-500 font-sans text-2xl flex items-center">
        Frontend Web Developer at
        <a
          href="https://vk.company/ru/"
          className="ml-2 h-6 w-6 inline-block"
          target="_blank"
          rel="noreferrer"
        >
          <img src={vk_logo} alt="vk_logo" />
        </a>
      </div>
    </div>
  );
};

export default MainInfo;
