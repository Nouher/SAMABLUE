import React from "react";
import Header from "../components/Header";
import NewsItem from "../data/News.json";

const News = () => {
  return (
    <>
      <Header title="NOUVELLES" />
      <section class="bg-white">
        <div class="container px-6 py-10 mx-auto">
          {/* <div class="text-center">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
              From the blog
            </h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
              Salami mustard spice tea fridge authentic Chinese food dish salt
              tasty liquor. Sweet savory foodtruck pie.
            </p>
          </div> */}

          <div class="grid grid-cols-1 gap-12 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {NewsItem.map((item) => {
              var fullpath = "Newss/" + item.id;
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

                    {/* <div class="absolute bottom-0 flex p-3 bg-white  ">
                    <img
                      class="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div class="mx-4">
                      <h1 class="text-sm text-gray-700">Tom Hank</h1>
                      <p class="text-sm text-gray-500 ">Creative Director</p>
                    </div>
                  </div> */}
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
