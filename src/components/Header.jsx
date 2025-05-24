import React from 'react'
import headerImg from '../assets/header.png'
import logo from '../assets/logo.svg'
function Header() {
  return (
    <>
    <section className="w-full lg:h-600 p-5 lg:grid grid-cols-[1fr_500px] place-items-center gap-5 lg:px-14 lg:py-14">
        <div className="w-370 m-auto lg:h-500 lg:w-500 relative lg:hidden block rounded-lg">
            <img src={headerImg} alt="header vector " className="h-auto w-370 m-auto lg:h-500 lg:w-500 rounded-lg" />
            <img src={logo} alt="logo" className='h-75 w-75 absolute top-4 border-2 border-border right-2.5 bg-white rounded-full' />
        </div>
        <main className="w-full h-auto block col-start-1 align-top">
                <span className='text-primary text-center lg:text-left heading text-40 lg:text-54 block lg:my-2'>Finding Blood</span>
            <h2 className="tittle text-center text-28 lg:text-44 lg:text-left col-start-1">
                Donate, Connect, Save Lives
            </h2>
            <p className="text text-justify text-2xl lg:py-5">
                Finding Blood connects donors and recipients, enabling quick access to life-saving blood in emergencies. Join our global network and make a difference today!
            </p>
            <div className="btns flex flex-col gap-5 lg:flex-row lg:gap-8 w-fit lg:my-5 lg:mx-0 m-auto ">
                <a href="/services" className="btn-primary text text-white hov text-26 m-auto">
                    Donate Now
                </a>
                <a href="/Portfolio" className="btn-secondary text text-26 m-auto" >
                    Learn More
                </a>
            </div>
        </main>
        <div className="w-full h-370 lg:h-500 lg:w-500 hidden lg:relative lg:block rounded-lg">
            <img src={headerImg} alt="header vector " className="h-auto w-370 m-auto lg:h-500 lg:w-500 rounded-lg" />
            <img src={logo} alt="logo" className='w-100 h-100 absolute top-4 border-2 border-border right-2.5 bg-white rounded-full' />
        </div>
    </section>
    </>
  )
}

export default Header