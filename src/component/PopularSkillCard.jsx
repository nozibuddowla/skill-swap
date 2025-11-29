import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router";
import RatingDisplay from "./RatingDisplay";

const PopularSkillCard = ({ skill }) => {
  const { skillId, skillName, price, rating, image } = skill;
  return (
    <div className="bg-base-100 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-500">
      <figure className="relative">
        <img
          src={image}
          alt={skillName}
          className="w-full h-56 sm:h-64 md:h-56 lg:h-48 object-cover"
          loading="lazy"
        />

        <div className="absolute top-3 right-3 bg-accent/80 text-gray-950 px-2 py-1 rounded-2xl font-semibold">
          ${price}
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </figure>

      <div className="card-body p-4 flex flex-col">
        <h3 className="text-xl font-black text-gray-900 mb-1">{skillName}</h3>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <RatingDisplay value={Number(rating)} size={16} />

            <span className=" text-gray-950 font-bold">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <Link
            to={`/skills/${skillId}`}
            className="btn btn-sm btn-outline w-full md:w-auto"
            aria-label={`View details for ${skillName}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularSkillCard;
