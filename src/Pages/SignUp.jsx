import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { firbaseContext } from "../MyContextComponents/FirebaseComponent";
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
    const {createUser}=useContext(firbaseContext)

    const nameRef = useRef(null)
    useEffect(() => {
        nameRef.current.focus();
    }, [])
    const handelRegister = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(username, email, password)
        createUser(email,password)
        .then(result=>{
            sendEmailVerification(result.user)
      
            console.log(result.user)

        })
        .catch(error=>{
            console.log(error.message)
        })

    }


    return (
        <div className="flex justify-center ">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border-[0.2px] border-gray-400-200">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handelRegister} action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Username</label>
                        <input ref={nameRef} type="text" name="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        {/* <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div> */}
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-gray-600">Sign Up</button>
                </form>


                <p className="text-xs text-center sm:px-6 dark:text-gray-600"> have an account?
                    <Link rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign In</Link>
                </p>
            </div>

        </div>
    );
};

export default SignUp;