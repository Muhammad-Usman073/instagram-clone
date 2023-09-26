import React from 'react'
import { getProviders, signIn as signIntoProvider } from "next-auth/react"
import Header from '../../components/Header'

const SignIn = ({ providers }) => {
    return (
        <>
            <Header />
            <div className=' flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center ' >
                <img className='w-80' src="http://links.papareact.com/ocw" alt="instagram_logo" />
                <p className=' text-xs itali ' >
                    this is the original instagram, but i m making this for educationali purposes.
                </p>
                <div className='mt-20' >
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className=' bg-blue-500 rounded-lg text-white p-3 ' onClick={() => signIntoProvider(provider.id, {callbackUrl: '/' } )}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders(); // Await the Promise here
    return {
        props: {
            providers
        }
    };
}

export default SignIn
