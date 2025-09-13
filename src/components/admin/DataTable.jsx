import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config';

function DataTable() {
 const[user,setUser]=useState([]);
 useEffect(()=>{
  const fetchdata = async () => {
const querySnapshot = await 
getDocs(collection(db,'user_profile')) ;
const userdata =querySnapshot.docs.map((doc)=>
({
 id:doc.Id,
name :doc.name,
phone : doc.phone,
blood_group:doc.blood_group,
dob:doc.dob,
district:doc.district,
state:doc.state,
city:doc.city,
country:doc.country


}));
setUser(userdata);

  }
  fetchdata();
 })
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
            user.map((doc)=>(
              <tr key={doc.id}>
                <td className='border border-black text-center'>
                  {doc.name}
                </td>
                <td className='border border-black text-center'>
                  {doc.blood_group}
                </td>
                <td className='border border-black text-center'>
                  {doc.dob}
                </td>
                <td className='border border-black text-center'>
                  {doc.phone}
                </td>
                <td className='border border-black text-center'>
                  {doc.district+doc.city+doc.state+doc.country}
                </td>
                <td className='border border-black text-center'>
                  {doc.status}
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