import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <>
    <section className="w-full h-auto p-5 bg-primary flex flex-col lg:flex-row gap-5 items-center justify-center">
        <aside className="w-full lg:w-1/2 lg:p-10 flex flex-col items-center lg:items-start justify-center gap-5 ">
            <h2 className="heading w-fit text-4xl text-center lg:text-left lg:text-6xl">
                Let’s Connect! <br/> Discuss Your <br/> Software Needs
            </h2>
        </aside>
        <main className="w-full lg:w-1/2">
            <ContactForm/>
        </main>
    </section>
    </>
  )
}

export default Contact