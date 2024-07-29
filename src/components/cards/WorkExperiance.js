import React from 'react'

export default function WorkExperiance() {
    return (
        <>
            <div className="w-full  bg-white border border-cardborder rounded-lg  shadow dark:bg-gray-800 dark:border-gray-700">
                <div className=" text-gray-500 border-b border-gray-200 rounded-t-lg bg-cardtitlebg dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                    <div className="me-2">
                        <p className="inline-block p-4  text-black dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">project engineer at wipro || sep 2022 - present</p>
                    </div>
                </div>
                <div className='bg-cardbodybg p-1 hover:bg-gray-100'>
                    <div className='ml-10 mb-8 mr-5 '>
                        <ul className='list-disc'>
                            <li><span className='block m-2'>
                                <p>ci-rewrite tibco project to spring boot for citi</p>
                            </span></li>
                        </ul>

                        <span className='block text-wrap'>
                            <ul className='list-disc ml-5'>
                                <li>
                                    <p className=''>involved in ci-rewrite project for citi, migrating tibco project to spring boot project worked in agile developement, focusing on user story creation, rest api developement, and ci/cd deployement.</p>
                                </li>
                            </ul>
                        </span>

                    </div>
                </div>

            </div>
        </>
    )
}
