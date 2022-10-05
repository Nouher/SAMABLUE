import React from "react";
import Header from "../components/Header";
import img1 from "../assets/imgs/lateral_1.jpg";
import img2 from "../assets/imgs/lateral_2.jpg";
import img3 from "../assets/imgs/lateral_3.jpg";
import Footer from "../components/Footer/Footer";

const Reservoirs = () => {
  return (
    <>
      <Header title="Réservoirs" />
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-[#318CE7]s">
                Les réservoirs SAMABLUE
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Les réservoirs SAMABLUE sont utilisés pour le stockage de
                liquides. Ils sont conçus selon les normes européennes Eurocodes
                et sont fabriqués pour supporter une utilisation continue, des
                températures extrêmes, des chutes de neige et des vents forts,
                offrant une plus grande résistance à la corrosion grâce à la
                haute galvanisation de notre acier.
              </p>
            </div>
            <div>
              <a
                href="#"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={img1}
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={img2}
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={img3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <section class="bg-white ">
        <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <p class="block max-w-6xl mt-4 text-xl text-gray-500 ">
            Ils sont entièrement fabriqués en acier galvanisé avec un choix de
            finition galvanisée ou prélaquée. Les joints de vis sont scellés
            avec des mastics étanches. Pour rendre tous les joints plus
            étanches, on leur applique une couche de peinture imperméable à base
            de ciment et de résines. Ensuite, pour leur donner une finition
            parfaite, un apprêt est appliqué sur toute la surface intérieure et
            une peinture imperméabilisante est appliquée sur tous les joints
            intérieurs.
          </p>
        </div>
      </section>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <a
            href="/"
            aria-label="View"
            className="inline-block mb-5 rounded-full sm:mx-auto"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-[#318CE7]">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          {/* <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Chase ball of string eat
          </h2> */}
          <p className="text-base text-gray-700 md:text-lg sm:px-4">
            <span className="text-[#318CE7]">SAMABLUE</span> propose une large
            gamme de réservoirs, de 2,3 mètres de diamètre à 42,8 mètres de
            diamètre et une capacité de stockage de 4 à 3 000 m3 par réservoir.
          </p>
          <hr className="w-full my-8 border-gray-300" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reservoirs;
