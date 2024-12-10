
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = () => {
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Perform login logic
        console.log("email:", email);
        console.log("password:", password);
    };

    return (
        <div className='border w-25 mt-5 m-auto p-4 mb-5 register'>
            <h2 className='text-primary text-center'>Log-In Form</h2>
            <div className='mt-3 '>
                <label htmlFor="">Email</label>
                <input type="email" className='form-control col-md-12' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='mt-3'>
                <label htmlFor="">Password</label>
                <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className='mt-3'>
                <button className='btn btn-primary w-100' onClick={handleLogin}>Log-in</button>
            </div>
            <p className='redirect text-center mt-3'>Create account</p>
            <div className='d-flex justify-content-between'>
                <Link to='/client'>Client Sign-up</Link>
                <Link to='/Customer'>Customer Sign-up</Link>
            </div>
        </div>
    );
};

export default Login;
