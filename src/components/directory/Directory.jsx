import { useState } from 'react';

import SECTIONS_DATA from '../../data/directory';
import MenuItem from '../menuItem/MenuItem';

import './directory.scss';

const Directory = () => {
  const [sections] = useState(SECTIONS_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
