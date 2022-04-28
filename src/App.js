import './App.css';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }

  const handleRegisterChange = event => {
    setRegistered(event.target.checked)
  }

  const handleFormSubmit = event => {
    if (!/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(password)){
      setError('Password should be at least 6 characters, one upper case, one lower case, one special character and one number')
      return;
    }

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then(Result => {
          const user = Result.user
          console.log(user)
        })
        .catch(error => {
          setError(error.message)
        })
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(Result => {
          const user = Result.user
          console.log(user)
          setEmail('')
          setPassword('')
        })
        .catch(error => {
          setError(error.message)
        })
    }
    event.preventDefault();
  }
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{registered ? 'Sign In' : 'Create'} your account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form onSubmit={handleFormSubmit} className="mb-0 space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-1">
                  <input onBlur={handleEmailBlur} id="email" name="email" type="email" autoComplete="email" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1">
                  <input onBlur={handlePasswordBlur} id="" name="password" type="password" autoComplete="current-password" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                  <div>
                    <p className='text-red-500'><small>{error}</small></p>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="company-size" className="block text-sm font-medium text-gray-700">Company size</label>
                <div className="mt-1">
                  <select name="company-size" id="company-size" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                    <option value="">Please select</option>
                    <option value="small">1 to 10 employees</option>
                    <option value="medium">11 to 50 employees</option>
                    <option value="large">50+ employees</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <input onChange={handleRegisterChange} id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="h-5 w-5" />
                <label htmlFor="terms-and-privacy" className="ml-2 block text-base text-gray-900"
                >Already registered?
                </label>
              </div>

              <div>
                <p className='text-red-500'><small>{error}</small></p>
              </div>

              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{registered ? 'Sign in' : 'Sign up'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
