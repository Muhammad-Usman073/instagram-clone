import React from 'react'

const Story = ({img, username}) => {
  return (
    <div>
    <img className=' h-14 w-14 rounded-full p-[1.5px]  hover:scale-110 transition transform duration-200 cursor-pointer ease-out border-red-500 border-2 object-contain ' src={img} alt='srory_images' />  
    <p className='txt-sm truncate w-14 text-center ' >{username}</p>
    </div>
  )
}

export default Story
