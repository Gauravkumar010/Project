import React from "react";
import Register from "./Register";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

     async function onSubmit(data) {
     await new Promise((resovle) =>setTimeout(resovle, 2000) );
    console.log("submitting the form ", data);
  }

  return (
    <div id="modelConfirm">
      <section className="flex flex-col items-center pt-6">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-300">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 justify-between">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Login to your Account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Enter email
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 block w-full p-2.5"
                  placeholder="Enter your email"
                  required
                  {...register("email")}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 block w-full p-2.5"
                  required
                  {...register("password", { maxLength: 8, minLength: 6 })}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={isSubmitting} value={isSubmitting ? " Loggin..." :"Login" }
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  className="font-medium text-blue-600 hover:underline"
                  to ="/Register"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
