import React from "react";

const LoaderComponent = () => {
  const circleStyle =
    "w-[22px] h-[22px] bg-gradient-to-br from-[#323232] via-[#e70000] to-[#323232] rounded-full animate-bounce";
  return (
    <div className="fixed top-0 w-full h-screen bg-background z-[1000]">
      <div className="absolute top-[47%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div>
          <p className="logo tracking-wider text-[40px] text-white animate-pulse">
            MOVIE<span className="text-accent">HUB</span>
          </p>
        </div>

        {/* <div className="flex gap-2">
          <div className="w-[20px] h-[20px] rounded-full animate-bounce bg-gradient-to-br from-[#323232] via-[#e70000] to-[#323232]"></div>
        </div> */}
        <div className="flex justify-center gap-5">
          <div className={circleStyle}></div>
          <div className={circleStyle}></div>
          <div className={circleStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderComponent;
