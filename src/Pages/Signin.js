import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import '././signin.css'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
const Signin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [ signInWithEmailAndPassword,userEmailAndPass,loadingEmailAndPass,errorEmailAndPass, ] = useSignInWithEmailAndPassword(auth);
    if(user){
        console.log('submitted');
    }
    if(userEmailAndPass){
        console.log("email and password submitted")
    }
    return (
        <div class="hero min-h-screen ">
            <div class=" flex-shrink-0 h-screen[80vh] bg-base-100 ">
                <div className="card-body max-w-full card-body-main my-24">
                    <h1 className='text-2xl text-gray-900 font-semibold'>Sign In</h1>
                    <p>New to AugustRain? <Link className='underline text-green-400' to='/signup'>Create an Account</Link></p>
                    <div class="form-control my-3">
                        <input type="text" placeholder="username or customer" className="input border-green-100 rounded-none" />
                    </div>
                    <div class="form-control my-3">
                        <input type="password" placeholder="password" class="input border-green-100 rounded-none" />
                        <label class="label">
                            <Link to='' className="text-green-400 label-text-alt link link-hover text-sm">Forgot password?</Link>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button onClick={() => signInWithEmailAndPassword()} class="btn btn-primary rounded-none text-white">Signin</button>
                    </div>
                    <p  className ='text-xl text-center mt-3'>or sign in with</p>
                    <div class="flex w-full">
                        <div onClick={() => signInWithGoogle()} class="flex gap-5 font-semibold text-gray-700 flex-grow text-xl border border-slate-500 rounded-none place-items-center justify-center cursor-pointer"><FaGoogle size='1.4em' color='#4285F4'/>Google</div>
                        <div class="divider  divider-horizontal">OR</div>
                        <div class="flex gap-5 font-semibold text-gray-700 flex-grow text-xl border border-slate-500 rounded-none place-items-center justify-center cursor-pointer"><FaGithub size='1.4em' color = '#171515'/>Github</div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Signin;