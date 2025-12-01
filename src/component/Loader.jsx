import React from 'react';
import MyContainer from './MyContainer';
import { ClimbingBoxLoader } from 'react-spinners';

const Loader = () => {
    return (
      <div>
        <MyContainer>
          <div className="min-h-screen flex items-center justify-center">
            <ClimbingBoxLoader color="#e74c3c" />
          </div>
        </MyContainer>
      </div>
    );
};

export default Loader;