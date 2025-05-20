import React from 'react'
import logo from '../assets/Logo.png'
import instagram from '../assets/Instagram.png'
import linkedin from '../assets/LinkedIn.png'
import facebook from '../assets/Facebook.png'
import twitter from '../assets/TwitterX.png'
import whatapp from '../assets/WhatsApp.png'

function Footer() {
  return (
    <>
    <footer className="w-full lg:py-4 lg:px-14 text-center lg:text-left  bg-footer text-black p-5 border-t-2">
        <header className="w-full">
            <img src={logo} alt="logo" className="w-fit h-12 m-auto lg:m-0" />
        </header>
            <main className="w-full flex flex-col lg:flex-row justify-evenly place-items-center place-content-center my-5">
                <div className="w-fit">
                    <p className="heading text-3xl">Email</p>
                    <a href="mailto:desflyer.tech@gmail.com" target='_blank' className="text block mb-5 text-lg">desflyer.tech@gmail.com</a>
                    <p className="heading text-3xl">Phone no</p>
                    <a href="tel:+919092579460" className="text text-lg">9092579460</a>
                </div>
                <div className="w-fit hidden lg:block">
                    <p className="text text-xl my-5 tittle text-28">About Us</p>
                    <p className="text text-xl my-5 tittle text-28">How It Works</p>
                    <p className="text text-xl my-5 tittle text-28">Contact US</p>
                </div>
                <div className="w-fit">
                    <h2 className="heading text-32">Follow as  on social media</h2>
                    <div className="w-full flex items-center justify-evenly">
                        <a href="" className="link">
                            <img src={linkedin} alt="" className="w-12 h-12" />
                        </a>
                        <a href="" className="link">
                            <img src={whatapp} alt="" className="w-12 h-12" />                        </a>
                        <a href="" className="link">
                            <img src={instagram} alt="" className="w-12 h-12" />
                        </a>
                        <a href="" className="link">
                            <img src={facebook} alt="" className="w-12 h-12" />
                        </a>
                        <a href="" className="link">
                            <img src={twitter} alt="" className="w-12 h-12" />
                        </a>
                    </div>
                </div>
            </main>
            <div className="w-full lg:flex items-center justify-between border-black border-t-2 lg:pt-5">
                <p className="text text-lg lg:text-xl text-black">© 2025 DesFlyer. All rights reserved.</p>
                <p className="text text-lg lg:text-xl text-black">Designed by DesFlyer</p>
            </div>
    </footer>
    </>
  )
}

export default Footer