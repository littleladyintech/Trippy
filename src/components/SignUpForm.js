import React, { useState } from 'react';
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const [error, setError] = useState(''); // State for error messages

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account Created");
        } catch (err) {
            alert(err.message);
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='signup-container'>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <label htmlFor='email'>
                    Email:
                    <input 
                        type='email' 
                        placeholder="Enter your email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </label>

                <label htmlFor='password'>
                    Password:
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Minimum 7 characters"
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={7}
                            required
                        />
                        <span onClick={togglePasswordVisibility} className="password-toggle">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </label>

                <label htmlFor='confirm-password'>
                    Confirm Password:
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Re-enter your password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            minLength={7}
                            required
                        />
                        <span onClick={togglePasswordVisibility} className="password-toggle">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </label>

                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message if passwords don't match */}

                <button type='submit' className='reg'>Sign Up</button> <br /><br />
                <p>Already Registered? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default SignUpForm;
