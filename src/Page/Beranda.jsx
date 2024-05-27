import React from "react";
import home from "/assets/home.png";
import home2 from "/assets/home2.png";
import whatsapp from "/assets/whatsapp.png";
import header1 from "/assets/header1.png";
import header2 from "/assets/header2.png";
import header3 from "/assets/header3.png";
import header4 from "/assets/header4.png";
import CarouselData from "../component/CarouselData";
import ImageGrid from "../component/ImageGrid";
import GaleriGrid from "../component/GaleriGrid";

const Beranda = () => {
  const images = [
    { src: "/assets/country1.jpg", name: "Indonesia" },
    { src: "/assets/country2.png", name: "Jepang" },
    { src: "/assets/country3.jpg", name: "China" },
    { src: "/assets/country4.png", name: "Vietnam" },
    { src: "/assets/country5.jpg", name: "Korea Selatan" },
    { src: "/assets/country6.png", name: "Thailand" },
  ];

  const galeri = [
    { src: "/assets/galeri1.png"  },
    { src: "/assets/galeri2.png"},
    { src: "/assets/galeri3.png"},
    { src: "/assets/galeri4.png" },
    { src: "/assets/galeri5.png" },
  ];


  return (
    <div className="relative">
      <div className="relative">
        <img src={home} alt="" className="aspect-[5/2] w-full object-cover" />
        <div>
          <img
            src={whatsapp}
            alt=""
            className="cursor-pointer transform transition-transform duration-300 hover:scale-110 absolute bottom-1 right-2 sm:bottom-6 sm:right-14  "
          />
        </div>
      </div>

      {/* tujuan dan tanggal */}
      <div className="flex items-center justify-center absolute w-full transform -translate-y-1/2">
        <div className="bg-white rounded-md w-8/12 px-16 py-8  shadow-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5  ">
            <div className="col-span-5 ">
              <div className="mb-2">Tujuan</div>
              <input
                type="text"
                placeholder="Cari Tujuan..."
                className="rounded-md bg-gray-200 p-2 w-full focus:outline-none "
              />
            </div>
            <div className="col-span-5 ">
              <div className="mb-2">Tanggal</div>
              <input
                type="date"
                className="rounded-md bg-gray-200 p-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-end lg:justify-center col-span-2 ">
              <button className="bg-[#4773CA] text-white md:px-7 lg:px-8 py-2 rounded-md mt-7 ml-2">
                Cari
              </button>
            </div>
          </div>
        </div>
        {/* <div className="justify-end relative left-44 bottom-11 ">
          <img
            src={whatsapp}
            alt=""
            className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
          />
        </div> */}
      </div>

      {/* kumpulam gambar */}

      <div className="mx-[17%] mt-[10%] max-[768px]:mt-[30%] max-[425px]:mt-[45%]">
        <div className="md:flex md:justify-between">
          <div>
            <div className="text-xl">Harga Spesial</div>
            <div className="text-4xl font-bold text-[#0B224E]">
              Tawaran Menarik
            </div>
          </div>
          <div className="w-[367px] text-xl  max-[425px]:mt-[5%] max-[425px]:w-[294px] max-[1440px]:w-[320px]">
            Nikmati potongan harga fantastis untuk berbagai destinasi wisata
            menarik
          </div>
        </div>
        <div className="mt-20 max-[425px]:mt-[10%] mb-5">
          <div className="md:flex md:gap-4">
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src={header1}
                alt=""
                className="w-full h-auto object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105 rounded-md"
              />
            </div>
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src={header2}
                alt=""
                className="w-full h-auto object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105 rounded-md"
              />
            </div>
            <div className="relative w-full md:w-1/3">
              <div className="mb-4 md:mb-0">
                <img
                  src={header3}
                  alt=""
                  className="w-full h-auto object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105 rounded-md"
                />
              </div>
              <div>
                <img
                  src={header4}
                  alt=""
                  className="w-full h-auto object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105 rounded-md mt-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <button className="bg-[#4773CA] text-white md:px-7 lg:px-8 py-2 rounded-md mt-7 ml-2">
            DESTINASI LAIN
          </button>
        </div>
      </div>

      <div className="relative mb-20">
        <img src={home2} alt="" className="aspect-[5/2] w-full object-cover" />
      </div>
      <div className="text-center mb-10">
        <div className="text-xl mb-5">CARI TEMPAT TERINDAH</div>
        <div className="text-4xl font-bold text-[#0B224E] mb-3">
          PAKET DESTINASI POPULER
        </div>
        <div className="text-xl mx-auto w-3/5">
          Paket wisata kami yang lengkap, mulai dari penerbangan dan akomodasi
          hingga makanan dan aktivitas, sehingga Anda dapat bersantai dan
          menikmati liburan tanpa khawatir.
        </div>
      </div>
      <div className="mx-[15%] mb-10">
        <CarouselData />
      </div>

      <div className="mr-4 text-center mb-10">
        <button className="bg-[#4773CA] text-white text-xl md:px-7 lg:px-8 py-2 rounded-md hover:opacity-85 ">
          PAKET LAIN
        </button>
      </div>

      <div className="text-center mb-10">
        <div className="text-4xl font-bold text-[#0B224E] mb-3">
          DESTINASI WISATA TERBAIK
        </div>
        <div className="text-xl mx-auto w-3/5  mt-4 font-bold text-[#4773CA]">
          Kategori Tour
        </div>
      </div>
      <div className=" mx-4 ">
        <ImageGrid images={images} />
      </div>
      <div className="mr-4 text-center my-10">
        <button className="bg-[#4773CA] text-white text-xl md:px-7 lg:px-8 py-2 rounded-md hover:opacity-85 ">
          PAKET LAIN
        </button>
      </div>
      <div className="text-center mb-20">
        <div className="text-4xl font-bold text-[#0B224E] mb-12">
          GALERI TRAVEL KAMI
        </div>
        <div className="mx-[17%]">
          <GaleriGrid images={galeri}/>
        </div>
       
      </div>

    </div>
  );
};

export default Beranda;
