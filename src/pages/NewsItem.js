import React from "react";
import Footer from "../components/Footer/Footer";

const NewsItem = (props) => {
  const object = props.object;

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36 mt-3">
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
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              {object.title}
            </h5>
            <p className="mb-6 text-gray-900">{object.description}</p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/samablue.sarl/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/samablue.ma"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={require("../assets/imgs/news/img_" +
                props.object.id +
                ".jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsItem;
