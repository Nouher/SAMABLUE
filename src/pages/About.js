import React from "react";
import Footer from "../components/Footer/Footer";
import img_1 from '../assets/imgs/about/img_1.jpeg'
import img_2 from '../assets/imgs/about/img_2.jpeg'
import img_3 from '../assets/imgs/about/img_3.jpeg'

const About = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  SAMABLUE
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                SAMABLUE s’allie aux leaders européens des solutions de stockage de céréales,  "SIMEZA" et CESCO", offre ainsi plus de 40 ans d'expérience dans la conception, la fabrication la commercialisation, l'installation, l'assistance et l'accompagnement des silos galvanisés destinés au stockage de grain.
                <br/>
                <br/>
                L’intégration de nos silos dans les plus grands projets de stockage nous conforte en tant que fabricant le plus fiable et engagé du secteur.
                <br/>
                Notre service technique adapté à chaque projet et notre usine à la pointe de la technologie font de SAMABLUE le meilleur partenaire pour vos projets de stockage au nord d'afrique.
                </p>
              </div>
             
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src={img_1}
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src={img_2}
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src={img_3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <hr class="my-4 mx-auto w-48 h-1 bg-gray-200 rounded border-0 md:my-10 " />
      </div>

      <Footer />
    </>
  );
};

export default About;
