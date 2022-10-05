import React from "react";
import img from "../assets/imgs/plana_4.jpg";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";

const SilosFondPlat = () => {
  return (
    <>
      <Header title="SILOS À FOND PLAT" />
      <section className="text-gray-600 body-font pt-20">
        <div className="container px-5 pt-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={img}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div>
              {/* <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
                SILOS À FOND PLAT
              </h2> */}
              <p class="mb-3 font-light text-gray-500  first-line:uppercase first-line:tracking-widest first-letter:text-8xl first-letter:font-bold first-letter:text-gray-900  first-letter:mr-3 first-letter:float-left leading-8	">
                Les silos à fond plat SAMABLUE en acier ondulé sont conçus pour
                des applications agricoles, industrielles, commerciales et
                stratégiques telles que les exploitations agricoles, les
                installations d’approvisionnement, les terminaux portuaires ou
                toute usine industrielle dans la production de laquelle les
                céréales entrent avec élément, comme les moulins, les usines
                d’aliments pour animaux, les rizeries, les usines d’extraction
                d’huile et de biocarburants. Ils sont utilisés pour le stockage
                à court et à long terme des céréales, du maïs, du soja, du riz,
                des oléagineux et de toute autre matière fluide. Ils peuvent
                être conçus selon les normes américaines ASAE / ANSI ou
                européennes Eurocodes en fonction des spécifications de chaque
                projet ou selon le choix du client. Ils sont fabriqués pour
                supporter le stress exercé par une utilisation continue, les
                températures extrêmes, les chutes de neige et les vents violents
                ainsi que les charges sismiques, offrant une résistance accrue à
                la corrosion grâce à la galvanisation élevée de notre acier.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="container flex flex-col items-center px-4 pt-12 pb-6 mx-auto text-center">
          <p className="block max-w-4xl mt-4 text-xl text-gray-500 ">
            <span className="text-blue-400">SAMABLUE</span> propose une large
            gamme de silos à fond plat, de 4,6 mètres de diamètre à 30,6 mètres
            de diamètre et une capacité de stockage par silo de 80 à 18 000 m3
            par silo.
          </p>
        </div>
      </section>
      <hr class="mb-24 mx-auto w-48 h-1 bg-blue-200 rounded border-0  " />

      <Footer />
    </>
  );
};

export default SilosFondPlat;
