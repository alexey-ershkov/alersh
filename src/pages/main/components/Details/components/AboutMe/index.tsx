import classNames from 'classnames';
import { type FC } from 'react';

import { InfoContainer, NamedText, Text, Title } from '@/shared/ui';
import { aboutMeData, aboutMeText } from './data';

import styles from './styles.module.css';

const AboutMe: FC = () => {
  return (
    <InfoContainer>
      <Title>About Me</Title>
      {aboutMeData.map((data, idx) => (
        <NamedText key={idx} {...data} />
      ))}
      <Text className={classNames(styles.text)}>{aboutMeText}</Text>
    </InfoContainer>
  );
};

export default AboutMe;
