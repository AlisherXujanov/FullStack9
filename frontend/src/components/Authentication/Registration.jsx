import Heading from '../common/Heading'
import "./authContent.scss"

function Registration(props) {

    function submit(e) {
        e.preventDefault();
    }
    return (
        <div className="auth-content-wrapper">
            <Heading size={2}>Registration</Heading>

            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="name">Username</label>
                    <input type="name" id="name" placeholder='Username' />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder='Password' />
                </div>
                <div className="form-control">
                    <label htmlFor="password-conf">Password confirmation</label>
                    <input type="password" id="password-conf" placeholder='Password confirmation' />
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