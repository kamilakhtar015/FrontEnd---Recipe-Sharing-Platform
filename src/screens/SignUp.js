import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function SignUp() {

  const [first, setFirst] = useState({ username: "", email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ username: first.username, email: first.email, password: first.password, role: "regular" })
    })
    const json = await response.json;
    console.log(json)

    if (json.success) {
      alert("valid Credentials")
    }

  };

  const onChange = (e) => {
    setFirst({ ...first, [e.target.name]: e.target.value },)
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">User Name</label>
            <input type="email" className="htmlForm-control" name="username" value={first.username} onChange={onChange} />
            <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
            <input type="email" className="htmlForm-control" name="email" value={first.email} onChange={onChange} />
            <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
            <input type="password" className="htmlForm-control" name="password" value={first.password} onChange={onChange} />
          </div>
          <button type="submit" className="m-3 btn btn-primary">Submit</button>
          <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
        </form>
      </div>
    </>
  );
}
