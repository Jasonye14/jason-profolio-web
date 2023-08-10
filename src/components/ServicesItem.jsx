import React from 'react'

function ServicesItem({title, icon, description}) {
  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition p-5 rounded-md'>
  <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
    {icon}
  </div>
  <h1 className='font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1'>{title}</h1>
  <div className='text-md text-gray-600 dark:text-gray-300'>
  {Array.isArray(description) ? description.map((line, index) => (
    <p key={index} className='description-item my-2 leading-6'>
      	❖ {line}
    </p>
  )) : <p className='my-2 leading-6'>{description}</p>}
  </div>
</div>

  )
}

export default ServicesItem 