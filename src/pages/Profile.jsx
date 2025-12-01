import React, { useContext, useState } from "react";
import MyContainer from "../component/MyContainer";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log("before click", isOpen);
    setIsOpen(!isOpen);
    console.log("after click", isOpen);
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <title>My Profile</title>
      <MyContainer>
        <div className="flex flex-col justify-center items-center min-h-screen space-y-6">
          <div className="avatar">
            <div className="w-24 rounded-full object-cover border-4 border-primary">
              <img src={user?.photoURL} />
            </div>
          </div>
          <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
          <p className="text-gray-600">{user?.email}</p>
          <button onClick={toggleOpen} className="btn btn-primary">
            Update Profile
          </button>
          {isOpen && (
            <form
              onSubmit={handleUpdateProfile}
              className=" fieldset space-y-6"
            >
              <div>
                <input
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="Your Name"
                  defaultValue={user?.displayName}
                />
              </div>

              <div>
                <div className="relative">
                  <input
                    name="photo"
                    type="text"
                    required
                    className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="Your Photo URL"
                    defaultValue={user?.photoURL}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn -translate-y-1/2 bg-gray-950 text-white/75 hover:text-white/95 transition"
              >
                Update
              </button>
            </form>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Profile;
