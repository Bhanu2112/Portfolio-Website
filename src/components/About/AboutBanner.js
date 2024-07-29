import React from 'react'
import Profile from './profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function AboutBanner() {
    return (
        <>
            <div className='bg-bannerbg p-6 flex flex-col md:flex-row'>
                <div className='w-full basis-3/4 order-2 md:order-1 my-auto '>
                    <div className='px-4 sm:pl-8 lg:pl-16 xl:pl-52 m-6' id='about_id'>
                        <span className='block mb-4'>
                            <p>hey, i'm bhanu...</p>
                        </span>
                        <span className='block mb-4'>
                            <p>a java full stack developer ...</p>
                        </span>
                        <span className='block'>
                            <p>this portfolio website highlights my work and skills in web development, java full stack and my professional experience....</p>
                        </span>
                    </div>
                    <div className='px-4 sm:pl-8 lg:pl-16 xl:pl-52 m-6'>
                        <div className='flex'>
                            <span className='block mb-4'>
                                <p>contact</p>
                            </span>
                            <span className='block mb-4 ml-6'>
                                <p>resume </p>
                            </span>
                        </div>
                        <div className='flex ml-2'>
                            <span className='block mb-4'>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                            <span className='block mb-4 ml-3'>
                            <FontAwesomeIcon icon={faGithub} />
                            </span>
                        </div>
                    </div>

                </div>

                <div className='w-full basis-2/3 order-1 md:order-2 flex items-center justify-center md:pr-8 lg:pr-72'>
                    <div className='flex items-center justify-center'>
                        <svg width="258" height="232" viewBox="0 0 258 232" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M240.724 141.74C213.291 181.059 176.605 208.702 130.665 224.67C84.725 240.637 48.7574 227.271 22.7621 184.571C-3.23318 141.871 -6.60969 99.6528 12.6326 57.9164C31.8748 16.1801 62.013 -2.64437 103.047 1.44297C144.081 5.53031 184.144 20.1052 223.236 45.1677C262.327 70.2303 268.157 102.421 240.724 141.74Z" fill="url(#pattern0_35_24)" />
                            <defs>
                                <pattern id="pattern0_35_24" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_35_24" transform="matrix(0.00173611 0 0 0.00194853 0 -0.716856)" />
                                </pattern>
                                <image id='image0_35_24' xlinkHref={Profile} />
                            </defs>
                        </svg>
                    </div>
                </div>

            </div>
        </>
    )
}
