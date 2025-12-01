import React, { useContext, useState } from "react";
import MyContainer from "../component/MyContainer";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    // console.log("before click", isOpen);
    setIsOpen(!isOpen);
    // console.log("after click", isOpen);
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const photo = event.target.photo.value.trim();

    const updates = [];

    if (name && name !== user.displayName) {
      updates.push("name");
    }

    if (photo && photo !== user.photoURL) {
      updates.push("photo");
    }

    if (updates.length === 0) {
      toast.info("No changes made to update.");
      return;
    }

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });

        let message = "";
        if (updates.length === 1) {
          message = `${updates[0]} updated successfully!`;
        } else {
          message = `${updates.join(" and ")} updated successfully!`;
        }

        toast.success(message);
      })
      .catch((err) => {
        console.error(err);

        if (err.code === "auth/requires-recent-login") {
          toast.error("Please re-login to update your profile.");
        } else if (err.code === "auth/invalid-profile-update") {
          toast.error("Invalid profile update. Please check your inputs.");
        } else {
          toast.error(err.message || "Failed to update profile.");
        }
      });
  };

  return (
    <div>
      <title>My Profile</title>
      <MyContainer>
        <div className="flex flex-col justify-center items-center min-h-screen space-y-6 py-10">
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
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-purple-100 max-w-2xl mx-auto">
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
            </div>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Profile;
