import React from 'react'

function Login() {
  return (
    <>
    <section className="w-max h-auto m-auto rounded-xl border border-black p-2.5">
        <h2 className="heading text-4xl text-center">
            Login
        </h2>
        <form action="" className="w-full h-fit m-auto p-2.5">
            <main className="w-full h-[70px] flex items-center justify-center gap-3">
                <input type="number" name="number" id="num" className='input h-[40px] block mx-auto border-[#0496ff] text-xl ' placeholder='Enter Your Number' />
                <button className="btn-primary text-white bg-[#0496ff] rounded-lg">Send OTP</button>
            </main>
            <input type="number" name="number" id="num" className='input w-full h-[40px] block mx-auto border-[#0496ff] text-xl my-2 ' placeholder='Enter Your OTP' />
            <button className="btn-primary text-white bg-[#0496ff] rounded-lg block m-auto">Login</button>
        </form>
    </section>
    </>
  )
}

export default Login