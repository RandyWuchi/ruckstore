import { useState } from 'react';

import { sectionsData } from '../../data/directory';
import MenuItem from '../menuItem/MenuItem';

import './directory.scss';

const Directory = () => {
  const [sections] = useState(sectionsData);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
