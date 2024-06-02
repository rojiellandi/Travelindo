import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import { formatRupiah } from "../component/FormatRupiah";
import { GoCircle } from "react-icons/go";
import { GiPlainCircle } from "react-icons/gi";
import whatsapp from "/assets/whatsapp.png";
import { useCounter } from "@uidotdev/usehooks";

const product = {
  name: "Basic Tee",
  price: "$35",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Jadwal", href: "#" },
    { id: 2, name: "Detail Product", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description: `
          <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
          <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
        `,
  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};

const DetailProduct = () => {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const [count, { increment, decrement, set, reset }] = useCounter(5, {
    min: 0,
    max: 100,
  });
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [breadcrumbs, setBreadcrumbs] = useState([
    { id: 1, name: "Jadwal", href: "#" },
    { id: 2, name: "Detail Product", href: "#" },
  ]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white mx-10 lg:ml-24 mt-10">
      <div className="pb-16 pt-6 sm:pb-24">
        <nav aria-label="Breadcrumb" className=" px-4 sm:px-6 lg:px-8">
          <ol role="list" className="flex items-center space-x-4">
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                Jadwal
              </a>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>

            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                Detail Product
              </a>
            </li>
          </ol>
        </nav>
        <div className=" mt-8 px-4 sm:px-6  lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            {/* tittle */}
            <div className="lg:col-span-5 lg:col-start-6  border-b-2 pb-4 border-gray-200  ">
              <div className="">
                <h1 className="text-xl font-medium text-gray-900">
                  Enjoy Tour 7 Day 6 Night 3 Countries with Acomodation
                </h1>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="ml-4 text-sm text-gray-300"
                  >
                    ·
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xl">
                {formatRupiah(16320000)}{" "}
                <span className="font-normal text-[#9095A0]">/Pax</span>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-5  lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="pr-28 ">
                <img
                  src={"/assets/headline1.png"}
                  alt="detail-product"
                  className="object-cover w-full   "
                />
              </div>
            </div>

            {/* detail */}
            <div className="mt-8 lg:col-span-5">
              <div
                onClick={() => setSelectedOption("DP")}
                className="lg:w-[50%] rounded-3xl bg-[#FFFFFF] shadow-container-2 p-6 cursor-pointer"
              >
                <div className="border-b border-gray-200 text-base lg:text-2xl pb-2 font-medium flex items-center justify-between ">
                  Bayar Uang Muka (DP)
                  {selectedOption == "DP" ? (
                    <GiPlainCircle className="w-3  mr-6 text-[#4773CA]" />
                  ) : (
                    <GoCircle className="w-3 mr-6" />
                  )}
                </div>
                <div className="text-[#4376FA] text-xs mt-2">
                  Bayar Dp untuk{" "}
                  <span className="font-bold">Rp 2.000.000 </span>/item
                </div>
              </div>
              <div
                onClick={() => setSelectedOption("lunas")}
                className="lg:w-[50%] rounded-3xl bg-[#FFFFFF] shadow-container-2 p-6 mt-4 cursor-pointer"
              >
                <div className="border-b border-gray-200 text-base lg:text-2xl pb-2 font-medium flex items-center justify-between ">
                  Bayar Lunas
                  {selectedOption == "lunas" ? (
                    <GiPlainCircle className="w-3  mr-6 text-[#4773CA]" />
                  ) : (
                    <GoCircle className="w-3 mr-6" />
                  )}
                </div>
                <div className="text-[#4376FA] text-xs mt-2">
                  Yang Harus Di Bayarkan{" "}
                  <span className="font-bold">Rp 6.890.000 </span>/item
                </div>
              </div>
              <div
                onClick={() => {}}
                className="lg:w-[50%] rounded-3xl mt-4 bg-[#46C755] shadow-container-2 p-6 hover:scale-105 cursor-pointer"
              >
                <div className="flex">
                  <img
                    src={whatsapp}
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                    className="cursor-pointer transform  transition-transform duration-300 hover:scale-110 mr-3"
                  />
                  <div>
                    <div className="text-[#f4f4f5] text-xs mt-2 flex">
                      CS-01
                      <div className="ml-2 rounded-xl bg-[#6CDD79] px-2">
                        Online
                      </div>
                      {/* <div className="ml-2 rounded-xl bg-[#dd6a5b] px-2">
                        Offline
                      </div> */}
                    </div>
                    <div className="text-base text-[#f4f4f5]  lg:text-xl pb-2 font-medium flex items-center justify-between ">
                      Hubungi Agent Kami
                    </div>
                  </div>
                </div>
              </div>

              {/* beli */}
              <div
                onClick={() => {}}
                className="lg:w-[20%] rounded-3xl mt-4 bg-[#46C755] shadow-container-2 p-6 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  {count > 0 &&(
                  <button
                    disabled={count == 0}
                    className="link"
                    onClick={decrement}
                  >
                    -
                  </button>
                  )}
                  <div className={`${count>0 ? 'mx-4 ': 'mr-4 ml-6'}`}>{count}</div>
                  <button
                    // disabled={count >= 10}
                    className="link"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
