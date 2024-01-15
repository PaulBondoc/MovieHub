import React, { useEffect, useState } from "react";
import { fetchTrendingPeople } from "../services/apiService";
import PeoplePoster from "./PeoplePoster";
const TrendingPeople = () => {
  const [trendingPeople, setTrendingPeople] = useState([]);

  useEffect(() => {
    const getTrendingPeople = async () => {
      const fetchedData = await fetchTrendingPeople();

      setTrendingPeople(fetchedData);
    };

    getTrendingPeople();
  }, []);

  return (
    <div className="mt-[20px]">
      <h1 className="ps-5 md:ps-10 font-medium text-[20px] text-white tracking-wide">
        Trending People
      </h1>
      <div className="flex gap-7 px-5 md:px-10 py-[20px] overflow-auto">
        {trendingPeople.map((person) => (
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

export default TrendingPeople;
