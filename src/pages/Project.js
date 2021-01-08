import React from 'react';

import Card from '../components/Project/Card';
import { project } from '../content/data';
import PageTitile from '../components/PageTitile';

const Projects = () => {
  return (
    <div>
      <PageTitile
        title={'Project'}
        subtitle={'A SELECTION OF PROJECTS'}
      ></PageTitile>
      <div className='px-10 py-2 divide-y'>
        {project.map((i, key) => (
          <div key={key}>
            <Card project={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
