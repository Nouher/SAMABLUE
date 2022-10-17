import React from "react";
import Header from "../components/Header";
import p1 from "../assets/imgs/teams/wassime.jpg";
import p2 from "../assets/imgs/teams/ghizlane.jpg";
import p3 from "../assets/imgs/teams/wassime.jpg";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header title="ABOUT US" />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  SAMABLUE
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  S’allie et représente les leaders des solutions de stockage de
                  céréales, de farines et autres produits industriels : "SIMEZA"
                  et CESCO", offre ainsi plus de 40 ans d'expérience dans la
                  conception, la fabrication la commercialisation,
                  l'installation, l'assistance et l'accompagnement des silos
                  galvanisés destinés au stockage de grain. L’intégration de nos
                  silos dans les plus grands projets de stockage nous conforte
                  en tant que fabricant le plus fiable et engagé du secteur.
                  Notre service technique adapté à chaque projet et notre usine
                  à la pointe de la technologie font de SAMABLUE le meilleur
                  partenaire pour vos projets de stockage.
                </p>
              </div>
              {/* <div>
                <a
                  href="/"
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
              </div> */}
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg my-20">
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src={p1}
              alt=""
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Wassime KHAOUA</p>
              <p className="mb-4 text-xs text-gray-800">CEO</p>
              <p className="text-sm tracking-wide text-gray-800">
                Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
                cuppa unhand me sir hadn't done it in donkey's years sod's law.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src={p2}
              alt=""
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Ghizlane JAIL</p>
              <p className="mb-4 text-xs text-gray-800">Chargée des projets</p>
              <p className="text-sm tracking-wide text-gray-800">
                Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
                cuppa unhand me sir hadn't done it in donkey's years sod's law.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src={p3}
              alt=""
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Wassime Khaoua</p>
              <p className="mb-4 text-xs text-gray-800">CEO</p>
              <p className="text-sm tracking-wide text-gray-800">
                Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
                cuppa unhand me sir hadn't done it in donkey's years sod's law.
              </p>
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
