import React from 'react'

function AboutItem({title, title2, icon, description, description2, description3}) {
  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition p-12 pt-6 rounded-md w-full'>
    <h1 className='font-medium text-xl text-gray-600 dark:text-gray-200 mb-3'>{title}</h1>
    <p className='text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>{description}</p>

    <h1 className='font-medium text-l text-gray-600 dark:text-gray-200 mb-3 mt-6'>{title2}</h1>
    <p className='text-md text-gray-600 dark:text-gray-300 leading-relaxed'>{description2}</p>

    <h1 className='font-medium text-l text-gray-600 dark:text-gray-200 mb-3 mt-6'>{title2}</h1>
    <p className='text-md text-gray-600 dark:text-gray-300 leading-relaxed'>{description3}</p>

</div>

  )
}

export default AboutItem
