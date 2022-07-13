import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#202020] text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#ffa500]'>About</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-rigt text-4xl font-bold '>
                        <p>Hi. I'm Greg, and welcome to my website. Please take a look around.</p>
                    </div>
                    <div>
                        I am a Full-Stack Software Engineer with several years industry experience. I have great enthusiasm for my work and I believe that it is an important part of my personal growth. In my spare time, I enjoy working on small projects. Learning new languages is another passion of mine. In my free time I like to read books and play video games
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About