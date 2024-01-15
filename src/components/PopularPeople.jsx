import React, { useEffect, useState } from "react";
import PeoplePoster from "./PeoplePoster";
import { fetchPopularPeople } from "../services/apiService";

const PopularPeople = () => {
  const [popularPeople, setPopularPeople] = useState([]);

  useEffect(() => {
    const getPopularPeople = async () => {
      const fetchedData = await fetchPopularPeople();
      setPopularPeople(fetchedData);
    };

    getPopularPeople();
  }, []);

  return (
    <div className="mt-[20px]">
      <h1 className="ps-5 md:ps-10 font-medium text-[20px] text-white tracking-wide">
        Popular People
      </h1>
      <div className="flex gap-7 px-5 md:px-10 py-[20px] overflow-auto">
        {popularPeople.map((person) => (
          <PeoplePoster
            key={person.id}
            poster={person.profile_path}
            title={person.name}
            releaseYear={"Popularity"}
            rating={person.popularity}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularPeople;
