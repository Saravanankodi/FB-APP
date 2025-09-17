import React, { useState } from 'react'
import Input from '../base/Input'

function Fillter() {
  // const [bloodGroup,setBloodGroup] = useState('');
  const [name,setName] = useState("");
  
  return (
    <>
    <section className="w-full h-auto grid place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
     gap-5 p-5">
    <Input
      name='blood group'
      label="Blood Group"
      type="text"
      />
      <Input
      name='country'
      label="Country"
      type="text"
      />
      <Input
      name='state'
      label="State"
      type="text"
      />
      <Input
      name='district'
      label="District"
      type="text"
      />
      <Input
      name='city'
      label="City"
      type="text"
      />
      <Input
      name='name'
      label="Name"
      type="text"
      />
      <Input
      name='phone'
      label="Phone"
      type="number"
      />
      <aside className=" col-span-3">
        <button className="btn-primary bg-[#0496ff] text-white rounded-md">
            search
        </button>
      </aside>
    </section>
    </>
  )
}

export default Fillter