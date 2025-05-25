import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <>
    <section className="w-full h-auto p-5 flex flex-col sm:flex-row gap-5 items-center justify-center" id='contact'>
        <aside className="w-full sm:w-1/2 sm:p-10 flex flex-col items-center sm:items-start justify-center gap-5 ">
            <h2 className="heading text-primary w-fit text-4xl sm:text-left sm:text-5xl">
              Get in Touch
            </h2>
            <p className="tittle text-28">We are here to assist you with any inquiries.</p>

            <ul className="w-fit m-auto sm:m-0 sm:my-5 list-disc sm:list-inside">
              <li className="tittle text-base lg:text-lg sm:my-4">
                <a href="mailto:desflyer.tech@gmail.com" className="text-base">desflyer.tech@gmail.com</a>
              </li>
              <li className="tittle text-base lg:text-lg sm:my-2">
                <a href="" className="link">+91 9092579460</a>
              </li>
              <li className="tittle text-base sm:text-lg sm:my-4">
              DesFlyer ,Kings College of Engineering 
              </li>
            </ul>
        </aside>
        <main className="w-full sm:w-1/2">
            <ContactForm/>
        </main>
    </section>
    </>
  )
}

export default Contact