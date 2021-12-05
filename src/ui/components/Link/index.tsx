import React from 'react';
import { Link as RouterLink, To } from 'react-router-dom';

interface Props {
  className?: string;
  text: string;
  to: To;
}

const Link: React.FC<Props> = ({ className = '', text, to }) => {
  return (
    <RouterLink
      to={to}
      className={`shadow-2xl p-3 rounded-2xl flex items-center justify-center font-semibold bg-red-500 text-white duration-300 text-lg ${className} transition transform hover:scale-105 hover:bg-red-600`}
    >
      {text}
    </RouterLink>
  );
};

export default Link;
