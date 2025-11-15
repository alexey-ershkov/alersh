import React from 'react';

import { Divider } from '@/shared/ui';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Languages from './components/Languages';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

import styles from './styles.module.css';

const Details = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <Expertise />
        <Skills />
        <WorkExperience />
      </div>
      <Divider />
      <div className={styles.rightColumn}>
        <AboutMe />
        <Languages />
        <Education />
      </div>
    </div>
  );
};

export default Details;
