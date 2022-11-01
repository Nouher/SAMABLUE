import React from "react";
import bg from "../assets/imgs/plana_3.jpg";

const Header = (props) => {
  return (
    <header

      class="h-[10rem] md:h-[25rem] w-full hidden"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <img
        src={bg}
        alt=""
        style={{ width:"100%" }}
        className="movement-img2"
      />
      <div class="flex items-center justify-center w-full h-full bg-white bg-opacity-20">
        <h1
          class=" absolute top-[15%] md:top-[30%] left-[50%] text-2xl font-semibold text-white uppercase lg:text-6xl mt-12"
          style={{
            transform: "translate(-50%,-50%)",
            zIndex: 2,
          }}
        >
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-300 from-blue-500 ">
            {props.title}
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
