import React, { useContext, useEffect, useState } from "react";
import MyContainer from "../component/MyContainer";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { user, setUser, login, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname ?? "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      return;
    }
  }, [user, navigate, from]);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value.trim();
    const pass = form.password.value;

    if (!email || !pass) {
      toast.error("Please enter email and password");
      return;
    }

    setSubmitting(true);

    login(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        toast.success("Signup successful!");
        navigate(from, { replace: true });
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(`Login failed: ${error}`);
        toast.error(error.message || "Login failed");
        setSubmitting(false);
      });
  };

  //   console.log(user);

  const handleGoogle = () => {
    setSubmitting(true);
    signInWithGoogle()
      .then((result) => {
        const googleUser = result?.user;
        if (googleUser) setUser(googleUser);
        navigate(from, { replace: true });
        toast.success("Signed in with Google");
        navigate(from, { replace: true });
        setSubmitting(false);
      })
      .catch((err) => {
        console.error("Google sign-in error:", err);
        toast.error(err?.message || "Google sign-in failed");
        setSubmitting(false);
      });
  };

  return (
    <div>
      <title>Login</title>
      <MyContainer>
        <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-gray-100 py-12">
          {/* Form panel */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">
                Sign in to your account
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Enter your details to access your account
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className=" fieldset space-y-5"
              noValidate
            >
              {/* Email Field */}
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="you@example.com"
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
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember"
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <Link
                  to="/forgot"
                  className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
                >
                  Forgotten account?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg px-4 py-2.5 bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition disabled:opacity-60"
              >
                {submitting ? "Logging in..." : "Sign in"}
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-xl font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                <FcGoogle size={20} />
                Google
              </button>

              {/* Sign Up Link */}
              <p className="text-sm text-center text-gray-600 mt-6">
                <Link
                  to="/signup"
                  className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
                >
                  Create new account
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

export default Login;
