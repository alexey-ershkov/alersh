import { type FC } from 'react';

import { Divider, InfoContainer, Text, TextWithBoldNaming, Title } from '@/shared/ui';
import { workingExperienceData } from './data';

import styles from './styles.module.css';

const WorkingExperience: FC = () => {
  return (
    <InfoContainer alignRight>
      <Title>Working experience</Title>
      <div className={styles.container}>
        <div className={styles.yearsColumn}>
          {workingExperienceData.map(({ from, to }, idx) => (
            <Text key={idx} className={styles.yearText}>
              {from} - {to}
            </Text>
          ))}
        </div>
        <Divider />
        <div className={styles.experienceColumn}>
          {workingExperienceData.map(({ organisation, role }, idx) => (
            <TextWithBoldNaming key={idx} boldText={organisation} text={role} />
          ))}
        </div>
      </div>
    </InfoContainer>
  );
};

export default WorkingExperience;
