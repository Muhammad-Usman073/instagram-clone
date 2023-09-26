import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';
import { useSession } from 'next-auth/react';
const Stories = () => {

    const { data: session } = useSession()

    const [suggestions, setSugessions] = useState([])
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSugessions(suggestions)
    }, []);

    return (
        <div className='flex space-x-2 p-6 scrollbar-thin scrollbar-thumb-black scrollbar-rounded bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll ' >
            {session &&
                <Story
                    img={session.user.image}
                    username={session?.user?.name}
                />
            }

            {
                suggestions.map((profile) => (
                    <Story
                        key={profile.id}
                        img={profile.avatar}
                        username={profile.username}
                    />
                ))
            }
        </div>
    )
}

export default Stories
