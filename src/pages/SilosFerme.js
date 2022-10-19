import React from "react";
import Header from "../components/Header";
import img from "../assets/imgs/lateral_1.jpg";
import Footer from "../components/Footer/Footer";

const SilosFerme = () => {
  return (
    <>
      <Header title="SILOS DE FERME" />
      <section class="text-gray-600 body-font md:px-24">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font  text-4xl mb-4 font-medium text-[#318CE7]">
              Les silos de ferme{"  "}
              <br class="hidden lg:inline-block" />
              SAMABLUE
            </h1>
            <p class="mb-8 leading-relaxed">
              Les silos de ferme SAMABLUE en acier ondulé ou lisse sont conçus
              pour le stockage idéal des aliments pour animaux dans les élevages
              de bétail, de volaille, de lapins et de porcs. Ils peuvent être
              conçus selon les normes américaines ASAE / ANSI ou européennes
              Eurocodes, selon le choix du client.
              <br />
              <br />
              SAMABLUE propose une large gamme de silos de ferme, de 1,8 mètres
              de diamètre à 3,5 mètres de diamètre et une capacité de stockage
              de 4 à 58 m3 par silo. Ils sont fabriqués entièrement en acier
              galvanisé et avec un revêtement galvanisé Z600 ou prélaqué vert.
            </p>
            {/* <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 mb-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <p class="mb-8 leading-relaxed text-black">
              Ils sont conçus avec un angle de cône de 62º pour permettre une
              évacuation parfaite. Les silos de ferme sont équipés de leurs
              échelles d’accès au toit correspondantes. En option, ils peuvent
              être fournis avec un système d’ouverture au sol ou de chargement
              pneumatique, des viseurs, des portes de nettoyage en cône, des
              sorties de secours et des cellules de pesage.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SilosFerme;
