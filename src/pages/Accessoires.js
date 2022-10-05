import React from "react";
import img from "../assets/imgs/lateral_3.jpg";
import img2 from "../assets/imgs/reductor_2.jpg";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";

const Accessoires = () => {
  return (
    <>
      <Header title="ACCESSOIRES" />
      <section class="bg-white ">
        <div class="container px-6 pt-32 mx-auto">
          <div class="lg:-mx-6 lg:flex lg:items-center">
            <img
              class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={img2}
              alt="reductor_2"
            />

            <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p class="text-5xl font-semibold text-[#318CE7] ">“</p>

              <h1 class="text-2xl font-semibold text-gray-800  xl:text-4xl lg:w-96">
                ACCESSOIRES
              </h1>

              <p class="max-w-lg mt-6 text-gray-500  ">
                “ Le choix logique pour le stockage de marchandises en vrac est
                le silo. Que ce soit dans les installations de stockage ou dans
                les usines de transformation. Le nombre et la taille seront
                choisis en fonction de la capacité ou du rendement de chaque
                installation. Un silo en tant que tel n’est pas une section
                indépendante d’une installation, qu’elle soit destinée à usage
                agricole ou industriel. Il s’agit d’un composant simple, qui
                doit être équipé de divers accessoires pour devenir une section
                de l’installation et permettre ainsi un fonctionnement complet
                et sûr de l’installation. ”
              </p>

              <div class="flex items-center justify-between mt-12 lg:justify-start">
                <button class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-gray-100">
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100  lg:mx-6 hover:bg-gray-100">
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
          </div>
        </div>
      </section>
      <section class="bg-white py-24">
        <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0 pl-24">
            <h2 class="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl py-10">
              La gamme de produits SAMABLUE
            </h2>

            <p class="block  text-gray-500 ">
              La gamme de produits SAMABLUE comprend une longue liste
              d’accessoires qui peuvent être sélectionnés en fonction de la
              taille, de la portée ou de l’utilisation de l’installation. Ces
              accessoires comprennent à la fois des éléments permettant la
              conception technique de base, tels que des échelles et des
              escaliers, des plateformes ou des passerelles et des ponts, qui
              sont conçus pour l’installation de systèmes de mécanisation et de
              convoyeurs, y compris ceux à haute capacité et à usage intensif
              (tous conformes aux normes internationales de sécurité au
              travail), ainsi que des éléments permettant de contrôler
              correctement le processus de stockage, depuis les détecteurs de
              niveau ou le contrôle de la température jusqu’aux éléments de
              décharge latérale du silo et aux réducteurs de vitesse pour la
              chute du grain.
            </p>
          </div>
          <div class="flex justify-center xl:w-1/2">
            <img
              class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
              src={img}
              alt="lateral_3"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Accessoires;
