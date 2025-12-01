import React from "react";
import error_404 from "../assets/error-404.png";
import MyContainer from "../component/MyContainer";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-indigo-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <MyContainer>
        <div className="max-w-2xl mx-auto w-full flex flex-col justify-center items-center space-y-8">
          <img src={error_404} alt="error-404" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001931]">
            Oops, page not found!
          </h2>
          <p className="text-xl sm:text-lg text-[#627382] max-w-md mx-auto">
            The page you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white"
          >
            Go Back!
          </Link>
        </div>
      </MyContainer>
    </div>
  );
};

export default NotFoundPage;
