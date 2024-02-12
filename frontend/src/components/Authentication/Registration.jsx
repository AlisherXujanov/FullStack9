import Heading from '../common/Heading'
import "./authContent.scss"
import { useState } from 'react'
import { toast } from 'react-toastify'

function Registration(props) {
    const [regState, setRegState] = useState({})

    function submit(e) {
        e.preventDefault();

        if (!regState.username || !regState.email || !regState.password1 || !regState.password2) {
            toast.error("Please, fill in all fields", {theme: "dark"})
            return
        } else if (!regState.password1 !== !regState.password2) {
            toast.error("Passwords do not match", {theme: "dark"})
            return
        }

        
    }

    function handleState(e) {
        const key = e.target.name
        const val = e.target.value
        setRegState({ ...regState, [key]: val })
    }

    return (
        <div className="auth-content-wrapper">
            <Heading size={2}>Registration</Heading>

            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="name">Username</label>
                    <input type="name" id="name" placeholder='Username' name='username'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='Email' name='email'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder='Password' name='password1'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password-conf">Password confirmation</label>
                    <input type="password" id="password-conf" placeholder='Password confirmation' name='password2'
                        onChange={handleState}
                    />
                </div>
                <div className="form-control">
                    <button className='warning-btn'>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Registration;