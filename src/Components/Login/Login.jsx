import { useState } from "react";
import app from "../../Firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate()

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        setUser(googleUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const githubUser = result.user;
        console.log(githubUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value ;
    const password = e.target.password.value;
    const logInDetails = {email, password};
    console.log(logInDetails);
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const signInUser =result.user;
      setUser(signInUser)
      console.log(signInUser);
      toast.success('Log in successfully completed.')
      navigate('/')
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  


  return (
    <div className="">
    <div className="hero min-h-fit bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <div className="text-center">
                {user && (
                  <div className="space-y-1">
                    <h2>User Name: {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img
                      className="block mx-auto rounded-lg"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <p className="py-2 md:w-2/3 text-center mx-auto">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
               <form onSubmit={handleLogin}>
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
                <div  className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                  <button  className="btn btn-primary "> Login </button>
                </div>
               </form>
                <div className="form-control mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2  my-1 gap-1">
                    <button
                      onClick={handleGoogleSingIn}
                      className="btn btn-accent "
                    >
                      {" "}
                      Google SingIn{" "}
                    </button>

                    <button
                      onClick={handleGithubSingIn}
                      className="btn btn-info "
                    >
                      {" "}
                      Github SingIn
                    </button>

                  

                    
                  </div>
                  <p>New to this site? Please <Link to='/register' className="text-blue-700">Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;
