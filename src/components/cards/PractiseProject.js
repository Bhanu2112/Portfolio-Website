import React from 'react'
import data from '../Data/data.json'

export default function PractiseProject({project}) {
    console.log(data.practice_projects);
  return (
    <>
            <div className="w-full mb-5 bg-white border border-cardborder rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className=" text-gray-500 border-b border-gray-200 rounded-t-lg bg-cardtitlebg dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                    <div className="me-2">
                        <p className="inline-block p-4  text-black dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">{project?.project_title}</p>
                        <a href="/">git</a>
                    </div>
                </div>
                <div className='bg-cardbodybg p-1 hover:bg-blue-100'>
                <div className='ml-10 my-5'>
                    <ul className='list-disc'>
                        <li>
                            <span className=''>
                                <p>{project?.project_description}</p>
                            </span>
                            <span className=''>
                                <p>tools : java, spring boot, angular, microservice architucure, bootstapcss</p>
                            </span>
                        </li>
                    </ul>
                </div>

                </div>
               
            </div>
        </>
  )
}
