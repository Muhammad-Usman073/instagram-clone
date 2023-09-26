import React from 'react'
import Post from './Post'

const posts = [
    {
        id: "1",
        username: 'usmanali',
        userImg: "http://links.papareact.com/jjm",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg',
        caption: 'insta_clone'
    },
    {
        id: "2",
        username: 'usmanali',
        userImg: 'http://links.papareact.com/jjm',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg',
        caption: 'insta_clone'
    },
]


const Posts = () => {
    return (
        <div>
            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        userImg={post.userImg}
                        img={post.img}
                        caption={post.caption}
                    />
                ))

            }
        </div>
    )
}

export default Posts
