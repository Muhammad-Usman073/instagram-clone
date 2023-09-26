import React, { Fragment, useState } from 'react'
import { modalState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil'
import { Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { FiCamera } from 'react-icons/fi'
import { useRef } from 'react'
import { ref, getDownloadURL, uploadString } from '@firebase/storage'
import { db, storage } from '../components/firebase'
import { addDoc, collection, updateDoc, serverTimestamp, doc } from '@firebase/firestore'
import { useSession } from 'next-auth/react'
const Modal = () => {

    const [open, setOpen] = useRecoilState(modalState)
    const filePickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null)
    const captionRef = useRef(null);
    const { data: session } = useSession()

    const [loading, setLoading] = useState(false)

    const uploadPost = async () => {
        if (loading) return
        setLoading(true)
        const docRef = await addDoc(collection(db, 'posts'), {
            username: session?.user?.username || "FallbackUsername",
            caption: captionRef.current.value,
            profileImg: session?.user?.image,
            timeStamp: serverTimestamp()
        })
        console.log("data added to tthe database", docRef.id)
        const imgRef = ref(storage, `posts/${docRef.id}/image`);
        await uploadString(imgRef, selectedFile, 'data_url').then(async snapshot => {
            const downloadURL = await getDownloadURL(imgRef)
            await updateDoc(doc(db, 'posts', docRef.id), {
                image: downloadURL
            })
        })
        setOpen(false)
        setLoading(false)
        setSelectedFile(null)
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    }

    return (
        <Transition.Root show={open} as={Fragment} >
            <Dialog as="div"
                className=" fixed z-10 inset-0 overflow-y-auto "
                onClose={setOpen}
            >
                <div className=' flex items-end justify-center min-h-[180px] sm:min-h-screen
                 pt-4 px-4 pb-28 text-center sm:block sm:p-0 ' >

                    <Transition.Child
                        enter="duration-300 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100 "
                        leave=" duration-200 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        as={Fragment}
                    >
                        <Dialog.Overlay className=' fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacityy ' />
                    </Transition.Child>

                    <span className=' hidden sm:inline-block sm:align-middle sm:h-screen '
                        aria-hidden="true"
                    >
                        &#8203;

                    </span>
                    <Transition.Child
                        enter="duration-300 ease-out"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 "
                        enterTo="opacity-100 translate-y-0 sm:scale-100 "
                        leave=" duration-200 ease-in"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100 "
                        leaveTo="opacity-0 transate-y-4 sm:translate-y-8 sm:scale-95"
                        as={Fragment}
                    >

                        <div className=' inline-block align-bottom bg-white rounded-lg px-1 pt-5 pb-1 text-left overflow-hidden 
                        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 ' >

                            <div>
                                {selectedFile ? <img
                                    className=' w-full object-contain cursor-pointer '
                                    onClick={() => { setSelectedFile(null) }}
                                    src={selectedFile} alt="selected_image" /> : <div
                                        onClick={() => filePickerRef.current.click()}
                                        className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer">
                                    <FiCamera
                                        className="h-6 w-6 text-red-600"
                                        aria-hidden="true"
                                    />
                                </div>}

                                <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg leading-6 font-medium text-gray-900">
                                            Upload a photo
                                        </Dialog.Title>

                                        <div>
                                            <input
                                                ref={filePickerRef}
                                                type="file"
                                                hidden
                                                onChange={addImageToPost}
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                className="border-none focus: ring-0 w-full text-center"
                                                type="text"
                                                ref={captionRef}
                                                placeholder="Please enter a caption..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-0 sm:mt-8' >
                                    <button type='button'
                                        disabled={!selectedFile}
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm
                                px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300
                                disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                                        onClick={uploadPost}
                                    >
                                        upload a post
                                    </button>
                                </div>
                            </div>
                        </div>

                    </Transition.Child>
                </div>
            </Dialog >

        </Transition.Root >
    )
}

export default Modal












