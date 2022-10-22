import React, { useRef, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import emailjs from "emailjs-com";
import FAQ from "../components/FAQ";
import FAQ_data from "../data/FAQ.json";

const Contact = () => {
  const formRef = useRef();
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_message, setUser_message] = useState("");
  const [done, setUser_Done] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user_name && user_email && user_message) {
      emailjs
        .sendForm(
          "service_qxpfaug",
          "template_ic05imb",
          formRef.current,
          "12rogMxmwRO0juHc5"
        )
        .then(
          (result) => {
            console.log(result);
            setUser_Done(true);
            Reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const Reset = () => {
    document.getElementById("user_name").value = "";
    document.getElementById("user_email").value = "";
    document.getElementById("user_message").value = "";
  };

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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 bg-white  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
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
                id="user_name"
                name="user_name"
                value={user_name}
                onChange={(e) => {
                  setUser_name(e.target.value);
                }}
                className="w-full bg-white  rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600 ">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={user_email}
                onChange={(e) => {
                  setUser_email(e.target.value);
                }}
                className="w-full bg-white  rounded border border-gray-300  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600 ">
                Message
              </label>
              <textarea
                id="user_message"
                name="user_message"
                value={user_message}
                onChange={(e) => {
                  setUser_message(e.target.value);
                }}
                className="w-full bg-white  rounded border border-gray-300  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Envoyer
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Avez-vous une question, une suggestion ou remarque? Contactez
              notre service clientèle par téléphone, fax, courriel, lettre ou
              complétez simplement vos coordonnées au dessus. Nous nous ferrons
              un plaisir de vous répondre dès que possible.
            </p>
            {done && (
              <div
                class="mt-6 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert"
              >
                <span class="font-medium">Envoyé!</span> Merci de nous
                contacter.
              </div>
            )}
          </form>
        </div>
      </section>

      <section class="bg-white mb-20">
        <div class="container max-w-4xl px-6 py-10 mx-auto">
          <h1 class="text-5xl font-semibold text-center text-gray-800">
            FAQ's
          </h1>

          <div class="mt-12 space-y-8">
            {FAQ_data.map((item) => (
              <FAQ
                question={item.question}
                answer={item.answer}
                list={item.list}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
