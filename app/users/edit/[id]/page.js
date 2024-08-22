'use client';
import { useState, useEffect } from 'react';
import Navbar from '/app/component/nav';
import Footer from '/app/Footter/footter';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const EditForm = ({ id }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`);
        const data = await res.json();

        // Assuming the API returns an object with keys: firstname, lastname, username, and password
        setFirstName(data.firstname);
        setLastName(data.lastname);
        setUserName(data.username);
        setPassWord(data.password);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, username, password }),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <Navbar />
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            Edit Form {id}
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">FirstName</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">LastName</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard-fill"></i></span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-box-arrow-right"></i> Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditForm;
