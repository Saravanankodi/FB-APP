import React from 'react'
import header from '../assets/header.png'
import donate from '../assets/donate.png'
import find from '../assets/find.png'

const data = [
    {
        vector:find,
        tittle:"Easy Registration Process",
        condent:"Registering on our platform is quick and easy. Simply download the app, create an account, and provide your blood type and contact information to become a registered donor or recipient."
    },
    {
        vector:donate,
        tittle:"Safe and Secure Donations",
        condent:"We prioritize the safety of both donors and recipients. Our platform adheres to strict medical guidelines and ensures that all donations are conducted in a safe and hygienic environment, minimizing any risks."
    },
    {
        vector:header,
        tittle:"Efficient Matching System",
        condent:"Our advanced matching algorithm connects donors with recipients based on blood type and location. This ensures that blood is available when and where it's needed most, saving precious time in emergency situations."
    }
]


export const Card = ({vector,tittle,condent}) => {
  return (
    <>
    <section className="w-full h-auto flex flex-col gap-2 my-2.5 lg:gap-4">
        <img src={vector} alt="vector-img" className="w-full order-1 lg:-order-1 h-auto m-auto" />
        <h2 className="tittle text-nowrap lg:text-32 text-2xl text-center">
            {tittle}
        </h2>
        <p className="text text-lg">
            {condent}
        </p>
        <a href="" className="btn-secondary m-auto lg:m-0">Learn More</a>
    </section>
    </>
  )
}


function Features() {
  return (
    <>
    <section className="w-full h-auto p-5">
        <header className="w-full lg:flex items-center justify-center gap-5">
            <h2 className="tittle text-28 text-center lg:text-left lg:text-44 w-full lg:w-1/2">
                Understanding the Finding Blood Process: A Step-by-Step Guide
            </h2>
            <p className="text text-2xl lg:w-1/2 w-full">
                Our platform simplifies the process of connecting blood donors with recipients in need. From registration to donation, we provide a seamless experience that ensures quick access to life-saving blood. Discover how Finding Blood makes a difference in critical situations.
            </p>
        </header>
        <main className="w-full lg:grid grid-cols-3 items-start gap-10">
            {data.map((item,index)=>(
                <Card 
                key={index}
                vector={item.vector}
                tittle={item.tittle}
                condent={item.condent}/>
            ))}
        </main>
    </section>
    </>
  )
}

export default Features