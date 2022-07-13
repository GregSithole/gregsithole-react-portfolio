import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#202020]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#ffa500]'>Hi, my name is</p>
                <h className='tex-4xl sm:text-7xl font-bold text-white'>Greg Sithole</h>
                <h2 className='tex-4xl sm:text-7xl font-bold text-gray-400'>I'm Full Stack Software Engineer</h2>
                <p className='text-gray-400 py-4 max-w-[700px]'>I'm a full-stack software engineer specializing in building exceptional digital experiences. Currently, I'm focuse on building responsive full-stack web application</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ffa500] hover:border-[#ffa500]'>
                        View Work
                        <span className='group-hover:rotate-90 group-hover:-translate-y-2 group-hover:translate-x-1 duration-300'>
                            <HiArrowNarrowRight className='ml-3 hover:' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home