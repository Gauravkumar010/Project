import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
  <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
    Welcome to My Company
  </h1>
  <form action="#" className="w-full flex flex-col gap-4">
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="firstName" className="text-sm text-gray-700 mr-2 font-medium">
        First Name:
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        className="w-full px-3 text-gray-900 bg-gray-50 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="lastName" className="text-sm text-gray-900 mr-2 font-medium">
        Last Name:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        className="w-full px-3 text-gray-900 bg-gray-50 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="username" className="text-sm text-gray-900 mr-2 font-medium">
        Username:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className="w-full px-3 text-gray-900 bg-gray-50 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="email" className="text-sm text-gray-900 mr-2 font-medium">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full px-3 bg-gray-50 text-gray-700 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="password" className="text-sm text-gray-700 mr-2 font-medium">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="w-full px-3 text-gray-700 bg-gray-50 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="confirmPassword" className="text-sm text-gray-700 mr-2 font-medium">
        Confirm Password:
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        className="w-full px-3 text-gray-700 bg-gray-50 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
    >
      Register
    </button>
  </form>
  <div className="mt-4 text-center">
    <span className="text-sm text-gray-500">
      Already have an account?{" "}
    </span>
    <Link to ="/Login" className="text-blue-500 hover:text-blue-600">
      Login
    </Link>
  </div>
</div>

    </div>
  )
}

export default Register