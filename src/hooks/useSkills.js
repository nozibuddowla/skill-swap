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
        setSkills(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed loading skills:", err);
        setError(err);
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
