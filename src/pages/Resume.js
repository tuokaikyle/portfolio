import React, { useEffect } from 'react';
import { resume } from '../content/data';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import PageTitile from '../components/PageTitile';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const chapters = ['EDUCATION', 'EXPERIENCE', 'SKILLS', 'COURSES'];

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <button className='mt-12'>
          <a href='cv.pdf' target='_blank' rel='noopener noreferrer'>
            <div className='px-5 py-2 mx-2 my-1 border flex rounded-md text-lg hover:bg-gray-100'>
              <div>Downdload PDF</div>
              <FontAwesomeIcon
                icon={faDownload}
                className='text-gray-400 my-auto ml-3'
              />
            </div>
          </a>
        </button>
      </div>
    </div>
  );
};
export default Resume;
