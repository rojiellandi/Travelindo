import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Rating } from "primereact/rating";
import { Link } from 'react-router-dom';

export default function CarouselData() {
  const [products, setProducts] = useState([
    {
      id: 1,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline1.png",
      price: 1600000,
      rating: 4,
    },
    {
      id: 2,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline2.png",
      price: 32000000,
      rating: 4,
    },
    {
      id: 3,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline3.png",
      price: 6890000,
      rating: 4,
    },

    {
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline1.png",
      price: 16320000,
      rating: 4,
    },
    {
      id: 4,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline3.png",
      price: 6890000,
      rating: 4,
    },
  ]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  function formatRupiah(angka) {
    return `Rp ${angka.toLocaleString("id-ID")}`;
  }

  const productTemplate = (product) => {
    return (
      <div key={product.id} className="group  mx-4 ">
        <div className="shadow-container rounded-md ">
          <div>
            <Link to="/products/1">
              <img
                src={`/assets/${product.image}`}
                alt=""
                className="object-cover w-full h-full hover:opacity-80"
              />
            </Link>
          </div>
          <div className="mt-4 ml-2 ">
            <div className="mb-2">
              <h3 className="text-sm font-semibold">{product.description}</h3>
            </div>
            <div className="card flex justify-content-center mb-2">
              <Rating value={product.rating} readOnly cancel={false} />
            </div>

            <div className="flex text-sm font-semibold mb-2 pb-2  justify-between">
              <div>
                <div className="text-xs mb-2 text-[#9095A0]">Mulai Dari</div>
                {formatRupiah(product.price)}{" "}
                <span className="font-normal text-[#9095A0]">/Pax</span>
              </div>
              <div className="mr-4">
                <button className="bg-[#4773CA] text-white md:px-7 lg:px-8 py-2 rounded-md hover:opacity-85 ">
                  Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <Carousel
        value={products}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        circular
      />
    </div>
  );
}
