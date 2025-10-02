import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const Login = () => {

    const {axios,setToken}=useAppContext();
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=async ()=>{
      e.preventDefault()
      try {
          const {data} = await axios.post('/api/admin/login', {email, password})
            
          if (data.success) {
              setToken(data.token)
              localStorage.setItem('token', data.token)
              axios.defaults.headers.common['Authorization'] = data.token;
          } else {
              toast.error(data.message)
          }
      } catch (error) {
          toast.error(error.message)
      }

    }

  return (
    <div class="min-h-screen flex items-center justify-center bg-white">
      <div class="w-full max-w-xs p-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div class="flex flex-col items-center justify-center">
          <h2 class="text-xl font-bold text-primary mb-2">Admin Login</h2>
          <p class="text-sm text-gray-600 text-center mb-4">
            Enter your credentials to access the admin panel
          </p>

          <form class="w-full space-y-4" onSubmit={handleSubmit} >
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input onChange={e=>setEmail(e.target.value)} value={email}
                type="email"
                placeholder="your email id"
                class="w-full border-b border-gray-300 focus:outline-none focus:border-primary py-1"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input onChange={e=>setPassword(e.target.value)} value={password}
                type="password"
                placeholder="your password"
                class="w-full border-b border-gray-300 focus:outline-none focus:border-primary py-1"
                required
              />
            </div>
            <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>


  )
}

export default Login
