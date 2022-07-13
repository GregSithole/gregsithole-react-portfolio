import React, { useState } from 'react'

const Experience = () => {

    const [currentTab, setCurrentTab] = useState(1);

    return (
        <div name='skills' className='bg-[#202020] text-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full sm:h-screen'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-primary'>Experience</p>
                </div>

                <div className='hidden sm:flex'>
                    <section class="py-20 mx-auto space-y-8 sm:py-20 w-full">
                        <div class="container flex flex-row items-stretch justify-center w-full max-w-4xl space-x-12">
                            <div class="flex flex-col justify-start w-1/4 border-l-2 border-[#343434]">
                                <button className={currentTab === 1 ? 'px-4 py-2 text-sm z-20 border-l-2 bg-[#343434] border-primary font-bold text-left' : 'px-4 py-2 text-sm text-left'} onClick={() => setCurrentTab(1)}>
                                    Kurtosys
                                </button>
                                <button className={currentTab === 2 ? 'px-4 py-2 text-sm z-20 border-l-2 bg-[#343434] border-primary font-bold text-left' : 'px-4 py-2 text-sm text-left'} onClick={() => setCurrentTab(2)}>
                                    Entrostat
                                </button>
                                <button className={currentTab === 3 ? 'px-4 py-2 text-sm z-20 border-l-2 bg-[#343434] border-primary font-bold text-left' : 'px-4 py-2 text-sm text-left'} onClick={() => setCurrentTab(3)}>
                                    Empire State
                                </button>
                                <button className={currentTab === 4 ? 'px-4 py-2 text-sm z-20 border-l-2 bg-[#343434] border-primary font-bold text-left' : 'px-4 py-2 text-sm text-left'} onClick={() => setCurrentTab(4)}>
                                    The Digital Academy
                                </button>
                                <button className={currentTab === 5 ? 'px-4 py-2 text-sm z-20 border-l-2 bg-[#343434] border-primary font-bold text-left' : 'px-4 py-2 text-sm text-left'} onClick={() => setCurrentTab(5)}>
                                    Varsity College
                                </button>
                                <button className={currentTab === 6 ? 'px-4 py-2 text-sm z-20 border-l-2 bg-[#343434] border-primary font-bold text-left' : 'px-4 py-2 text-sm text-left'} onClick={() => setCurrentTab(6)}>
                                    Varsity College
                                </button>
                            </div>
                            <div class="w-3/4">
                                <div className={currentTab === 1 ? 'space-y-1 group transition duration-500 transform ease-in opacity-1' : 'opacity-0 h-0'}>
                                    <h3 className='text-xl font-bold leading-tight'>
                                        Software Engineer <span className='text-primary'>@ Kurtosys</span>
                                    </h3>
                                    <p className='text-base text-gray-600 duration-500 transform ease-in'>
                                        Janurary 2022 - Present
                                    </p>
                                    <ul className='experience'>
                                        <li>Example 1</li>
                                        <li>Example 2</li>
                                    </ul>
                                </div>
                                <div className={currentTab === 2 ? 'space-y-1 group transition duration-500 transform ease-in opacity-1' : 'opacity-0 h-0'}>
                                    <h3 className='text-xl font-bold leading-tight'>
                                        Junior Software Developer <span className='text-primary'>@ Entrostat</span>
                                    </h3>
                                    <p className='text-base text-gray-600 duration-500 transform ease-in'>
                                        May 2017 - December 2021
                                    </p>
                                    <ul className='experience'>
                                        <li>Example 1</li>
                                        <li>Example 2</li>
                                    </ul>
                                </div>
                                <div className={currentTab === 3 ? 'space-y-1 group transition duration-500 transform ease-in opacity-1' : 'opacity-0 h-0'}>
                                    <h3 className='text-xl font-bold leading-tight'>
                                        Junior Software Developer <span className='text-primary'>@ Empire State</span>
                                    </h3>
                                    <p className='text-base text-gray-600 duration-500 transform ease-in'>
                                        Feburary 2016 - April 2017
                                    </p>
                                    <ul className='experience'>
                                        <li>Example 1</li>
                                        <li>Example 2</li>
                                    </ul>
                                </div>
                                <div className={currentTab === 4 ? 'space-y-1 group transition duration-500 transform ease-in opacity-1' : 'opacity-0 h-0'}>
                                    <h3 className='text-xl font-bold leading-tight'>
                                        Software Development Intern <span className='text-primary'>@ The Digital Academy</span>
                                    </h3>
                                    <p className='text-base text-gray-600 duration-500 transform ease-in'>
                                        November 2015 - January 2016
                                    </p>
                                    <ul className='experience'>
                                        <li>Example 1</li>
                                        <li>Example 2</li>
                                    </ul>
                                </div>
                                <div className={currentTab === 5 ? 'space-y-1 group transition duration-500 transform ease-in opacity-1' : 'opacity-0 h-0'}>
                                    <h3 className='text-xl font-bold leading-tight'>
                                        IT Support Assistant <span className='text-primary'>@ Varisty College</span>
                                    </h3>
                                    <p className='text-base text-gray-600 duration-500 transform ease-in'>
                                        Feburary 2015 - May 2015
                                    </p>
                                    <ul className='experience'>
                                        <li>Example 1</li>
                                        <li>Example 2</li>
                                    </ul>
                                </div>
                                <div className={currentTab === 6 ? 'space-y-1 group transition duration-500 transform ease-in opacity-1' : 'opacity-0 h-0'}>
                                    <h3 className='text-xl font-bold leading-tight'>
                                        Student Ambassador <span className='text-primary'>@ Varisty College</span>
                                    </h3>
                                    <p className='text-base text-gray-600 duration-500 transform ease-in'>
                                        December 2014 - Feburary 2015
                                    </p>
                                    <ul className='experience'>
                                        <li>Example 1</li>
                                        <li>Example 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className='flex flex-col space-y-8 py-20 sm:hidden px-8'>
                    <div className='space-y-1 group transition duration-500 transform ease-in opacity-1'>
                        <h3 className='text-xl font-bold leading-tight'>
                            Software Engineer <span className='text-primary'>@ Kurtosys</span>
                        </h3>
                        <p className='text-base text-gray-600 duration-500 transform ease-in'>
                            Janurary 2022 - Present
                        </p>
                        <ul className='experience'>
                            <li>Example 1</li>
                            <li>Example 2</li>
                        </ul>
                    </div>
                    <div className='space-y-1 group transition duration-500 transform ease-in opacity-1'>
                        <h3 className='text-xl font-bold leading-tight'>
                            Junior Software Developer <span className='text-primary'>@ Entrostat</span>
                        </h3>
                        <p className='text-base text-gray-600 duration-500 transform ease-in'>
                            May 2017 - December 2021
                        </p>
                        <ul className='experience'>
                            <li>Example 1</li>
                            <li>Example 2</li>
                        </ul>
                    </div>
                    <div className='space-y-1 group transition duration-500 transform ease-in opacity-1'>
                        <h3 className='text-xl font-bold leading-tight'>
                            Junior Software Developer <span className='text-primary'>@ Empire State</span>
                        </h3>
                        <p className='text-base text-gray-600 duration-500 transform ease-in'>
                            Feburary 2016 - April 2017
                        </p>
                        <ul className='experience'>
                            <li>Example 1</li>
                            <li>Example 2</li>
                        </ul>
                    </div>
                    <div className='space-y-1 group transition duration-500 transform ease-in opacity-1'>
                        <h3 className='text-xl font-bold leading-tight'>
                            Software Development Intern <span className='text-primary'>@ The Digital Academy</span>
                        </h3>
                        <p className='text-base text-gray-600 duration-500 transform ease-in'>
                            November 2015 - January 2016
                        </p>
                        <ul className='experience'>
                            <li>Example 1</li>
                            <li>Example 2</li>
                        </ul>
                    </div>
                    <div className='space-y-1 group transition duration-500 transform ease-in opacity-1'>
                        <h3 className='text-xl font-bold leading-tight'>
                            IT Support Assistant <span className='text-primary'>@ Varisty College</span>
                        </h3>
                        <p className='text-base text-gray-600 duration-500 transform ease-in'>
                            Feburary 2015 - May 2015
                        </p>
                        <ul className='experience'>
                            <li>Example 1</li>
                            <li>Example 2</li>
                        </ul>
                    </div>
                    <div className='space-y-1 group transition duration-500 transform ease-in opacity-1'>
                        <h3 className='text-xl font-bold leading-tight'>
                            Student Ambassador <span className='text-primary'>@ Varisty College</span>
                        </h3>
                        <p className='text-base text-gray-600 duration-500 transform ease-in'>
                            December 2014 - Feburary 2015
                        </p>
                        <ul className='experience'>
                            <li>Example 1</li>
                            <li>Example 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience