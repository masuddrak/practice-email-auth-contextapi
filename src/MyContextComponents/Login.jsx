import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { firbaseContext } from "./FirebaseComponent";


const Login = () => {
    const {loginUser}=useContext(firbaseContext)
    const nameRef = useRef(null)
    useEffect(() => {
        nameRef.current.focus();
    }, [])
    const handelLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log( email, password)
        loginUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });

    }
    return (
        <div className="flex justify-center ">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl  dark:text-gray-800 border-[0.2px] border-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign In</h1>
                <form onSubmit={handelLogin} action="" className="space-y-6">
                 
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input ref={nameRef} type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        {/* <div className="flex justify-end text-xs dark:text-gray-600">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div> */}
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-gray-600">Sign In</button>
                </form>


                <p className=" text-center sm:px-6 dark:text-gray-600"> have an account?
                    <Link to="/signUp" rel="noopener noreferrer" href="#" className="underline text-green-500 ">Sign Up</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;