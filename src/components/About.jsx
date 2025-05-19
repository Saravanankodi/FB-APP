import React from 'react'
import vector from '../assets/about.png'

const data = [
    {
        tittle:"2024  year",
        condent:"Since our inception, we have become a trusted partner for businesses looking to enhance their operations through technology."
    },
    {
        tittle:"100 %",
        condent:"We are proud to have achieved a 100% client satisfaction rate, reflecting our commitment to excellence."
    },
    {
        tittle:"15  members",
        condent:"Our team is composed of dedicated professionals who are passionate about technology and committed to delivering exceptional results."
    },
    {
        tittle:"5 projects",
        condent:"We have successfully completed over 10 major projects, showcasing our expertise in software development."
    }
]
function About() {
  return (
    <>
    <section className="w-full h-auto lg:flex items-center justify-center p-5">
        <aside className="w-full lg:w-2/5">
                <img src={vector} alt="vector" className="w-full p-5" />
        </aside>
        <main className="w-full lg:w-3/5">
            <header className="w-full">
                <h2 className="heading text-3xl lg:text-58 text-center my-5 lg:text-left">
                    Our Journey and Team
                </h2>
                <p className="text text-lg lg:text-22 text-justify">
                Founded in 2024, DesFlyer has been dedicated to providing innovative software solutions that empower businesses. Our mission is to deliver high-quality products tailored to your needs.
                </p>
            </header>
            <div className="w-full lg:grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-6 py-6">
                {data.map((item,index)=>(
                    <div className="w-full my-2 lg:m-0" key={index}>
                        <h2 className="heading text-38  text-center lg:text-left">
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