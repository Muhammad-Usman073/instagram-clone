import React from 'react'
import { BsThreeDots, BsChatDots, BsBookmark } from 'react-icons/bs'
import { GoPaperAirplane } from 'react-icons/go'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

const Post = ({ id, username, userImg, img, caption }) => {
    return (
        <div className='bg-white my-7 border rounded-sm' >
            <div className='flex items-center p-5' >
                <img className='h-12 w-12 rounded-full object-contain border p-1 mr-3' src={userImg} alt="profile_pic" />
                <p className='flex-1 font-bold' >{username}</p>
                <BsThreeDots className='h-5' />
            </div>


            <img className='object-cover h-full' src={img} alt="post_image" />



            <div className='flex justify-between px-4 pt-4' >
                <div className='flex space-x-4' >
                    <AiOutlineHeart className='btn' />
                    <BsChatDots className='btn' />
                    <GoPaperAirplane className='btn' />
                </div>
                <BsBookmark className='btn' />
            </div>

            <p className='p-4 truncate' >
                <span className='font-bold  mr-1' >{username} </span>
                {caption}
            </p>


            {
                /*comments*/
            }

            <form className="flex items-center p-4 ">
                <HiOutlineEmojiHappy className='h-7' />
                <input
                    placeholder='add a comment'
                    type="text" className='border-none flex-1 focus:ring-0 outline-none ' />
                <button className='font-semibold text-blue-400 ' >post</button>

            </form>

        </div>
    )
}

export default Post
