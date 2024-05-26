import { Link } from "react-router-dom";


const Reset = () => {
    return (
        <div className="mt-8">
            <label className="text-center block my-2 text-xl font-semibold" htmlFor="">Enter Your email for reset password: </label>
            <input className="border border-black block mx-auto w-96 py-1 px-25 mb-2 rounded-md" type="email" name="" id="" />
            <input className="px-2 py-1 bg-green-400 rounded-md mx-auto block mb-2" type="submit" value="Reset Now" />
            <Link to="/loginform"><button className="px-2 py-1 font-semibold bg-green-400 rounded-md mx-auto block hover:text-white duration-500 ">Go To Login page</button>   </Link>
        </div>
    );
};

export default Reset;