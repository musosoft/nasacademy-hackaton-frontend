import React from "react";

const Login = () => (
  <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
    <div className="shadow-lg bg-black rounded-lg p-8">
      <div className="flex justify-end mb-6">
        <button>
          <span className="mr-2">Close</span>
          <span>✕</span>
        </button>
      </div>

      <h1 className="text-center text-2xl text-green-dark">Login</h1>

      <form className="pt-6 pb-2 my-2">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" for="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="block md:flex items-center justify-between">
          <div>
            <button
              className="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded border-b-4 border-green-darkest"
              type="button"
            >
              Sign In
            </button>
          </div>

          <div className="mt-4 md:mt-0"></div>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
