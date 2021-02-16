import React, { useEffect } from 'react';

import Card from '../components/Project/Card';
import { project } from '../content/data';
import PageTitile from '../components/PageTitile';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageTitile
        title={'Projects'}
        subtitle={'A SELECTION OF PROJECTS'}
      ></PageTitile>
      <div className='px-10 py-2 lg:px-12'>
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
