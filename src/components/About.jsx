import React from 'react'
import vector from '../assets/about.png'

const data = [
    {
        tittle:"10000 donors",
        condent:"Since our inception in 2023, we have connected thousands of donors with recipients in need, making a significant impact in emergency situations."
    },
    {
        tittle:"5000 recipients",
        condent:"Our platform has facilitated over 5, 000 successful blood donations, ensuring that those in need receive timely assistance."
    },
    {
        tittle:"100 partnerships",
        condent:"We have established partnerships with over 100 local blood banks to streamline the donation process and enhance community support."
    },
    {
        tittle:"50 events",
        condent:"Our outreach initiatives have led to more than 50 community events aimed at promoting blood donation awareness and engagement."
    }
]
function About() {
  return (
    <>
    <section className="w-full h-auto flex-col sm:flex-row flex items-center justify-center p-5" id='about'>
        <aside className="w-full sm:w-2/5 order-1 sm:-order-1">
                <img src={vector} alt="vector" className="w-full sm:p-5" />
        </aside>
        <main className="w-full sm:w-3/5">
            <header className="w-full">
                <h2 className="heading text-42 sm:text-5xl text-primary text-center sm:my-5 sm:text-left">
                    Our Mission & Vision
                </h2>
                <p className="text text-22 text-justify">
                At Finding Blood, we strive to create a global network of voluntary blood donors. Our goal is to ensure that life-saving blood is always available when needed, while raising awareness about the importance of blood donation.
                </p>
            </header>
            <div className="w-full sm:grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-6 py-6">
                {data.map((item,index)=>(
                    <div className="w-full my-2 sm:m-0" key={index}>
                        <h2 className="heading text-32 sm:text-38  text-center sm:text-left">
                            {item.tittle}
                        </h2>
                        <p className="text text-lg text-justify">
                            {item.condent}
                        </p>
                    </div>
                ))}      
            </div>
        </main>
    </section>
    </>
  )
}

export default About