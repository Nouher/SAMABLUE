import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header title="CONTACTEZ NOUS" />
      <section className="text-gray-600  body-font relative ">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
            style={{
              background:
                "linear-gradient(145deg, rgba(49,140,231,1) 15%, rgba(254,207,103,1) 85%)",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.892302663771!2d-7.346205749099945!3d33.71173558060543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b11cda269911%3A0x80fc2a6a019570e2!2sLes%20Orchid%C3%A9es%203!5e0!3m2!1sen!2sma!4v1658585493058!5m2!1sen!2sma"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className="bg-white  relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900  tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  AVENUE MOHEMMED VI, LES ORCHIDÉES III, IMM D 3ÉME ÉTAGE BUREAU
                  N°10. MOHAMMEDIA
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-blue-500 leading-relaxed"
                  href="mailto: samablue@samablue.ma"
                  target="_blank"
                  rel="noreferrer"
                >
                  samablue@samablue.ma
                </a>
                <h2 className="title-font font-semibold text-gray-900  tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a
                  className="leading-relaxed"
                  href="tel: +34635062736"
                  target="_blank"
                  rel="noreferrer"
                >
                  +212 600-846 002
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900  text-2xl mb-1 font-medium title-font">
              Contactez-Nous
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600  text-sm">
              Besoin de nous contacter ? Remplissez le formulaire avec votre
              demande ou trouvez l'e-mail du service que vous souhaitez
              contacter ci-dessous.
            </p>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600 ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white  rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600 ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white  rounded border border-gray-300  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600 ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white  rounded border border-gray-300  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Envoyer
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>

      <section class="bg-white ">
        <div class="container max-w-4xl px-6 py-10 mx-auto">
          <h1 class="text-5xl font-semibold text-center text-gray-800">
            FAQ's
          </h1>

          <div class="mt-12 space-y-8">
            <div class="border-2 border-gray-100 rounded-lg ">
              <button
                class="flex items-center justify-between w-full p-8"
                onClick={() => {
                  document.getElementById("Q1").classList.toggle("hidden");
                  document.querySelector(".moin").classList.toggle("hidden");
                  document.querySelector(".plus").classList.toggle("hidden");
                  document
                    .querySelector(".icon")
                    .classList.toggle("bg-[#3B82F6]");
                  document
                    .querySelector(".icon")
                    .classList.toggle("text-[#fff]");
                }}
              >
                <h1 class="font-semibold text-gray-700 ">
                  How i can play for my appoinment ?
                </h1>

                <span class="text-gray-400 bg-gray-200 rounded-full icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 moin "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 plus hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>

              <hr class="border-gray-200 " />

              <p id="Q1" class="p-8 text-sm text-gray-500 hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab
                maxime cum laboriosam recusandae facere dolorum veniam quia
                pariatur obcaecati illo ducimus?
              </p>
            </div>

            <div class="border-2 border-gray-100 rounded-lg ">
              <button
                class="flex items-center justify-between w-full p-8"
                onClick={() => {
                  document.getElementById("Q2").classList.toggle("hidden");
                  document.querySelector(".moin-2").classList.toggle("hidden");
                  document.querySelector(".plus-2").classList.toggle("hidden");
                  document
                    .querySelector(".icon-2")
                    .classList.toggle("bg-[#3B82F6]");
                  document
                    .querySelector(".icon-2")
                    .classList.toggle("text-[#fff]");
                }}
              >
                <h1 class="font-semibold text-gray-700">
                  How i can play for my appoinment ?
                </h1>

                <span class="text-gray-400 bg-gray-200 rounded-full icon-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 moin-2 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 plus-2 hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>

              <hr class="border-gray-200 " />

              <p id="Q2" class="p-8 text-sm text-gray-500 hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab
                maxime cum laboriosam recusandae facere dolorum veniam quia
                pariatur obcaecati illo ducimus?
              </p>
            </div>

            <div class="border-2 border-gray-100 rounded-lg ">
              <button
                class="flex items-center justify-between w-full p-8"
                onClick={() => {
                  document.getElementById("Q3").classList.toggle("hidden");
                  document.querySelector(".moin-3").classList.toggle("hidden");
                  document.querySelector(".plus-3").classList.toggle("hidden");
                  document
                    .querySelector(".icon-3")
                    .classList.toggle("bg-[#3B82F6]");
                  document
                    .querySelector(".icon-3")
                    .classList.toggle("text-[#fff]");
                }}
              >
                <h1 class="font-semibold text-gray-700 ">
                  How i can play for my appoinment ?
                </h1>

                <span class="text-gray-400 bg-gray-200 rounded-full icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 moin-3 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 plus-3 hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>

              <hr class="border-gray-200 " />

              <p id="Q3" class="p-8 text-sm text-gray-500  hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab
                maxime cum laboriosam recusandae facere dolorum veniam quia
                pariatur obcaecati illo ducimus?
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
