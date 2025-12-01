import React, { useContext, useEffect, useState } from "react";
import MyContainer from "../component/MyContainer";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Signup = () => {
  const [show, setShow] = useState(false);
  const { user, setUser, createUser, updateUser, signInWithGoogle } =
    useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [passwordError, setPasswordError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      navigate(from);
      return;
    }
  }, [user, navigate]);

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }

    return "";
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    setPasswordError("");

    const form = event.target;
    const email = form.email.value.trim();
    const pass = form.password.value.trim();
    const name = form.name.value.trim();
    const photo = (form.photo.value || "").trim();

    const passErr = validatePassword(pass);
    if (passErr) {
      setPasswordError(passErr);
      return;
    }

    setSubmitting(true);

    createUser(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);

        updateUser({
          displayName: name || user.displayName,
          photoURL: photo || user.photoURL,
        })
          .then(() => {
            // console.log(user);
            setUser({
              ...user,
              displayName: name || user.displayName,
              photoURL: photo || user.photoURL,
            });
            toast.success("Signup successful!");
            setSubmitting(false);
          })
          .catch((err) => {
            console.error("Profile update error: ", err);
            toast.error(err.message || "Failed to update profile");
            setSubmitting(false);
          });
      })
      .catch((error) => {
        console.error("Signup error:", error);
        toast.error(error.message || "Signup failed");
        setSubmitting(false);
      });
  };

  //   console.log(user);

  const handleGoogle = () => {
    setSubmitting(true);
    signInWithGoogle()
      .then((result) => {
        const googleUser = result?.user;
        setUser(googleUser);
        toast.success("Signed in with Google");
        setSubmitting(false);
      })
      .catch((err) => {
        console.error("Google sign-in error:", err);
        toast.error(err.message || "Google sign-in failed");
        setSubmitting(false);
      });
  };

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
                  required
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
                  required
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
                  required
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
                    type={show ? "text" : "password"}
                    required
                    className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="New password"
                  />
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-950 transition"
                    aria-label={show ? "Hide password" : "Show password"}
                  >
                    {" "}
                    {show ? <IoEye /> : <IoEyeOff />}{" "}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-600 mt-2.5"> {passwordError} </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg px-4 py-2.5 bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition disabled:opacity-60"
              >
                {submitting ? "Signing up..." : "Sign Up"}
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
                onClick={handleGoogle}
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
