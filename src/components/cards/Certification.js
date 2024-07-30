import React from 'react'

export default function Certification() {
    return (
        <>
            <div className="w-full bg-white border border-cardborder rounded-[30px] shadow dark:bg-gray-800 dark:border-gray-700">
                <div className=" text-gray-500 border-b border-gray-200 rounded-t-[30px] bg-cardtitlebg dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">

                    <div className="me-2 flex justify-between">
                        <p className="inline-block p-4  text-black dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">java full stack certification by stackroute</p>
                        <a href="/" className='p-4 text-black'>verify</a>
                    </div>
                </div>
                <div className='bg-cardbodybg p-1 rounded-b-[30px] hover:bg-gray-100'>
                    <div className='ml-10 my-5'>
                        <ul className='list-disc'>
                            <li>
                                <span className=''>
                                    <p>Skills : Java, JavaScript,TypeScript, HTML, CSS, Spring Boot, Hibernate,
                                        Angular, MySQL, MongoDB, Git, Micro service Architecture</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
