import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (


    <footer className="bg-cardborder rounded-lg shadow  p-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm flex text-black sm:text-center dark:text-gray-400"> <a href="/" className="hover:underline">bodasingi bhanu prasad</a>  <div className='flex ml-2'>
          <span className='block pl-2 mb-4'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </span>
          <span className='block mb-4 ml-3'>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </div>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#summary_id" className="hover:underline me-4 md:me-6">about</a>
          </li>
          <li>
            <a href="#projects_id" className="hover:underline me-4 md:me-6">projects</a>
          </li>
          <li>
            <a href="#timeline_id" className="hover:underline me-4 md:me-6">work</a>
          </li>
          <li>
            <a href="#contact_id" className="hover:underline">contact</a>
          </li>
        </ul>
      </div>
    </footer>

  )
}
