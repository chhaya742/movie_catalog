import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';

export const Signup = () => {
    const [userData, setUserData] = useState({ Email: "", Password: "" });
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(userData);
        navigate("/");
    };

    return (
        <div className={styles.signuppage}>
            <form className={styles.form} onSubmit={submitHandler}>
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
                    <button type="submit" className={styles.signupButton}>Signup</button>
                </div>
            </form>
        </div>
    );
};
