import loginHeader from '../assets/loginheader.jpg'

function Login() {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-cyan-200 to-cyan-500">
            <div className="rounded-md shadow-lg w-1/3 h-fit max-w-screen-sm bg-white">
                <img className="relative top-0 left-0 w-full h-auto rounded-t-md mb-3" src={loginHeader} alt="Login header" />
                <form className='px-7 py-3'>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Correo</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-violet-700'
                            type="email"
                            id='email'></input>
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Contraseña</label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-violet-700'
                            type="password"
                            id='password'></input>
                    </div>
                    <div className='flex justify-between items-center'>
                        <button className='rounded-md bg-purple-700 transition-colors hover:bg-purple-500 text-white font-bold py-1 px-4 focus:outline-none focus:shadow-outline'>Iniciar sesión</button>
                        <button className='rounded-md text-purple-700'>Registteararse</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login;