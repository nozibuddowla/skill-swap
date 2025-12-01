import { Link, useParams } from "react-router";
import Loader from "../component/Loader";
import MyContainer from "../component/MyContainer";
import SkillErrorPage from "../component/SkillErrorPage";
import SkillNotFound from "../component/SkillNotFound";
import useSkills from "../hooks/useSkills";
import { BsClock } from "react-icons/bs";
import RatingDisplay from "../component/RatingDisplay";
import { BiUser } from "react-icons/bi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const SkillDetails = () => {
  const { id } = useParams();
  const { skills, loading, error } = useSkills();

  //   console.log(skills);

  // const skill = skills.find((skill) => skill.skillId === parseInt(id));

  const [skill, setSkill] = useState(null);

  useEffect(() => {
    if (!loading && Array.isArray(skills)) {
      const found = skills.find((s) => s.skillId === parseInt(id));
      setSkill(found || null);
    }
  }, [skills, loading, id]);

  //   console.log(skill, skillId);

  if (loading) {
    return <Loader />;
  }

  //   console.log(skill);

  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-purple-100 via-white to-indigo-100 flex items-center justify-center px-6 py-16">
        <MyContainer>
          <SkillErrorPage>
            {`An error occurred while fetching skill details: ${error.message}`}
          </SkillErrorPage>
        </MyContainer>
      </div>
    );
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success("Session booked successfully!");

    // Reset form
    e.target.reset();
  };

  if (!skill) {
    return <SkillNotFound />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-indigo-50 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12">
      <title>{skill.skillName}</title>
      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>

            {/* Rating Badge */}
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                <RatingDisplay value={Number(skill.rating)} size={20} />
                <span className="font-semibold text-amber-700">
                  {skill.rating}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                <BsClock className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-green-700">
                  {skill.slotsAvailable} slots
                </span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                {skill.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {skill.skillName}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-linear-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
              <p className="text-sm opacity-90 mb-1">Session Price</p>
              <p className="text-4xl font-bold">${skill.price}</p>
            </div>

            {/* Provider Info */}
            <div className="bg-white p-3 overflow-hidden rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BiUser className="w-6 h-6 text-purple-600" />
                Provider Information
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="font-medium min-w-20">Name:</span>
                  <span>{skill.providerName}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium min-w-20">Email:</span>
                  <a
                    href={`mailto:${skill.providerEmail}`}
                    className="text-primary hover:underline"
                  >
                    {skill.providerEmail}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-medium min-w-20">Skill ID:</span>
                  <span className="text-gray-500">#{skill.skillId}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Session Form */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-purple-100 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Book Your Session
            </h3>

            <p className="text-gray-600">
              Fill out the form below to reserve your spot
            </p>
          </div>

          <form onSubmit={handleSubmit} className="fieldset space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-[1.02] transition duration-200 shadow-lg"
            >
              Book Session Now
            </button>
          </form>
        </div>
      </MyContainer>
    </div>
  );
};

export default SkillDetails;
