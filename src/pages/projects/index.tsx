import { Repo } from 'alersh_models';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

import Link from '../../ui/components/Link';
import Title from '../../ui/components/Title';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    axios.get<Repo[]>(process.env.API_URL).then((resp) => {
      setRepos(resp.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader type="Circles" color="rgb(220, 38, 38)" height={150} width={150} />
      </div>
    );
  }

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <Link
        to="/"
        text="< Назад"
        className="order-last block w-5/6 m-4 md:w-auto md:absolute h-10 top-4 left-6"
      />
      <Title>Github Projects</Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {repos.map((repo, idx) => (
          <ProjectCard key={idx} {...repo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
