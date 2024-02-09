import Heading from '../common/Heading'
import "./authContent.scss"

function Login(props) {

    function submit(e) {
        e.preventDefault();
    }
    return (
        <div className="auth-content-wrapper">
            <Heading size={2}>Login</Heading>


            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder='Password' />
                </div>
                <div className="form-control">
                    <button className='warning-btn'>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;