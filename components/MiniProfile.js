import React from 'react'
import { useSession,signOut } from 'next-auth/react'
const MiniProfile = () => {

    const {data: session } = useSession()

  return (
    <div className='flex items-center justify-between mt-14 ml-10 ' >
      <img className='h-14 w-14 rounded-full p-[2px]' src={session?.user?.image} alt="mini_profile" />
   <div className='flex-1 mx-4'  >
   <h2 className='font-bold' > {session?.user?.name} </h2>
   <h3 className='whitespace-nowrap text-sm text-gray-400 ' >welcome to instagram</h3>
   </div>
   
   
   <button onClick = {()=>signOut()} className="whitespace-nowrap text-sm text-blue-400 font-semibold " >sign Out</button>
      </div>

  )
}

export default MiniProfile
