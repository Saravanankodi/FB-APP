import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config';
import Input from '../base/Input'

function DataTable() {
  const [users,setUsers] = useState([]);
  const [filters,setFilters] = useState({
    blood_group:"",
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
      (filters.state === "" || user.state?.toLowerCase().includes(filters.state.toLowerCase())) &&
      (filters.district === "" || user.district?.toLowerCase().includes(filters.district.toLowerCase())) &&
      (filters.city === "" || user.city?.toLowerCase().includes(filters.city.toLowerCase())) &&
      (filters.phone === "" || user.phone?.toLowerCase().includes(filters.phone.toLowerCase())) &&
      (filters.blood_group === "" || user.blood_group?.toLowerCase().includes(filters.blood_group.toLowerCase()))      
    );
  })
  const clearFilter = ()=>{
    setFilters({
    blood_group:"",
    name:"",
    phone:"",
    country:"",
    state:"",
    district:"",
    city:""
  })
  }
  return (
    <section className='p-5'>
      <section className="w-full h-auto grid place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
     gap-5 p-5">
    <Input
      name='blood group'
      label="Blood Group"
      type="text"
      value={filters.blood_group}
      onchange={(e)=>setFilters({...filters,blood_group:e.target.value})}
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
      value={filters.state}
      onchange={(e)=>setFilters({...filters,state:e.target.value})}
      />
      <Input
      name='district'
      label="District"
      type="text"
      value={filters.district}
      onchange={(e)=>setFilters({...filters,district:e.target.value})}
      />
      <Input
      name='city'
      label="City"
      type="text"
      value={filters.city}
      onchange={(e)=>setFilters({...filters,city:e.target.value})}
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
      value={filters.phone}
      onchange={(e)=>setFilters({...filters,phone:e.target.value})}
      />
      
      <aside className="col-span-3 justify-self-end">
        <button onClick={clearFilter} className="btn-primary bg-[#0496ff] text-white rounded-md">
            Clear Filter
        </button>
      </aside>
    </section>
    <table className="w-full h-auto border border-black">
        <thead className="bg-white">
          <tr>
            <th className="border border-black heading">
              Name
            </th>
            <th className="w-fit border border-black heading">
              Blood Group
            </th>
            <th className="border border-black heading">
              DOB
            </th>
            <th className="border border-black heading">
              Phone
            </th>
            <th className="border border-black heading">
              Place
            </th>
            <th className="border border-black heading">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {filterDate.length>0 ? (
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
                  {[user.city,user.district, user.state, user.country].filter(Boolean).join(', ')}
                </td>
                <td className='border border-black text-center'>
                  {user.availability}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data </td>
            </tr>
          )}
        </tbody>
    </table>
    </section>
  )
}

export default DataTable
