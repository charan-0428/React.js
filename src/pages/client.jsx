import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        position: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        mobile: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Add form submission logic here
        console.log(formData);
    };

    return (
        <div className='border w-25 mt-5 m-auto p-4 mb-5 register'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-primary text-center'>Client Sign-Up Form</h2>
            <div className='mt-3'>
                <label htmlFor="companyName">Company Name:</label><br />
                <input className='form-control' type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
            </div>
            <div className='mt-3'>
                <label htmlFor="position">Position:</label><br />
                <input className='form-control' type="text" id="position" name="position" value={formData.position} onChange={handleChange} />
            </div>
            <div className='mt-3'>
                <label htmlFor="firstName">First Name:</label><br />
                <input className='form-control'  type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className='mt-3'>
                <label htmlFor="lastName">Last Name:</label><br />
                <input className='form-control' type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className='mt-3'>
                <label htmlFor="password">Password:</label><br />
                <input className='form-control' type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div >
            <div className='mt-3'>
                <label htmlFor="confirmPassword">Confirm Password:</label><br />
                <input className='form-control' type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <div className='mt-3'>
                <label htmlFor="email">Email:</label><br />
                <input className='form-control' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className='mt-3'>
                <label htmlFor="mobile">Mobile:</label><br />
                <input className='form-control'  type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
                <div className='mt-3'><br />
                    <button type="submit" className='btn btn-primary w-100 '>Sign Up</button>
                </div>

                {error && <p className='text-danger mt-3'>{error}</p>}

                <p className='redirect text-center mt-3'>Already have an account</p>
                <div className='font-weight-bold text-center'>
                    <Link to='/Login'>Log-in</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;



