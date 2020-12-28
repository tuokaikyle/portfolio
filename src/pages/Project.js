import React from 'react';

import Card from '../components/Project/Card';
import { project } from '../content/data';
import PageTitile from '../components/PageTitile';

const Projects = () => {
  return (
    <div>
      <PageTitile
        title={'Projects'}
        subtitle={'A SELECTION OF PROJECTS'}
      ></PageTitile>
      <div className='px-10 py-12'>
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
