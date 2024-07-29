import React from 'react'

function Header() {
  return (
    <>


      <nav className='bg-appbg border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex items-center justify-between p-4 text-white mx-auto'>

          <div className='hidden md:flex-0 md:flex'>
            <a className=' flex items-center space-x-3 rtl:space-x-reverse' href='/'>
              <span className='self-center text-black text-2xl font-semibold whitespace-nowrap dark:text-white'>bodasingi bhanu prasad</span>
            </a>
          </div>
          <div className='flex-1 flex justify-center text-black'>
            <ul className="flex space-x-5">
              <li><a href="#summary_id" className="hover:underline">about</a></li>
              <li><a href="#projects_id" className="hover:underline">projects</a></li>
              <li><a href="#timeline_id" className="hover:underline">work</a></li>
              <li><a href="#education_id" className="hover:underline">education</a></li>
              <li><a href="#contact_id" className="hover:underline">contact</a></li>
            </ul>
          </div>

        </div>
      </nav>





    </>
  )
}

export default Header