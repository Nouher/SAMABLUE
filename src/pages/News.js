import React from "react";
import NewsItem from "../data/News.json";

const News = () => {
  return (
    <>
      <section class="bg-white">
        <div class="container px-6 py-10 mx-auto">
          <div class="grid grid-cols-1 gap-12 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {NewsItem.map((item) => {
              var fullpath = "/" + item.id;
              return (
                <div>
                  <div class="relative">
                    <img
                      class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={require("../assets/imgs/news/img_" +
                        item.id +
                        ".jpg")}
                      alt="news samablue"
                    />
                  </div>

                  <h1 class="mt-6 text-xl font-semibold text-gray-800 ">
                    {item.title}
                  </h1>

                  <hr class="w-32 my-6 text-blue-500" />

                  <p class="text-sm text-gray-500 ">{item.sub_description}</p>

                  <a
                    href={fullpath}
                    class="inline-block mt-4 text-gray-700 font-bold hover:text-blue-400  duration-200 hover:translate-x-3"
                  >
                    Read more
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
