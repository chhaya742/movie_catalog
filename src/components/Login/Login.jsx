import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [userData, setUserData] = useState({ Email: "", Password: "" });
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const clickHandler = async (e) => {
        e.preventDefault();
        console.log("User Data Submitted:", userData);
        
        navigate("/");
    };

    const handleRedirect = (e) => {
        e.preventDefault();
        navigate("/signup");
    };

    return (
        <div className={styles.loginpage}>
            <form className={styles.form} onSubmit={clickHandler}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type='text' 
                        name='Email' 
                        placeholder='Enter Email' 
                        required 
                        aria-label="Enter Email" 
                        onChange={inputHandler} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type='password' 
                        name='Password' 
                        placeholder='Enter Password' 
                        required 
                        aria-label="Enter Password" 
                        onChange={inputHandler} 
                    />
                </div>
                <div className={styles.buttonGroup}>
                    <button type="button" className={styles.signupButton} onClick={handleRedirect}>Signup</button>
                    <button type="submit" className={styles.loginButton}>Login</button>
                </div>
            </form>
        </div>
    );
};
