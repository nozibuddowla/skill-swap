import React, { useContext } from "react";
import MyContainer from "../component/MyContainer";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Signup = () => {
    const { user, setUser, createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    //   console.log("signup function entered!", {email, pass});
    const name = form.name.value;
    const photo = form.photo.value;

    createUser(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);

        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // console.log(user);
              setUser({ ...user, displayName: name, photoURL: photo });
              navigate("/")
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorCode, errorMessage);
        toast.error(errorMessage);
      });
  };

//   console.log(user);

  return (
    <div>
      <title>Sign Up</title>
      <MyContainer>
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-gray-100 py-12">
          {/* Form panel */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">
                Create a new account
              </h3>
              <p className="text-sm text-gray-500 mt-2">It's quick and easy.</p>
            </div>

            <hr className="my-4 text-base-300" />

            <form
              onSubmit={handleSignUp}
              className="fieldset space-y-5"
              noValidate
            >
              {/* Name Field */}
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="Enter your Name"
                />
              </div>

              {/* Photo URL Field */}
              <div>
                <input
                  id="photo"
                  name="photo"
                  type="text"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="Enter your Photo URL"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="Email address"
                />
              </div>

              {/* Password Field */}
              <div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="New password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                  ></button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg px-4 py-2.5 bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition disabled:opacity-60"
              >
                Sign Up
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-500 font-medium">
                  Or continue with
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Social Login Buttons */}
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                <FcGoogle size={20} />
                Google
              </button>

              {/* Sign Up Link */}
              <p className="text-sm text-center text-gray-600 mt-6">
                {" "}
                <Link
                  to="/login"
                  className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
                >
                  Already have an account?
                </Link>
              </p>
            </form>

            {/* Terms */}
            <p className="text-xs text-center text-gray-500 mt-8">
              By signing in you agree to our{" "}
              <Link to="/terms" className="underline hover:text-gray-700">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline hover:text-gray-700">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signup;
