import React from 'react';

import InfoContainer from '../../../../../../ui/components/InfoContainer';
import Text from '../../../../../../ui/components/Text';
import Title from '../../../../../../ui/components/Title';

const Languages = () => {
  return (
    <InfoContainer>
      <Title>Languages</Title>
      <Text className="whitespace-pre-line text-center md:text-left">
        Russian (Native){'\n'} English (B2, FCE Approved)
      </Text>
    </InfoContainer>
  );
};

export default Languages;
