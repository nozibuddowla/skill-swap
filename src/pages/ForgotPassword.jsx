import React, { useContext } from "react";
import MyContainer from "../component/MyContainer";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const ForgotPassword = () => {
  const { email } = useParams();
  const { passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    // console.log("forget pass button clicked");

    const email = e.target.email.value.trim();

    passwordReset(email)
      .then(() => {
        window.open("https://mail.google.com/", "_blank");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <title>Forgot Password</title>
      <MyContainer>
        <div className="min-h-screen flex items-center justify-center py-12">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Reset Your Password
            </h3>

            <form onSubmit={handleReset} className="fieldset space-y-5">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  defaultValue={email}
                  required
                  className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg px-4 py-2.5 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default ForgotPassword;
