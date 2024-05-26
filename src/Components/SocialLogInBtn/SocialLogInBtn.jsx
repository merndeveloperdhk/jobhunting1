import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

const SocialLogInBtn = () => {
  const handleSocialLoginButtonn = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubLogin = () => {
    const auth = getAuth();
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className=" flex justify-center gap-2 mt-2">
        <button
          onClick={handleSocialLoginButtonn}
          className=" flex items-center gap-2 text-xl ps-2 rounded-md border border-slate-200"
        >
          <FcGoogle></FcGoogle>{" "}
          <span className="bg-[#3b82f4d2] px-3 py-1 text-white">
            Google SingIn
          </span>
        </button>
        <button
          onClick={handleGithubLogin}
          className=" flex gap-2 items-center text-xl ps-2  rounded-md border border-slate-200"
        >
          <FaGithubSquare></FaGithubSquare>{" "}
          <span className="bg-slate-600 px-3 py-1 text-white">
            Github SingIn
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogInBtn;
