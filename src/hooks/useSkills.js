import axios from "axios";
import { useEffect, useState } from "react";

const useSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios("../skill-listing-data.json")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setSkills(response.data);
        } else {
          setSkills([]);
          setError({ message: "No skills found." });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed loading skills:", err);
        setError({
          message: "Failed to load skills. Please try again later.",
        });
        setSkills([]);
        setLoading(false);
      });
  }, []);

  return {
    skills,
    loading,
    error,
  };
};

export default useSkills;
