import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import img from "../assets/imgs/accesorios.jpg";

const StockageInterieur = () => {
  return (
    <>
      <Header title="STOCKAGE INTÉRIEUR" />
      <section class="bg-white  pt-[80px]">
        <div class="container px-6 py-16 mx-auto text-center">
          <div class="max-w-5xl mx-auto">
            {/* <h1 class="text-3xl font-bold text-gray-800  lg:text-4xl">
              SILOS À FOND CONIQUE
            </h1> */}
            <p class="mt-6 text-gray-500 ">
              <span className="text-[#318CE7] ">SAMABLUE</span> reste votre
              partenaire en cas de stockage intérieur, qu’il soit en cellule
              ronde à fond conique ou en silo à fond plat ou même un silo carré.
            </p>
          </div>

          <div class="flex justify-center mt-20">
            <img
              class="object-cover w-full h-96 rounded-xl lg:w-4/5"
              src={img}
            />
          </div>
        </div>
      </section>
      {/* section 2 */}

      <section class="bg-white ">
        <div class="container px-6 py-6 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-3xl px-64 lg:text-4xl text-[#318CE7]">
            Vous avez un bâtiment existant et vous souhaitez l'exploiter de
            façon à bénéficier d'une capacité de stockage intérieur ?
          </h1>

          <div class="flex justify-center mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-[#318CE7] rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-[#318CE7] rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-[#318CE7] rounded-full"></span>
          </div>
        </div>
      </section>

      <section class="bg-white ">
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class=" space-y-7 text-s flex items-start flex-col px-32  ">
            <p class="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="mx-2">
                Pour cela, notre équipe commerciale se déplace chez vous afin
                d’analyser les contraintes et vous offrir la solution de
                stockage intérieur la mieux adaptée à votre besoin.
              </span>
            </p>

            <p class="flex items-center -mx-2 text-gray-700 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="mx-2">
                Fondation plus simple, dalle au lieu de fondation en anneau.
              </span>
            </p>

            <p class="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="mx-2">Pas besoin de grue ni de coffrage.</span>
            </p>
            <p class="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="mx-2">Montage toujours à partir du sol.</span>
            </p>
            <p class="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="mx-2">Espace disponible sous le silo.</span>
            </p>
            <p class="flex items-center -mx-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="mx-2">
                Équipement électrique installé sous un espace fermé.
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default StockageInterieur;
