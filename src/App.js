import './App.css';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }

  const handleFormSubmit =event => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(Result => {
      const user = Result.user
      console.log(user)
    })
    .catch(error => {
      console.error(error)
    })
    event.preventDefault();
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='border-solid border-2 border-black rounded-lg bg-gray-300 m-8 md:mx-44 md:my-20 p-20'>
        <p className='font-bold text-xl m-2'>Enter Email</p>
        <input onBlur={handleEmailBlur} className='rounded p-2 w-full' type="email" placeholder='Type your email' required/>
        <p className='font-bold text-xl m-2'>Enter Password</p>
        <input onBlur={handlePasswordBlur} className='rounded p-2 w-full' type="password" placeholder='Type your password' required/>
        <button className='bg-blue-600 hover:text-white m-4 px-6 py-2 rounded block mx-auto'>Log In</button>
      </div>
    </form>
  );
}

export default App;
