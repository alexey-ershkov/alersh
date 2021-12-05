import React from 'react';

type BadgeColor = 'red';

interface Props {
  text: string;
  url?: string;
  className?: string;
  color: BadgeColor;
}

const BadgeWrapper: React.FC<Partial<Props>> = ({ url, children, className }) => {
  if (url) {
    return (
      <a href={url} className={`${className} hover:underline`} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return <div className={className}>{children}</div>;
};

const getColorClasses = (color: BadgeColor) => {
  if (color === 'red') {
    return 'bg-red-100 text-red-500 group-hover:bg-white';
  }

  return 'bg-white text-black';
};

const Badge: React.FC<Props> = ({ text, url, className, color }) => {
  return (
    <BadgeWrapper
      url={url}
      className={`${className} ${getColorClasses(
        color,
      )} mr-1 rounded-2xl font-semibold h-6 w-auto py-0.5 px-1 flex justify-between items-center`}
    >
      <div className="mx-1 text-sm truncate">{text}</div>
    </BadgeWrapper>
  );
};

export default Badge;
