import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [regError, setRegError] = useState(' ');
  const[success, setSuccess] = useState(' ');

  const handleRegister = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const emailValue = e.target.email.value;
    const passwordValue = e.target.password.value;
    const nameValue = e.target.name.value;
    const addressValue = e.target.address.value;
    console.log(emailValue, passwordValue, nameValue,addressValue);
    if(passwordValue.length < 6){
      setRegError("Password should be at least 6 characters or longer");
      return;
    }
    // Reset error
    setSuccess( ' ');
    setRegError( ' ');
   createUserWithEmailAndPassword(auth, emailValue, passwordValue,nameValue,addressValue)
   .then(result => {
    console.log(result.user);
    setSuccess("User created successfully")
    toast.success('account created successfully')
   })
   .catch(error => {
    console.log(error);
    setRegError(error.message)
   })
  }

  return (
    <div className="hero min-h-fit bg-base-100 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center mb-2">Register now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-yellow-100">
            
            <div   className="card-body p-4">
             <form onSubmit={handleRegister}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Vill, Thana,City, Dist, post-code"
                  className="input input-bordered"
                />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
               
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already have an account? Please <Link to='/login' className="text-blue-700">Login</Link></p>
             </form>
             {
              regError && <p className="text-red-400">{regError}</p>
             }
             {
              success && <p className="text-green-400">{success}</p>
             }
            </div >
          
           
          </div>
        </div>
      </div>
  );
};

export default Register;
