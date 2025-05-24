import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <>
    <section className="w-full h-auto p-5 flex flex-col lg:flex-row gap-5 items-center justify-center">
        <aside className="w-full lg:w-1/2 lg:p-10 flex flex-col items-center lg:items-start justify-center gap-5 ">
            <h2 className="heading text-primary w-fit text-4xl lg:text-left lg:text-5xl">
              Get in Touch
            </h2>
            <p className="tittle text-28">We are here to assist you with any inquiries.</p>

            <ul className="my-5 list-disc list-inside">
              <li className="tittle text-lg my-4">
                <a href="mail:desflyer.tech@gmail.com" className="text-base">desflyer.tech@gmail.com</a>
              </li>
              <li className="tittle text-lg my-2">
                <a href="" className="link">+91 9092579460</a>
              </li>
              <li className="tittle text-lg my-4">
              DesFlyer ,Kings College of Engineering 
              </li>
            </ul>
        </aside>
        <main className="w-full lg:w-1/2">
            <ContactForm/>
        </main>
    </section>
    </>
  )
}

export default Contact