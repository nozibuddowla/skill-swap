import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError()
    return (
      <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-indigo-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl w-full flex flex-col justify-center items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    {error.status} - {error.statusText || 'An unexpected error occurred'}
          </h2>
        </div>
      </div>
    );
};

export default ErrorPage;