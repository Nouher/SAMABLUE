import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
  HomeIcon,
  DatabaseIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import lg from "../../assets/icons/samablueg.svg";

const Recrutement = [
  {
    name: "La logistique",
    description: "",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
////////////////////
const services = [
  {
    name: "La logistique",
    description: "",
    href: "Logistique",
    icon: ShieldCheckIcon,
  },
  {
    name: "le montage",
    description: "",
    href: "Montage",
    icon: CursorClickIcon,
  },
  {
    name: "le bureau d'études",
    description: "",
    href: "BureauEtudes",
    icon: HomeIcon,
  },
];
///////////////////////////
const stockage = [
  {
    name: "Silos à fond plat",
    description: "",
    href: "SilosFondPlat",
    icon: HomeIcon,
  },
  {
    name: "Silos à fond conique",
    description: "",
    href: "SilosFondConique",
    icon: CursorClickIcon,
  },
  {
    name: "Stockage Intérieur",
    description: "",
    href: "StockageInterieur",
    icon: ShieldCheckIcon,
  },
  {
    name: "Silos de Ferme",
    description: "",
    href: "SilosFerme",
    icon: ViewGridIcon,
  },
  {
    name: "Accessiores",
    description: "",
    href: "Accessoires",
    icon: RefreshIcon,
  },
  {
    name: "Réservoirs",
    description: "",
    href: "Reservoirs",
    icon: RefreshIcon,
  },
];
///////////////////////////////
const Manutention = [
  {
    name: "La manutention à grains fixe",
    description: "",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Le convoyeur à chaine",
    description: "",
    href: "#",
    icon: CursorClickIcon,
  },
];
///////////////////////////////
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  window.addEventListener("scroll", () => {
    document
      .getElementById("submenu")
      .classList.toggle("submenutransform", window.scrollY > 1);
  });

  return (
    <Popover
      className="fixed w-full bg-[rgba(255,255,255,.8)] md:bg-white h-[12vh] z-50 "
      style={{
        boxShadow:
          "inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 / 7%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="mr-10 flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src={lg} alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6 " aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="/"
              className="text-base font-medium text-gray-500 hover:text-[#318CE7] "
              style={{ fontSize: 15 }}
            >
              ACCUEIL
            </a>
            <a
              href="/News"
              className="text-base font-medium text-gray-500 hover:text-[#318CE7]"
              style={{ fontSize: 15 }}
            >
              NOUVELLES
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white  rounded-md inline-flex items-center text-base font-medium hover:text-[#318CE7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:[#318CE7]"
                    )}
                  >
                    <span style={{ fontSize: 15 }}>RECRUTEMENT</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-[#318CE7]"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {Recrutement.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-[#318CE7]"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="/About"
              className="text-base font-medium text-gray-500 hover:text-[#318CE7]"
              style={{ fontSize: 15 }}
            >
              À PROPOS DE NOUS
            </a>
            <a
              href="/Gallery"
              className="text-base font-medium text-gray-500 hover:text-[#318CE7]"
              style={{ fontSize: 15 }}
            >
              GALERIE
            </a>
            <a
              href="/Contact"
              className="text-base font-medium text-gray-500 hover:text-[#318CE7]"
              style={{ fontSize: 15 }}
            >
              CONTACTEZ NOUS
            </a>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact US
            </a> */}
            <a
              href="http://wa.me/+212600846002"
              target="_blank"
              rel="noreferrer"
              className="btn-contact bg-[#318CE7] text-[#fff] hover:bg-blue-500  ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium "
            >
              <span>Contact US</span>
              <svg
                className="text-white ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* SubMenu */}

      {/* Stockage */}
      <div>
        <div
          id="submenu"
          className="bg-[rgba(255,255,255,.8)] h-10 hidden md:flex justify-center md:justify-end items-center mt-[0px] gap-5 p-6 fixed right-[100px] top-[140px] rounded-md"
        >
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-600",
                    "group bg-white  rounded-md inline-flex items-center text-base font-medium hover:text-[#318CE7] focus:text-[#318CE7] bg-transparent"
                  )}
                >
                  <span style={{ fontSize: 15, display: "flex" }}>
                    <DatabaseIcon className="h-5 w-5 mr-2" /> Stockage
                  </span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-600" : "text-gray-400",
                      "ml-2 h-5 w-5 group-hover:text-[#318CE7] "
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {stockage.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-[#318CE7]"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {item.name}
                              </p>
                              {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {/* Manutention*/}

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-600",
                    "group bg-white  rounded-md inline-flex items-center text-base font-medium hover:text-[#318CE7] focus:text-[#318CE7] bg-transparent"
                  )}
                >
                  <span style={{ fontSize: 15, display: "flex" }}>
                    <RefreshIcon className="h-5 w-5 mr-2" />
                    Manutention
                  </span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-500" : "text-gray-400",
                      "ml-2 h-5 w-5 group-hover:text-[#318CE7]"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {Manutention.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-[#318CE7]"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {item.name}
                              </p>
                              {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {/* Service */}

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-600 ",
                    "group bg-white  rounded-md inline-flex items-center text-base font-medium hover:text-[#318CE7] focus:text-[#318CE7] bg-transparent"
                  )}
                >
                  <span style={{ fontSize: 15, display: "flex" }}>
                    <CollectionIcon className="h-5 w-5 mr-2" />
                    Service
                  </span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-500" : "text-gray-400",
                      "ml-2 h-5 w-5 group-hover:text-[#318CE7]"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {services.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-[#318CE7]"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {item.name}
                              </p>
                              {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        >
          <div className=" rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={lg} alt="samablue logo" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 "
                >
                  ACCUEIL
                </a>

                <a
                  href="/NOUVELLES"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 "
                >
                  NOUVELLES
                </a>
                <a
                  href="/about"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 "
                >
                  À PROPOS DE NOUS
                </a>
                <a
                  href="/gallery"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 "
                >
                  GALERIE
                </a>
                <a
                  href="/contact"
                  className="text-base font-medium text-gray-900 hover:text-gray-700 "
                >
                  CONTACTEZ NOUS
                </a>
              </div>
              {/* <div>
                <a
                  href={() => false}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href={() => false} className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div> */}
            </div>
            <div className="mt-6 px-5 py-5">
              <nav className="grid gap-y-8">
                {services.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 "
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900 ">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
