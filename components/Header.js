import React from 'react'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineMenu, AiOutlinePlusCircle, AiOutlineHeart } from 'react-icons/ai'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import { GoPeople } from 'react-icons/go'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
function Header() {
    const router = useRouter()
    const [open, setOpen] = useRecoilState(modalState)
    const { data: session } = useSession()
    return (
        <div className=' shadow-sm border-b stickey top-0 z-50 bg-white ' >
            <div className=' flex justify-between max-w-5xl mx-5 lg:mx-auto ' >
                { /* left */}
                <div className='relative cursor-pointer hidden lg:inline-grid w-24' >
                    <Image onClick={() => router.push('/')} alt='logo-instagram' src='http://links.papareact.com/ocw' layout='fill' objectFit='contain' />
                </div>
                <div className='relative cursor-pointer lg:hidden flex-shrink-0 w-10' >
                    <Image onClick={() => router.push('/')} alt='logo' src='http://links.papareact.com/jjm' layout='fill' objectFit='contain' />
                </div>




                { /* middle */}

                <div className='max-w-xs' >
                    <div className=' relative mt-1 p-3 rounded-md ' >
                        <div className=' flex absolute inset-y-0 items-center pl-3 pointer-events-none' > <AiOutlineSearch className="h-5 w-5 text-gray-500 " /> </div>
                        <input className='bg-gray-50 block pl-10 sm:text-sm focus:ring-black border-gray-300 focus:border-black rounded-md ' type="search" placeholder='Search' />
                    </div>
                </div>

                { /* right */}

                <div className='flex items-center justify-end space-x-4 ' >
                    <AiFillHome onClick={() => router.push('/')} className=' navBtn ' />
                    <AiOutlineMenu className='md:hidden cursor-pointer h-8 w-8 ' />

                    {
                        session ? (
                            <>
                                <div className='relative navBtn ' >
                                    <HiOutlinePaperAirplane className='rotate-45 navBtn' />
                                    <div className='absolute -top-2 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white -right-3 text-xs w-5 h-5' >3</div>
                                </div>
                                <AiOutlinePlusCircle onClick={()=>setOpen(true)} className=' navBtn' />
                                <GoPeople className=' navBtn' />
                                <AiOutlineHeart className=' navBtn' />

                                <img
                                    onClick={() => signOut()}
                                    className=' h-10 w-10 cursor-pointer rounded-full '
                                    src={session?.user?.image} alt="avatar" />
                            </>
                        )
                            :
                            (
                                <button onClick={() => signIn()}>Sign in</button>
                            )
                    }
                </div>

            </div>
        </div>
    )
}

export default Header
