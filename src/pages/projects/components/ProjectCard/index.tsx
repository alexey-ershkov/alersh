import { Repo } from 'alersh_models';
import React from 'react';

import Badge from '../../../../ui/components/Badge';

export const ProjectCard: React.FC<Repo> = ({ name, url, description, user, updatedAt }) => {
  return (
    <a
      target="_blank"
      href={url}
      className="rounded-lg group hover:bg-red-600 card hover:border-transparent hover:shadow-lg border border-gray-500 w-72 h-32 p-4"
      rel="noreferrer"
    >
      <div className="text-lg truncate font-medium text-black group-hover:text-white">{name}</div>
      <div className="text-md font-medium h-6 truncate text-gray-500 group-hover:text-red-200">
        {description}
      </div>

      <div className="flex items-center justify-start w-full mt-4">
        <Badge text={user.login} color="red" />
        <Badge
          text={new Date(updatedAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: '2-digit',
          })}
          color="red"
        />
      </div>
    </a>
  );
};

export default ProjectCard;
