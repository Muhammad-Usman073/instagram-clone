import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Sugession from './Sugession'
import { useSession } from 'next-auth/react'
const Feed = () => {
    const { data: session } = useSession()
    return (
        <main className={` ${!session && "!grid-cols-1 !max-w-3xl " } grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:mx-w-6xl mx-auto  `} >
            { /*section*/}
            <section className='col-span-2' >
                { /*stories*/}
                <Stories />
                { /*post*/}
                <Posts />
            </section>





            { /*section*/}
            {session && <section className='hidden xl:inline-grid md:col-span-1  ' >
                <div> <MiniProfile />
                    <Sugession />
                </div>
            </section>
        }




        </main>
    )
}

export default Feed
