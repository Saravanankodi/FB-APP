import React from 'react'
import headerImg from '../assets/header.png'
import logo from '../assets/logo.svg'
function Header() {
  return (
    <>
    <section className="w-full sm:h-600 p-5 sm:grid grid-cols-[1fr_500px] place-items-center gap-5 sm:px-14 sm:py-14">
        <div className="w-full m-auto sm:h-500 sm:w-500 sm:hidden block rounded-lg">
            <img src={headerImg} alt="header vector " className="h-auto w-370 m-auto sm:h-500 sm:w-500" />
            <a href="" className="fixed top-24 right-7">
                <img src={logo} alt="logo" className='h-75 w-75 border-2 border-border bg-white rounded-full' />
            </a>
        </div>
        <main className="w-full h-auto block col-start-1 align-top">
                <span className='text-primary text-center sm:text-left heading text-40 sm:text-54 block sm:my-2'>Finding Blood</span>
            <h2 className="tittle text-center text-28 sm:text-44 sm:text-left col-start-1">
                Donate, Connect, Save Lives
            </h2>
            <p className="text text-justify text-2xl sm:py-5">
                Finding Blood connects donors and recipients, enabling quick access to life-saving blood in emergencies. Join our global network and make a difference today!
            </p>
            <div className="btns flex flex-col gap-5 sm:flex-row sm:gap-8 w-fit sm:my-5 sm:mx-0 m-auto ">
                <a href="/services" className="btn-primary text text-white hov text-26 m-auto">
                    Donate Now
                </a>
                <a href="https://www.freeprivacypolicy.com/live/4941bf09-f4ef-42c1-8adf-4b72df7a5d0f" className="btn-secondary text text-26 m-auto" >
                    Learn More
                </a>
            </div>
        </main>
        <div className="sm:h-500 sm:w-500 hidden sm:relative sm:block rounded-lg">
            <img src={headerImg} alt="header vector " className="h-auto w-370 m-auto sm:h-500 sm:w-500 rounded-lg" />
            <a href="" className="w-full fixed top-28 right-20 ">
                <img src={logo} alt="logo" className='w-100 h-100 absolute top-4 border-2 border-border right-2.5 bg-white rounded-full' />
            </a>
        </div>
    </section>
    </>
  )
}

export default Header