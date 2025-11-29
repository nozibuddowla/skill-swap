import React from "react";

const ProviderCard = ({ provider }) => {
  const { providerId, name, avatar, rating, bio } = provider;
  return (
    <div className="card bg-base-100 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative px-5 pt-5">
        <img
          src={avatar}
          alt="Shoes"
          className="w-48 h-48 object-cover rounded-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-black text-gray-900">{name}</h2>
        <p className="text-gray-950 font-semibold">{bio}</p>
      </div>
    </div>
  );
};

export default ProviderCard;
