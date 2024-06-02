import React, { useState } from "react";
import { formatRupiah } from "../component/FormatRupiah";
import Counter from "../component/Counter";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline1.png",
      price: 1600000,
      rating: 4,
      qty: 1,
    },
    {
      id: 2,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline2.png",
      price: 32000000,
      rating: 4,
      qty: 1,
    },
    {
      id: 3,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline3.png",
      price: 6890000,
      rating: 4,
      qty: 1,
    },

    {
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline1.png",
      price: 16320000,
      rating: 4,
      qty: 1,
    },
    {
      id: 4,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline3.png",
      price: 6890000,
      rating: 4,
      qty: 1,
    },
  ]);
  return (
    <>
      <div className="border-b-2 py-10">
        <div className="mx-10">
          <nav aria-label="Breadcrumb" className=" px-4 sm:px-6 lg:px-8">
            <ol role="list" className="flex items-center space-x-4">
              <li className="text-sm">
                <a
                  // href={product.href}
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
                  // href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  Detail Product
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
                  // href={product.href}
                  aria-current="page"
                  className="font-bold text-black hover:text-gray-600"
                >
                  Keranjang
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex justify-center items-center gap-6 mt-6 lg:mt-1">
            <div className="border-b-2 text-[#2D5FC2] font-semibold border-[#2D5FC2] pb-1">
              Belanja
            </div>
            <div className=" h-0.5 w-32 bg-slate-300"></div>
            <div className="pb-2">Pembayaran</div>
          </div>
        </div>
      </div>
      <div className="mt-6 ml-16 md:flex gap-4 items-center text-xl font-medium lg:hidden  ">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Lanjut Belanja
      </div>
      <div className=" mt-6 mb-10 mx-16">
        <div className="lg:grid lg:grid-cols-12 gap-9">
          <div className="lg:col-span-8 shadow-container rounded-md pb-6  ">
            <div className="flex items-center justify-between border-b-2 pb-2 ">
              <div className="flex gap-4 items-center text-base font-semibold p-6">
                <div>
                  <img
                    src={"/assets/list-cart.png"}
                    alt={`list-cart`}
                    className=""
                  />
                </div>
                <div>Barang di Keranjang</div>
              </div>
              <div className="text-base font-semibold p-6">4 Barang</div>
            </div>
            <div className="p-6">
              <div className="hidden lg:inline">
                <div className="text-[#979797] font-medium grid grid-cols-12 items-center mb-6 ">
                  <div className="col-span-6 ml-60">Rincian Product</div>
                  <div className="col-span-2 ml-4"> Harga</div>
                  <div className="col-span-2 ml-4">Kuantitas</div>
                  <div className="col-span-2 ml-4">Jumlah</div>
                </div>
              </div>
              <div className="container-cart ">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="child-container border-2 rounded-lg mb-9"
                  >
                    <div className="">
                      <div className={`mb-4 lg:grid lg:grid-cols-12 `}>
                        <div className=" lg:col-span-2 md:items-center md:justify-center md:flex ">
                          <div className="p-6">
                            <img
                              src={"/assets/headline1.png"}
                              alt="detail-product"
                              className=" rounded-lg "
                            />
                          </div>
                        </div>
                        <div className="lg:col-span-4 lg:mt-6 md:mt-2 lg:ml-0 md:ml-6 font-semibold">
                          {item.description}
                        </div>
                        <div className="lg:col-span-2 lg:mt-6 md:mt-2 lg:ml-6 md:ml-6 text-[#4376FA] font-medium">
                          {formatRupiah(item.price)}{" "}
                          <span className="lg:hidden font-semibold">/item</span>
                        </div>
                        <div className="lg:col-span-2 lg:mt-6 md:mt-2 lg:ml-0 md:ml-6 ">
                          <Counter id={item.id} setProducts={setProducts} />
                        </div>
                        <div className="lg:col-span-2 lg:mt-6 md:mt-2 lg:ml-0 md:ml-6 font-medium ">
                          <span className="lg:hidden font-semibold ">
                            Total :{" "}
                          </span>
                          {formatRupiah(item.qty * item.price)}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* isi */}
          <div className="lg:col-span-4 shadow-container bg-[#4773CA] rounded-md h-fit  ">
            <div className="bg-white mt-6">
              <div className="border-b-2">
                <div className="text-center text-base font-semibold p-6">
                  Pesanan
                </div>
              </div>
              <div className="p-8  flex justify-between">
                <div className="flex items-center gap-4">
                  <img src={"/assets/coupon.png"} alt={`coupon`} className="" />
                  <div className="font-semibold text-base">Masukan Kupon</div>
                </div>
                <button className="bg-[#4773CA] p-2 rounded-md text-white font-medium">
                  Gunakan
                </button>
              </div>
              <div className="mx-6 pt-4 border-t-2 border-b-2 ">
                <div className="mx-2">
                  <div className="font-semibold text-base">
                    Rincian Harga (4 Barang)
                  </div>
                  <div className="flex justify-between text-base my-2">
                    <div className="text-[#979797]">Sub Total</div>
                    <div className="font-medium ">Rp. 16.055.000</div>
                  </div>
                  <div className="flex justify-between text-base my-2">
                    <div className="text-[#979797]">Shipping Fee</div>
                    <div className="font-medium ">Free</div>
                  </div>
                  <div className="flex justify-between text-base my-2">
                    <div className="text-[#979797]">Potongan Diskon</div>
                    <div className="font-medium text-[#FF0000]">- Rp. 250.000</div>
                  </div>
                  <div className="flex justify-between text-base my-2">
                    <div className="text-[#979797]">Kupon Diskon</div>
                    <div className="font-medium text-[#23B33A] ">Digunakan</div>
                  </div>
                  <div className="flex justify-between text-base my-2">
                    <div className="text-[#979797]">DP</div>
                    <div className="font-medium "> Rp. 2.000.000</div>
                  </div>
                  <div className="flex justify-between text-base my-2">
                    <div className="text-[#979797]">Pelunasan</div>
                    <div className="font-medium "> Rp. 14.055.000</div>
                  </div>
                </div>
              </div>
              <div className=" mx-6">
                <div className="mx-2">
                  <div className="flex justify-between text-base my-2">
                    <div className="text-[#979797]">Total Semua</div>
                    <div className="font-medium "> Rp. 16.055.000</div>
                  </div>
                  <div className="my-6 text-center pb-6">
                    <button className="bg-[#4773CA] p-2 rounded-md text-white font-medium">
                      Memesan Tempat
                    </button>
                  </div>
                </div>
              </div>
              <div className="mx-6 border-b-2 border-t-2 py-3 ">
                <div className="mx-2 text-[#23B33A] font-medium ml-6">
                  Kamu akan hemat Rp. 250.000 pada pesanan ini
                </div>
              </div>
              <div className="my-8 mx-6 pb-9">
                <div className="mx-2 flex gap-2">
                  <img src={"/assets/shield.png"} alt={`coupon`} className="" />

                  <div className="text-xs text-[#979797]">
                    Pembayaran aman dan terjamin, pengembalian mudah, dan produk
                    100% asli.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-32 ml-16 lg:flex gap-4 items-center text-xl font-medium hidden  ">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Lanjut Belanja
      </div>
    </>
  );
};

export default Cart;
