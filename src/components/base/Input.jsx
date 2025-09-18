import React from 'react'

function Input({label,name,value,type,onchange}) {

  return (
    <>
    <div className="relative w-full h-[40px] text-lg m-auto  ">
        <input 
            type={type}
            value={value}
            name={name}
            onChange={onchange}
            className='w-full h-auto bg-transparent placeholder-transparent outline-none pt-2  border-b-2 border-black peer focus:border-[#0496ff]'
            placeholder='touer'/>
        {
            label && (
                <label htmlFor={name} className='absolute -top-1 left-0 -translate-y-1/2 heading text-black peer-focus:-top-1 peer-focus:text-[#0496ff] peer-placeholder-shown:top-1/2 transition-all'>
                    {label}
                </label>
            )
        }
    </div>
    </>
  )
}

export default Input