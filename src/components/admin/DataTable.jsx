import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config';
import Input from '../base/Input'

function DataTable() {
  const [users,setUsers] = useState([]);
  const [filters,setFilters] = useState({
    name:"",
    phone:"",
    country:"",
    state:"",
    district:"",
    city:""
  })
  useEffect(()=>{
    const fetchData = async ()=>{
      const querySnapshot = await getDocs(collection(db,'user_profiles'));
      const userData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      setUsers(userData);

    };
    fetchData();
  },[]);
  const filterDate = users.filter((user)=>{
    return(
      (filters.name === "" || user.name?.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.country === "" || user.country?.toLowerCase().includes(filters.country.toLowerCase())) &&
      (filters.state === "" || user.state?.toLowerCase().includes(filters.state.toLowerCase()))
    );
  })
  return (
    <section className='p-5'>
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
      value={filters.country}
      onchange={(e)=>setFilters({...filters,country:e.target.value})}
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
      value={filters.name}
      onchange={(e)=>setFilters({...filters,name:e.target.value})}
      />
      <Input
      name='phone'
      label="Phone"
      type="number"
      />
    </section>
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
          {users.length>0 ? (
            filterDate.map(user=>(
              <tr key={user.id}>
                <td className='border border-black text-center'>
                  {user.name}
                </td>
                <td className='border border-black text-center'>
                  {user.blood_group}
                </td>
                <td className='border border-black text-center'>
                  {user.dob}
                </td>
                <td className='border border-black text-center'>
                  {user.phone}
                </td>
                <td className='border border-black text-center '>
                  {[user.district, user.city, user.state, user.country].filter(Boolean).join(', ')}
                </td>
                <td className='border border-black text-center'>
                  {user.availability}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>no data</td>
            </tr>
          )}
        </tbody>
    </table>
    </section>
  )
}

export default DataTable
