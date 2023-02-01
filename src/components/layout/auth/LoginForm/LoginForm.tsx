import { Link } from 'react-router-dom';
import FormInput from '../../../forms/FormInput/FormInput';
import Card from '../../../ui/Card/Card';
import './LoginForm.scss';

const LoginForm = () => {

	return (
		<>
			<Card>
				<Card.Body>
					<form className='login-form'>
						<h3>Log In</h3>
						<p>
							Log in with your email address and password below to continue.
						</p>
						<FormInput
							name='email'
							type='email'
							label='Email Address'
							required={true}
						/>
						<FormInput
							name='password'
							type='password'
							label='Password'
							required={true}
						/>
						<button className='btn btn-100 btn-primary'>Log In</button>
						<p className='mt-1'>
							<Link to='forgot-password'>Forgot Password?</Link>
						</p>
					</form>
				</Card.Body>
			</Card>
			<div className='demo-logins-container'>
				<h4 className='text-primary'>Want to try the app out?</h4>
				<p>You can log in as a Demo User to test-drive the application:</p>
				<button className='btn btn-100 btn-outline-dark'>
					Login as a Demo Admin
				</button>
				<button className='btn btn-100 btn-outline-dark'>
					Login as a Demo Project Manager
				</button>
				<button className='btn btn-100 btn-outline-dark'>
					Login as a Demo Developer
				</button>
				<button className='btn btn-100 btn-outline-dark'>
					Login as a Demo Submitter
				</button>
			</div>
		</>
	);
};

export default LoginForm;
