import { type FC } from 'react';

import { Divider, InfoContainer, Text, TextWithBoldNaming, Title } from '@/shared/ui';
import { educationData } from './data';

import styles from './styles.module.css';

const Education: FC = () => {
  return (
    <InfoContainer>
      <Title>Education</Title>
      <div className={styles.container}>
        <div className={styles.yearsColumn}>
          {educationData.map(({ yearFrom, yearTo }, idx) => (
            <Text key={idx} className={styles.yearText}>
              {yearFrom} - {yearTo}
            </Text>
          ))}
        </div>
        <Divider />
        <div className={styles.educationColumn}>
          {educationData.map(({ educationName, educationProgram }, idx) => (
            <TextWithBoldNaming key={idx} boldText={educationName} text={educationProgram} />
          ))}
        </div>
      </div>
    </InfoContainer>
  );
};

export default Education;
