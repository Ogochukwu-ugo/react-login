import React from 'react';
import logo from './assests/Lovebirds Logo.png';
import Line from './line';
import {FcGoogle} from 'react-icons/fc';

function Form() {
  return (
    <section className="px-lg-5 my-auto section1">
        <img src={logo} alt="love-bird-logo" className="formLogo" />
        <h1 className="text-secondary fs-md-4 my-3">Welcome to Lovebirds</h1>
        <form className="text-start mt-5 mx-auto">
            <label htmlFor="username" className="form-label text-secondary text-opacity-50">User's name or Email</label><br />
            <input type="text" className="form-control border border-top-0 border-start-0 border-end-0 border-secondary border-opacity-25 p-1 rounded-0 text-dark" name='username' id='username' placeholder='Users name or Email ' autoComplete='username' required /><br />
            <label htmlFor="password" className="form-label text-secondary text-opacity-50">Password</label><br />
            <input type="password" className="form-control border border-top-0 border-start-0 border-end-0 border-secondary border-opacity-25 p-1 rounded-0 text-dark" name='password' id='password' placeholder='********' autoComplete='current-password' required /><br />
            <div className='text-end'>
                <a href="/" className="text-secondary text-opacity-75 text-decoration-none ">Forgot password?</a>
            </div>
            <button type='submit' className='btn btn-secondary btn-lg rounded-pill mx-auto d-block'>Sign In</button>
        </form>
        <Line/><br/>
        <div className='d-inline-flex mt-4'>
            <FcGoogle className='google mt-1 '/>
            <p className='ms-1 mt-1 googleText'>Sign in with Google</p>
        </div>
        <p className='text-secondary text-opacity-75 mt-2'>New Lovebirds? <a href="/" className='text-decoration-none text-secondary text-opacity-75 account'> Create Account</a></p>
    </section>
  );
}

export default Form;
