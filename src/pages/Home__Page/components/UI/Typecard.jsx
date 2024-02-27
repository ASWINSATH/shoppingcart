import React from 'react'

const Typecard = ({img,label}) => {

  return (
    <div>
      <img 
      src={img} 
      alt={label} 
      className='w-26 h-30 '/>
      
      <p className='flex justify-center mt-2'>{label}</p>

    </div>
  )
}

export default Typecard




