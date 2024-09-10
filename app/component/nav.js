'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // ตรวจสอบว่ามี token ใน localStorage หรือไม่ เพื่ออัปเดตสถานะล็อกอิน
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username'); // สมมติว่าเก็บ username ไว้ใน localStorage
    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    // ลบ token ออกจาก localStorage และอัปเดตสถานะการล็อกอิน
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-between py-2 mb-4 border-bottom">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <nav className="navbar navbar-expand-md">
                <a className="navbar-brand">
                  <img src="/img/1.png" alt="" width="50" height="30" /> กินแล้วก่อนอน
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a href="/" className="nav-link px-2 link-secondary">Home</a>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" className="nav-link px-2">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Service" className="nav-link px-2">Service</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Contact" className="nav-link px-2">Contact</Link>
                    </li>
                  </ul>
                  <div className="d-flex ms-md-3">
                    {isLoggedIn ? (
                      <>
                        <span className="navbar-text me-3">Welcome, {username}</span>
                        <button onClick={handleLogout} className="btn btn-outline-danger">
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link href="/login" className="btn btn-outline-primary me-2">Login</Link>
                        <Link href="/signup" className="btn btn-primary">Sign Up</Link>
                      </>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
