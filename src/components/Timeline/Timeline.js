import React from 'react'
import WorkExperiance from '../cards/WorkExperiance'
import ProfileBlob from '../ProfileBlob'
import Certification from '../cards/Certification'
import PractiseProject from '../cards/PractiseProject'
import Education from '../cards/Education'
import  data from '../Data/data.json'

export default function Timeline() {

    const projects = data.practice_projects
    

    return (
        <div className=' px-6 sm:pl-8 lg:pl-16 xl:pl-64 xl:pr-64 p-6' id='timelineId'>
            {/* <div className='h-28 w-32 hidden sm:block'> */}
            <div className='h-28 w-32 hidden '>
                <ProfileBlob />
            </div>
            <div className='md:ml-56 md:mr-32 ' id='timeline_id'>
                <div>
                    <span className='block mb-2'><p> work </p></span>
                    <div className='mt-4 md:ml-10'>
                        <WorkExperiance />
                    </div>
                </div>
            </div>
            <div className='md:ml-56 md:mr-32 mt-3'>
                <div>
                    <span className='block mb-2'><p> certifications </p></span>
                    <div className='mt-4 md:ml-10'>
                        <Certification/>
                    </div>
                </div>
            </div>
            <div className='md:ml-56 md:mr-32 mt-3' id='projects_id'>
                <div>
                    <span className='block mb-2'><p> projects </p></span>
                    <div className='mt-4 md:ml-10'>
                        {
                            projects.map(project => (
                                <PractiseProject key={project.project_title} project={project} />
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className='md:ml-56 md:mr-32 mt-3' id='education_id'>
                <div>
                    <span className='block mb-2'><p> education </p></span>
                    <div className='mt-4 md:ml-10'>
                        <Education/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
