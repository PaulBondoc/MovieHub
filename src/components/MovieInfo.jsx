import React from "react";

const MovieInfo = (props) => {
  const movieInfo = {
    status: { label: "Status", value: props.status },
    date: { label: "Release Date", value: props.date },
    language: {
      label: "Language",
      value: props.language,
    },
    budget: {
      label: "Budget",
      value: `$${props.budget ? formatNumberWithCommas(props.budget) : "N/A"}`,
    },
    revenue: {
      label: "Revenue",
      value: `$${
        props.revenue ? formatNumberWithCommas(props.revenue) : "N/A"
      }`,
    },
    popularity: { label: "Popularity", value: props.popularity },
    rating: { label: "Rating", value: props.rating },
  };

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="px-5 md:px-10 relative z-[11]">
      <div className="w-full py-3 px-5 text-white bg-background shadow-lg rounded-[5px] flex flex-wrap justify-between sm:justify-start items-center gap-y-7 gap-x-14 lg:gap-20">
        {Object.entries(movieInfo).map(([key, { label, value }]) => (
          <p
            key={key}
            className="text-[14px] font-medium flex flex-col text-[#444]"
          >
            {label}{" "}
            <span className="text-white text-[15px] font-semibold">
              {value}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default MovieInfo;
