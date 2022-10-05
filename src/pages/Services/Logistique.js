import React from "react";
import Header from "../../components/Header";
import img from "../../assets/imgs/plana_2.jpg";
import Footer from "../../components/Footer/Footer";

const Logistique = () => {
  return (
    <>
      <Header title="LA LOGISTIQUE" />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
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
            <h5 className="mb-4 text-lg font-bold  ">
              Avec sa plateforme logistique permettant de stocker 100% de la
              marchandise à l’abri et des départs quotidiens en express,
              <span className="inline-block text-deep-purple-accent-400">
                AGRICONSULT met tout en oeuvre pour vous satisfaire
              </span>
            </h5>
            <p className="mb-6 text-gray-900">
              À chaque étape de votre installation, et afin de contribuer à son
              succès, nos équipes mettent tout en oeuvre, grâce à une logistique
              intelligente, pour votre satisfaction.
              <br />
              <br />
              <span className="text-[#318CE7]">
                ÊTRE AU PLUS PROCHE DU CLIENT POUR ENCORE MIEUX LE SATISFAIRE.
              </span>
            </p>
            <hr className="mb-5 border-gray-300" />
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Logistique;