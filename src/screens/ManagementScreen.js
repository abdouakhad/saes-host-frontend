import { CloudDownloadIcon, CollectionIcon, PencilAltIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';


const ManagementScreen = () => {
    return (
        <>
            <div className='relative'>

                {/* Sidebar */}
                <div className='absolute top-0 bottom-0 w-1/5 h-screen bg-gray-300 shadow-md'>

                    <div className='relative w-full h-full py-6'>

                        {/* Menus */}
                        <div>
                            <Link to='/dashboard/post'>
                                <div className='w-full h-auto py-3 text-xl hover:bg-white border-b border-gray-50'>
                                    <CloudDownloadIcon className='w-8 h-8 inline mx-3' />
                                    <span className='invisible md:visible'>Post</span>
                                </div>
                            </Link>

                            <Link to='/dashboard/edit'>
                                <div className='w-full h-auto py-3 text-xl hover:bg-white border-b border-gray-50'>
                                    <PencilAltIcon className='w-8 h-8 inline mx-3' />
                                    <span className='invisible md:visible'>Edition</span>
                                </div>
                            </Link>
                            
                            <Link to='/dashboard/update'>
                                <div className='w-full h-auto py-3 text-xl hover:bg-white border-b border-gray-50'>
                                    <CollectionIcon className='w-8 h-8 inline mx-3' />
                                    <span className='invisible md:visible'>See All</span>
                                </div>
                            </Link>

                        </div>
                        <div className='absolute w-12 h-12 rounded-full bg-gray-50 bottom-20 -right-6 cursor-pointer shadow-md hover:bg-white'>
                            <span className='flex justify-center -mt-1 font-semibold text-5xl'> {'-'} </span>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default ManagementScreen;
