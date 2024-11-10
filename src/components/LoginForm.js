import React, { useState } from 'react'; 
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";  // Make sure this is correctly configured
import { signInWithEmailAndPassword } from "firebase/auth";  
import { FaEye, FaEyeSlash } from "react-icons/fa";  // Importing eye icons

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successfully");
        } catch (err) {
            alert(err);
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='signup-container'>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor='email'>
                    Email:
                    <input 
                        type='text' 
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
                            minLength={7}  // Password must be at least 7 characters
                            required
                        />
                        <span onClick={togglePasswordVisibility} className="password-toggle">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}  {/* Eye icon toggling */}
                        </span>
                    </div>
                </label>

                <button type='submit' className='reg'>Login</button> <br/><br/>
                <p>Don't Have an Account <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    );
};

export default LoginForm;
