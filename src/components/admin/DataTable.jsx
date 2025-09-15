import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_config';

function DataTable() {
  const [users,setUsers] = useState([]);
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
          {users.length>0 ? (
            users.map(user=>(
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
