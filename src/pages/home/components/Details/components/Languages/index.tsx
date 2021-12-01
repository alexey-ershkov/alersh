import React from 'react';
import Title from '../../../../../../ui/components/Title';
import Text from '../../../../../../ui/components/Text';

const Languages = () => {
  return (
    <div className={'flex flex-col text-right items-end justify-center'}>
      <Title>Languages</Title>
      <Text className={'whitespace-pre-line'}>
        Russian (Native){'\n'} English (B2, FCE Approved)
      </Text>
    </div>
  );
};

export default Languages;
