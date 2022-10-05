import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import img from "../assets/imgs/plana_3.jpg";
import img2 from "../assets/imgs/plana_6.jpg";

const SilosFondConique = () => {
  return (
    <>
      <Header title="SILOS À FOND CONIQUE" />
      <section class="bg-white  pt-[80px]">
        <div class="container px-6 py-16 mx-auto text-center">
          <div class="max-w-5xl mx-auto">
            {/* <h1 class="text-3xl font-bold text-gray-800  lg:text-4xl">
              SILOS À FOND CONIQUE
            </h1> */}
            <p class="mt-6 text-gray-500 ">
              Les silos à fond conique SAMABLUE en acier ondulé sont conçus pour
              des applications agricoles, industrielles, commerciales et
              stratégiques telles que les exploitations agricoles, les
              installations d’approvisionnement, les terminaux portuaires ou
              toute usine industrielle dans la production de laquelle les
              céréales entrent avec élément, comme les moulins, les usines
              d’aliments pour animaux, les rizeries, les usines d’extraction
              d’huile et de biocarburants.
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
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl ">
            Les silos à fond conique SAMABLUE
          </h1>

          <div class="flex justify-center mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-[#318CE7] rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-[#318CE7] rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-[#318CE7] rounded-full"></span>
          </div>

          <div class="flex items-start max-w-6xl mx-auto mt-16">
            <div>
              <p class="flex items-center text-center text-gray-500 lg:mx-8">
                Ils sont utilisés pour le stockage à court et à long terme des
                céréales, du maïs, du soja, du riz, des oléagineux et de toute
                autre matière fluide. Ils peuvent être conçus selon les normes
                américaines ASAE / ANSI ou européennes Eurocodes en fonction des
                spécifications de chaque appel d’offres ou selon le choix du
                client. Ils sont fabriqués pour supporter le stress exercé par
                une utilisation continue, les températures extrêmes, les chutes
                de neige et les vents violents ainsi que les charges sismiques,
                offrant une résistance accrue à la corrosion grâce à la
                galvanisation élevée de notre acier.
              </p>
            </div>

            <button class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100  hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section class="bg-white my-20">
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-2xl">
              <h1 class="text-lg font-bold tracking-wide text-gray-700 lg:text-2xl">
                <span className="text-[#318CE7]">SAMABLUE</span> propose une
                large gamme de silos à fond conique, de 3,1 mètres de diamètre à
                12,2 mètres de diamètre et une capacité de stockage de 15 à 2
                500 m3 par silo. Innovation et avantages
              </h1>

              <div class="mt-8 space-y-5">
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
                    Statique simplifiée et donc plus fiable.
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
          </div>

          <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src={img2}
              alt="glasses photo"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SilosFondConique;
