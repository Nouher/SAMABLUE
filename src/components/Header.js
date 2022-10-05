import React from "react";
import bg from "../assets/imgs/plana_techo_4.jpg";

const Header = (props) => {
  return (
    <header
      class=" h-[20rem] w-full"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div class="flex items-center justify-center w-full h-full bg-white bg-opacity-60">
        <h1 class="text-2xl font-semibold text-white uppercase lg:text-4xl mt-12">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-300 from-blue-500 ">
            {props.title}
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
