import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const { signIn,
        signInWithGoogle, facebookLogin,user,setUser} = useContext(AuthContext)



  //eemail

  const handleSignIn = async (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const pass = form.password.value
    console.log({ email, pass })
    try {
        //User Login
        const result = await signIn(email, pass)
        console.log(result)
        navigate('/')
        //   const { data } = await axios.post(
        //     `${import.meta.env.VITE_API_URL}/jwt`,
        //     {
        //       email: result?.user?.email,
        //     },
        //     { withCredentials: true }
        //   )
        //   console.log(data)
        //   navigate(from, { replace: true })
        toast.success('Sign in Successful')
    }
    catch (err) {
        console.log(err)
        toast.error(err?.message)
    }
}


///facebook
// const handleFacebookLogin=()=>{
//     facebookLogin()
//     .then(result=>setUser(result))
//    }


   const handleFacebookLogin = async () => {

    try {
        await facebookLogin()
        toast.success('Sign In Succssfully')
        navigate('/')
    }
    catch
    (err) {
        console.log(err)
        toast.error(err?.message)
    }
 


  

}
    //google sign in
    const handleGoogleSignIn = async () => {

        try {
            await signInWithGoogle()
            toast.success('Sign In Succssfully')
            navigate('/')
        }
        catch
        (err) {
            console.log(err)
            toast.error(err?.message)
        }
     


      

    }

    return (
        <div>
            <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
                <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                    <div
                        className='hidden bg-cover bg-center lg:block lg:w-3/4'
                        style={{
                            backgroundImage: `url('https://i.postimg.cc/W33H0k4w/0x0.jpg')`,
                        }}
                    ></div>

                    <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                        <div className='flex justify-center mx-auto'>
                            <img
                                className='w-auto h-7 sm:h-8'
                                src='https://i.postimg.cc/65YBXdvB/34-Wp-Ikb-Es-Tm4-Z.webp'
                                alt=''
                            />
                        </div>

                        <p className='mt-3 text-xl text-center text-gray-600 '>
                            Login Now and Be a volunteer.
                        </p>

                        <div className='flex gap-2'>
                            <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
                                <div className='px-4 py-2'>
                                    <svg className='w-6 h-6' viewBox='0 0 40 40'>
                                        <path
                                            d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                            fill='#FFC107'
                                        />
                                        <path
                                            d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                            fill='#FF3D00'
                                        />
                                        <path
                                            d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                            fill='#4CAF50'
                                        />
                                        <path
                                            d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                            fill='#1976D2'
                                        />
                                    </svg>
                                </div>

                                <span className='w-5/6 px-4 py-3 '>
                                    Google
                                </span>
                            </div>
                            <div onClick={handleFacebookLogin} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
                                <div className='px-4 py-2'>
                                    {/* <svg className='w-6 h-6' viewBox='0 0 40 40'> */}
                                    <svg className='w-6 h-6' viewBox='0 0 40 40' fill="#143685" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve" stroke="#143685"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_834_"> <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"></path> </g> </g></svg>
                                    {/* </svg> */}
                                </div>

                                <span className='w-5/6 px-4 py-3 '>
                                    FaceBook
                                </span>
                            </div>
                        </div>

                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  lg:w-1/4'></span>

                            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                                Log in with Gmail Or Facebook
                            </div>

                            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                        </div>
                        <form onSubmit={handleSignIn}>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >
                                    Email Address
                                </label>
                                <input
                                    id='LoggingEmailAddress'
                                    autoComplete='email'
                                    name='email'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='email'
                                />
                            </div>

                            <div className='mt-4'>
                                <div className='flex justify-between'>
                                    <label
                                        className='block mb-2 text-sm font-medium text-gray-600 '
                                        htmlFor='loggingPassword'
                                    >
                                        Password
                                    </label>
                                </div>

                                <input
                                    id='loggingPassword'
                                    autoComplete='current-password'
                                    name='password'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='password'
                                />
                            </div>
                            <div className='mt-6'>
                                <button
                                    type='submit'
                                    className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                                >
                                    Login In
                                </button>
                            </div>
                        </form>

                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  md:w-1/4'></span>

                            <Link
                                to='/register'
                                className='text-xs text-gray-500 uppercase  hover:underline'
                            >
                                or Sign up
                            </Link>

                            <span className='w-1/5 border-b  md:w-1/4'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login