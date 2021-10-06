import React from 'react';
import { Link } from "react-router-dom";

const LoginScreen = ({ location }) => {

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Button has been clicked");
    }

    return (

        <div className='bg-gray-100 w-full h-screen flex align-middle pt-20 justify-center'>
            <div className='w-full max-w-lg sm:max-w-xl'>

                <form onClick={formSubmitHandler} className='h-auto w-11/12 sm:w-full mx-auto bg-white shadow-md rounded-md p-8'>

                    <div className='mb-4'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                        <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-master_blue hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Log In
                        </button>
                        <Link class="inline-block align-baseline font-bold text-sm text-master_blue hover:text-blue-400" to={ redirect ? `/register?redirect=${redirect}` : '/register' }>
                            New to SAES? Register.
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen;
