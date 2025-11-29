import { FaStar, FaRegStar, FaStarHalfStroke } from "react-icons/fa6";

const RatingDisplay = ({ value = 0, max = 5, size = 16 }) => {
  const rounded = Math.round(value * 2) / 2;

  const stars = [];

  for (let i = 1; i <= max; i++) {
    if (rounded >= i) {
      stars.push(
        <FaStar key={i} size={size} className="text-pink-500" aria-hidden />
      );
    } else if (rounded >= i - 0.5) {
      stars.push(
        <FaStarHalfStroke
          key={i}
          size={size}
          className="text-pink-500"
          aria-hidden
        />
      );
    } else {
      stars.push(
        <FaRegStar
          key={i}
          size={size}
          className="text-pink-500 opacity-90"
          aria-hidden
        />
      );
    }
  }

  return (
    <div
      className="flex items-center gap-2"
      aria-label={`Rating: ${value} out of ${max}`}
    >
      {stars}
    </div>
  );
};

export default RatingDisplay;
