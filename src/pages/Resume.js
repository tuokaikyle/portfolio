import React, { useRef } from 'react';
import { resume } from '../content/data';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import PageTitile from '../components/PageTitile';

const chapters = ['EDUCATION', 'EXPERIENCE', 'SKILLS', 'COURSES'];

const Resume = () => {
  return (
    <div>
      <PageTitile
        title='Resume'
        subtitle='More details are available upon request'
      />
      <div className='px-10 py-12'>
        <div>
          <div className='text-lg pt-4 pb-3 font-bold text-center'>
            {chapters[0]}
          </div>
          <Education degrees={resume.degrees} />
        </div>
        <div>
          <div className='text-lg pt-4 pb-3 font-bold text-center'>
            {chapters[1]}
          </div>
          <Experience experiences={resume.experiences} />
        </div>
        <div>
          <div className='text-lg pt-4 pb-3 font-bold text-center'>
            {chapters[2]}
          </div>
          <Skills skills={resume.skills} />
        </div>
        <div>
          <div className='text-lg pt-4 pb-3 font-bold text-center'>
            {chapters[3]}
          </div>
          <Courses courses={resume.courses} />
        </div>
      </div>
    </div>
  );
};
export default Resume;
