import React from 'react'
import headerImg from '../assets/header.png'

function Header() {
  return (
    <>
    <section className="w-full lg:h-600 p-5 lg:grid grid-cols-[500px_1fr] gap-5 grid-rows-2 lg:px-14 lg:py-14">
        <h2 className="heading text-center text-4xl lg:text-64 leading-tittle lg:leading-head lg:text-left col-start-1">
            Innovative Software <br /> Solutions for Your <br />
            <span className='text-primary'>Business</span>
        </h2>
        <div className="w-full h-370 lg:h-500 lg:w-500 rounded-lg row-start-1 col-start-2 row-span-2">
            <img src={headerImg} alt="header vector " className="h-auto w-370 m-auto lg:h-500 lg:w-500 rounded-lg block" />

        </div>
        <main className="w-full h-auto block col-start-1 align-top">
            <p className="text text-justify text-lg">
            DesFlyer delivers cutting-edge software solutions tailored to your unique business needs. We specialize in creating robust, salable, and user-friendly applications that drive growth and efficiency. Let’s build the future together.
            </p>
            <div className="btns flex flex-col gap-5 lg:flex-row lg:gap-8 w-fit lg:my-5 lg:mx-0 m-auto ">
                <a href="/services" className="btn-primary text text-white hov text-26 m-auto">
                    Our Service
                </a>
                <a href="/Portfolio" className="btn-secondary text text-26 m-auto" >
                    View Portfolio
                </a>
            </div>
        </main>
    </section>
    </>
  )
}

export default Header