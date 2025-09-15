import React from 'react'
import Input from '../base/Input'

function Fillter() {
  return (
    <>
    <section className="w-full h-auto grid place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
     gap-5 p-5">
    <Input
      name='name'
      label="Name"
      type="text"
      />
      <Input
      name='name'
      label="Name"
      type="text"
      />
      <Input
      name='name'
      label="Name"
      type="text"
      />
      <Input
      name='name'
      label="Name"
      type="text"
      />
      <Input
      name='name'
      label="Name"
      type="text"
      />
      <Input
      name='name'
      label="Name"
      type="text"
      />
      <Input
      name='name'
      label="Name"
      type="text"
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