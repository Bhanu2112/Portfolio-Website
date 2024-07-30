import React from 'react'

export default function ContactCard() {
    return (
        <div>

            <div className='flex items-center  justify-center rounded-[30px] p-5 flex bg-contactbg '>
                <form>
                    <div className='m-5 w-full md:w-[450px]'>
                        <span className='block m-4'>
                            <p>contact me</p>
                        </span>
                        <span className='text-wrap block m-4'>
                            <p>got any questions, suggestions, or are interested in hiring or freelancing opportunities ? fill this form to reach out</p>
                        </span>
                    </div>
                    <div className='flex flex-wrap ml-2'>
                        <input type="text" id="name" className="m-3 w-full bg-gray-50 border-b-4 border-l-1 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[150px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your name" required />
                        <input type="email" id="email" className=" m-3 w-full bg-gray-50  mdml-10 border-b-4 border-l-1 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[250px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your email" required />
                    </div>
                    <div className='mr-8'>
                        <textarea id="message" rows="4" className="block m-5 p-2.5 w-full md:w-[425px] text-sm text-gray-900 bg-gray-50 rounded-lg border-b-4 border-l-1 border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your message..."></textarea>
                    </div>
                    <div className='mr-8'>
                        <button type="button" class="ml-4 w-full md:w-[425px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
