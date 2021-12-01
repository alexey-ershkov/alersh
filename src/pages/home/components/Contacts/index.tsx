import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AtSymbolIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import React from 'react';

import TextWithIcon from '../../../../ui/components/TextWithIcon';
import Title from '../../../../ui/components/Title';

const Contacts = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Title>Contacts & Social</Title>
      <div className="flex flex-col items-start justify-center mt-2">
        <TextWithIcon icon={<LocationMarkerIcon />} text="Moscow, Russia" />
        <TextWithIcon icon={<AtSymbolIcon />} text="alersh@internet.ru" />
        <TextWithIcon icon={<AtSymbolIcon />} text="a.ershkov@vk.team" />
        <TextWithIcon
          icon={<FontAwesomeIcon size="2x" icon={faTelegram} />}
          text="@alexey_ershkov"
        />
      </div>
    </div>
  );
};

export default Contacts;
