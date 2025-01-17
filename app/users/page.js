'use client';
import Link from 'next/link'
import Navbar from '/app/component/nav';
import Footer from '/app/Footter/footter';
import { useEffect, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('http://localhost:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
 
  getUsers()
  const interval  = setInterval(getUsers, 1000);
  return () => clearInterval(interval);
}, []);

const handleDelete = async (id) => {
  //console.log('user id :', id);
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept : 'application/json',
      },
    });
    const result = await res.json();
    console.log(result);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}; //end handleDelete

  return (
    <>
  <Navbar/>
    <br /><br /><br /><br />
    <div className="container">
      <div class="card">
  <div class="card-header">
    Users List
  </div>
  <div class="card-body">
  <div className="row">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className='col-md-2 text-center'>#</th>
            <th className='col-md-4'>Firstname</th>
            <th className='col-md-4'>Lastname</th>
            <th className='col-md-1'>Eidt</th>
            <th className='col-md-1'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className='text-center'>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td><Link href={`/users/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
              <td><button className="btn btn-pill btn-danger" type="button" onClick={() => handleDelete(item.id)}><i class="fa fa-trash"></i>Del</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

    </div>
    </div>
    <br /><br />
      <Footer/>
    </>
  );
}