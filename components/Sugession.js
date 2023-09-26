import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker';
const Sugession = () => {
    const [suggestions, setSugessions] = useState([])
    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSugessions(suggestions)
    }, []);
    return (
        <div className='  mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'   >
                <h3 className='text-sm font-bold text-gray-400 ' >Suggestions for you</h3>
                <button className=' font-semibold text-gray-600 ' >See All</button>
            </div>

            {
                suggestions.map((profile)=>(
                  <div className='flex justify-between items-center mt-3' key={profile.id} >
                  
                  <img className=' h-10 w-10 rounded-full border p-[2px] ' src={profile.avatar} alt="" />
<div className='ml-4 flex-1' > 
<h2 className=' font-semibold text-sm ' >{profile.username}</h2>
<h3 className='text-xs text-gray-400' >works at {profile.company.name}</h3>
</div>
<button className='text-blue-400 text-xs' >follow</button>

                  </div>
                ))
               }

        </div>
    )
}

export default Sugession
