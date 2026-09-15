import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerSubmit = (e) => {
        e.preventDefault();
        // ដំណើរការចុះឈ្មោះនៅទីនេះ
    };

    return (
        <div className="register-container">
            <h2>Sign Up</h2>
            <form onSubmit={registerSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
