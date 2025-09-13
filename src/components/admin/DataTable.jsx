import React from 'react'

function DataTable() {
  const data = [
    {
      id:"001",
      name:"haran",
      blood:"o+ve",
      dob:"5-10-2005",
      phone:256588622,
      place:"papanasam",
      status:"avaible"
    },
    {
      id:"001",
      name:"haran",
      blood:"o+ve",
      dob:"5-10-2005",
      phone:256588622,
      place:"papanasam",
      status:"avaible"
    },
    {
      id:"001",
      name:"haran",
      blood:"o+ve",
      dob:"5-10-2005",
      phone:256588622,
      place:"papanasam",
      status:"avaible"
    }
  ]
  return (
    <section className='p-5'>
    <table className="w-full h-auto border border-black">
        <thead className="bg-white">
          <tr>
            <th className="border border-black">
              Name
            </th>
            <th className="w-fit border border-black">
              Blood Group
            </th>
            <th className="border border-black">
              DOB
            </th>
            <th className="border border-black">
              Phone
            </th>
            <th className="border border-black">
              Place
            </th>
            <th className="border border-black">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user)=>(
              <tr key={user.id}>
                <td className='border border-black text-center'>
                  {user.name}
                </td>
                <td className='border border-black text-center'>
                  {user.blood}
                </td>
                <td className='border border-black text-center'>
                  {user.dob}
                </td>
                <td className='border border-black text-center'>
                  {user.phone}
                </td>
                <td className='border border-black text-center'>
                  {user.place}
                </td>
                <td className='border border-black text-center'>
                  {user.status}
                </td>
              </tr>
            ))
          }
        </tbody>
    </table>
    </section>
  )
}

export default DataTable