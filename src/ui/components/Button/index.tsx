import React from 'react';

interface Props {
  className?: string;
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ className = '', text, onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      className={`cursor-pointer shadow-2xl p-3 rounded-2xl flex items-center justify-center font-semibold bg-red-500 text-white duration-300 text-lg ${className} transition transform hover:scale-105 hover:bg-red-600`}
    >
      {text}
    </div>
  );
};

export default Button;
