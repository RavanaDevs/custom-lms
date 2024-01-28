import { useRef } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Register</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                ref={emailRef}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                ref={passwordRef}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                placeholder="Confirm your password"
                ref={confirmPasswordRef}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
            <div className="mt-4">
              <Link to="/login">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
