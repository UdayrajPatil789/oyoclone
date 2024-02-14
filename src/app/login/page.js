import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
        <div className=" w-full absolute top-5 px-16 flex items-center text-white">
          <h2 className="text-5xl font-bold mr-5">OYO</h2>
          <p className="font-bold text-2xl">
            Hotels and homes across 800 cities ,24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center w-10/12">
          <div className="text-white">
            <p className="font-bold text-5xl text-justify">
              There a Smater way to Oyo around
            </p>
            <p className="text-2xl mt-5 text-justify">
              {" "}
              Sign up with your phone number and get exclusive discounts and
              savings on OYO stays and with our mmany travels partners .
            </p>
          </div>
          <div className=" pb-40 ml-20 w-10/12 border bg-slate-50">
            <p className="h-10 px-10 flex text-white font-bold  items-center bg-gradient-to-r from-red-300 to-red-600">
              Sign Up and & get 500 OYO Money.
            </p>
            <div className="px-10 h-60">
              <h3 className="text-2xl font-bold my-5"> Login/Signup</h3>
              <p className="font-bold mb-1">
                Please Enter your phone number to continue
              </p>
              <input
                type="text"
                placeholder="please enter your Name"
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10 "
              />
               <input
                type="email"
                placeholder="please enter your email"
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10 "
              />
               <input
                type="password"
                placeholder="please enter your password"
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10 "
              />
              <button
                type="submit"
                className="w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
              >
                {" "}
                signup
              </button>
              <p className="my-0 text-xl">
                <span>Already have an account?</span>
                <span className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer">
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
