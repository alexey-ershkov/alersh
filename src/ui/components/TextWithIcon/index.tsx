import React, { memo } from 'react';

interface Props {
  icon: React.ReactNode;
  text: string;
}

const TextWithIcon: React.FC<Props> = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center my-1">
      <div className="text-red-600 w-10 h-10 mr-2 flex items-center justify-center">{icon}</div>
      <div className="text-2xl text-black font-medium">{text}</div>
    </div>
  );
};

export default memo(TextWithIcon);
