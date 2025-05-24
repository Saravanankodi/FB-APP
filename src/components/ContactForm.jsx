import React from 'react'

function ContactForm() {
  return (
    <>
    <form action="" className="contact-form max-w-xl max-h-lg p-5 rounded-2xl flex items-center justify-center gap-5 flex-col m-auto">
        <div className="w-full">
            <lable className="heading block text-lg text-border lg:text-2xl">Name</lable>
            <input type="text" className="input h-10 w-full text-lg" />
        </div>
        <div className="w-full">
            <lable className="heading block text-lg lg:text-2xl text-border">Email</lable>
            <input type="email" className="input h-10 w-full text-lg" />
        </div>
        <div className="w-full">
            <lable className="heading block text-lg lg:text-2xl text-border">Message</lable>
            <textarea name="message" id="" className='input text-sm lg:text-lg min-w-full lg:min-h-24 resize-none'></textarea>
        </div>
        <button className="btn heading text-xl lg:text-3xl m-auto rounded-2xl ">Send Now</button>
    </form>
    </>
  )
}

export default ContactForm