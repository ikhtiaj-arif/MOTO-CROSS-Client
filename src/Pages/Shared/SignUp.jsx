import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../Api/Auth';
import { AuthContext } from '../../Context/UserContext';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        createUser(email, password)
        .then(result => {
          const user = result.user;
          toast.success('User Created!')
          setAuthToken(user)
          // navigate
        })
        .catch(e => console.log(e))
    }


    return (
        <form onSubmit={handleCreateUser}>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
           type="email"
           name="email"
           id="email"
           placeholder="Enter Your Email Here"
           className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password"
          name="password"
          id="password"
          // required
          placeholder="*******"
           className="input input-bordered" />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">SignUp</button>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
    );
};

export default SignUp;