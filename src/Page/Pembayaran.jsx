import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Pembayaran() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showBankTransfer, setShowBankTransfer] = useState(false);

  const handlePaymentChange = (e) => {
    console.log("masukk");
    console.log(e);
    setShowBankTransfer(e);
  };

  const countries = ["Indonesia", "United States", "United Kingdom", "Canada"];

  const payments = [
    {
      id: "bca",
      label: "Bank Transfer - BCA",
      logo: ["/assets/bca_logo.png"],
    },
    { id: "bni", label: "Bank Transfer - BNI", logo: ["/assets/bni_logo.png"] },
    {
      id: "bri",
      label: "Bank Transfer - BRI",
      logo: ["/assets/bri2_logo.png"],
    },
    { id: "bsi", label: "Bank Transfer - BSI", logo: ["/assets/bsi_logo.png"] },
    {
      id: "mandiri",
      label: "Bank Transfer - Mandiri",
      logo: ["/assets/mandiri_logo.png"],
    },
    { id: "shopeepay", label: "ShopeePay", logo: ["/assets/spay_logo.png"] },
    { id: "ovo", label: "OVO", logo: ["/assets/ovo_logo.png"] },
    { id: "dana", label: "DANA", logo: ["/assets/dana_logo.png"] },
    {
      id: "directDebitBRI",
      label: "Direct Debit BRI",
      logo: ["/assets/bri_logo.png"],
    },
    {
      id: "creditCard",
      label: "Credit Card",
      logo: [
        "/assets/visa_logo.png",
        "/assets/mc_logo.png",
        "/assets/amex_logo.png",
        "/assets/JCB_logo.png",
      ],
    },
  ];

  const handlePaymentSelect = (id) => {
    setSelectedPayment(id);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-4 md:mx-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-b-2 py-10">
          <div className="">
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
                    Pembayaran
                  </a>
                </li>
              </ol>
            </nav>
            <div className="flex justify-center items-center gap-6 mt-6 lg:mt-1">
              <div className="pb-2">Belanja</div>
              <div className=" h-0.5 w-32 bg-slate-300"></div>
              <div className=" border-b-2 text-[#2D5FC2] font-semibold border-[#2D5FC2] pb-1">
                Pembayaran
              </div>
            </div>
          </div>
        </div>

        {/* Form Billing Details */}
        <div className="lg:grid lg:grid-cols-12 gap-9 my-10 ">
          <div className="lg:col-span-8 container_pembayaran rounded-md pb-6">
            <div className="mt-5">
              <div className="flex flex-col h-full">
                <div className="flex flex-row items-center p-5 border-b border-gray-200">
                  <img
                    src="/assets/pembayaran1.png"
                    alt="Billing Icon"
                    className="mr-2"
                  />
                  <p className="font-bold">Billing Details</p>
                </div>

                {/* Form */}
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                {/* name */}
                <div className="flex flex-col md:flex-row md:gap-2 px-5 py-3">
                  <div className="flex flex-col flex-grow">
                    <label
                      htmlFor="firstName"
                      className={`font-semibold text-gray-600 ${
                        errors.firstName ? "text-red-500" : ""
                      }`}
                    >
                      First Name
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      placeholder="Your First Name"
                      className={`bg-[#F0F0F0] rounded-md p-2 mt-2 ${
                        errors.firstName ? "error" : ""
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col flex-grow mt-4 md:mt-0">
                    <label
                      htmlFor="lastName"
                      className={`font-semibold text-gray-600 ${
                        errors.firstName ? "text-red-500" : ""
                      }`}
                    >
                      Last Name
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Your Last Name"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      className={`bg-[#F0F0F0] rounded-md p-2 mt-2 ${
                        errors.firstName ? "error" : ""
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                {/* country */}
                <div className="flex flex-col flex-grow mt-4 md:mt-0 px-5 py-3">
                  <label
                    htmlFor="country"
                    className={`font-semibold text-gray-600 ${
                      errors.firstName ? "text-red-500" : ""
                    }`}
                  >
                    Country / Region<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className={`bg-[#F0F0F0] rounded-md p-2 mt-2 ${
                      errors.firstName ? "error" : ""
                    }`}
                    {...register("country", {
                      required: "Country is required",
                    })}
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="text-red-500">{errors.country.message}</p>
                  )}
                </div>
                {/* Street address */}
                <div className="flex flex-col flex-grow mt-4 md:mt-0 px-5 py-3">
                  <label
                    htmlFor="address"
                    className={`font-semibold text-gray-600 ${
                      errors.firstName ? "text-red-500" : ""
                    }`}
                  >
                    Street Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="House number and street name"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    className={`bg-[#F0F0F0] rounded-md p-2 mt-2 ${
                      errors.firstName ? "error" : ""
                    }`}
                  />{" "}
                  {errors.address && (
                    <p className="text-red-500">{errors.address.message}</p>
                  )}
                </div>
                {/* Town / City */}
                <div className="flex flex-col flex-grow mt-4 md:mt-0 px-5 py-3">
                  <label
                    htmlFor="townCity"
                    className={`font-semibold text-gray-600 ${
                      errors.firstName ? "text-red-500" : ""
                    }`}
                  >
                    Town / City<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="townCity"
                    name="townCity"
                    placeholder="Your town / city name"
                    {...register("townCity", {
                      required: "Town / City is required",
                    })}
                    className={`bg-[#F0F0F0] rounded-md p-2 mt-2 ${
                      errors.firstName ? "error" : ""
                    }`}
                  />
                  {errors.townCity && (
                    <p className="text-red-500">{errors.townCity.message}</p>
                  )}
                </div>
                {/* Province*/}
                <div className="flex flex-col flex-grow mt-4 md:mt-0 px-5 py-3">
                  <label
                    htmlFor="province"
                    className={`font-semibold text-gray-600 ${
                      errors.firstName ? "text-red-500" : ""
                    }`}
                  >
                    Province
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="province"
                    name="province"
                    placeholder="Your Province"
                    {...register("province", {
                      required: "Province is required",
                    })}
                    className={`bg-[#F0F0F0] rounded-md p-2 mt-2 ${
                      errors.firstName ? "error" : ""
                    }`}
                  />{" "}
                  {errors.province && (
                    <p className="text-red-500">{errors.province.message}</p>
                  )}
                </div>
                {/* Postcode / ZIP*/}
                <div className="flex flex-col flex-grow mt-4 md:mt-0 px-5 py-3">
                  <label
                    htmlFor="postcode"
                    className={`font-semibold text-gray-600 ${
                      errors.firstName ? "text-red-500" : ""
                    }`}
                  >
                    Postcode / ZIP<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    placeholder="Your postcode / ZIP"
                    {...register("postcode", {
                      required: "Postcode is required",
                    })}
                    className={`bg-[#F0F0F0] rounded-md p-2 mt-2 ${
                      errors.firstName ? "error" : ""
                    }`}
                  />{" "}
                  {errors.postcode && (
                    <p className="text-red-500">{errors.postcode.message}</p>
                  )}
                </div>
                {/* Phone*/}
                <div className="flex flex-col flex-grow mt-4 md:mt-0 px-5 py-3">
                  <label
                    htmlFor="phoneNumber"
                    className={`font-semibold text-gray-600 ${
                      errors.firstName ? "text-red-500" : ""
                    }`}
                  >
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Your Phone Number"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                    })}
                    className={`bg-[#F0F0F0] rounded-md p-2 mt-2 ${
                      errors.firstName ? "error" : ""
                    }`}
                  />{" "}
                  {errors.phoneNumber && (
                    <p className="text-red-500">{errors.phoneNumber.message}</p>
                  )}
                </div>
                {/* Email*/}
                <div className="flex flex-col flex-grow mt-4 md:mt-0 px-5 py-3">
                  <label
                    htmlFor="email"
                    className={`font-semibold text-gray-600 ${
                      errors.firstName ? "text-red-500" : ""
                    }`}
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className={`bg-[#F0F0F0] rounded-md p-2 mt-2 ${
                      errors.firstName ? "error" : ""
                    }`}
                  />{" "}
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>

          {/* isi */}
          <div className="lg:col-span-4 container_pembayaran bg-[#4773CA] rounded-md h-fit">
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
                    <div className="font-medium text-[#FF0000]">
                      - Rp. 250.000
                    </div>
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
                  <Link to={`/pembayaran`}>
                            
                    <button
                      type="submit"
                      className="bg-[#4773CA] p-2 rounded-md text-white font-medium"
                    >
                      Memesan Tempat
                    </button>
                          </Link>
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
                  <img
                    src={"/assets/shield.png"}
                    alt={`coupon`}
                    className="h-8"
                  />
                  <div className="text-xs text-[#979797]">
                    Pembayaran aman dan terjamin, pengembalian mudah, dan produk
                    100% asli.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* order notes */}
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-8 container_pembayaran rounded-md pb-6">
            <div className="p-5 flex items-center">
              <input
                type="checkbox"
                id="shipToDifferentAddress"
                name="shipToDifferentAddress"
                className="mr-2"
              />
              <label
                htmlFor="shipToDifferentAddress"
                className="text-[#7A7A7A]"
              >
                Ship to a different address?
              </label>
            </div>
            <div className="pl-5 flex items-center">
              <p className="text-[#7A7A7A]">Order notes (optional)</p>
            </div>
            <div className="px-5 pt-2">
              <textarea
                id="orderNotes"
                name="orderNotes"
                rows="4"
                placeholder="Notes Details."
                className="bg-[#F0F0F0] rounded-md p-2 w-full"
              ></textarea>
            </div>
          </div>
        </div>

        {/* your order */}
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-8 container_pembayaran rounded-md pb-6 mt-12">
            <div className="p-5 flex items-center">
              <p className="text-2xl font-bold">Your Order</p>
            </div>

            {/* subtitlee */}
            <div className="flex mx-6">
              <div className="p-4 border-2 border-r-0 w-full">
                <p className="text-[#7A7A7A] font-bold">Product</p>
              </div>
              <div className="p-4 border-2 w-full">
                <p className="text-[#7A7A7A] font-bold">Subtotal</p>
              </div>
            </div>

            {/* kolom 1 */}
            <div className="flex mx-6">
              <div className="p-4 border-2 border-r-0 border-t-0 w-full">
                <p className="text-[#7A7A7A]">
                  Vinca Vovages Labuhan Bajo Private Trip 4 <br />
                  Days 3 Night  × 1
                </p>
                <p className="mt-5 text-[#7A7A7A]">
                  <span className="font-semibold">DP:</span> Rp. 2.000.0000 <br /> <span className="font-semibold">Pelunasan:</span> Rp. 2.000.0000
                </p>
              </div>
              <div className="p-4 border-2 w-full border-t-0">
                <p className="mt-7 text-[#7A7A7A]">
                  {" "}
                  Rp16.055.000
                  <br />
                  (Rp2.000.000 payable in deposit )
                </p>
              </div>
            </div>

             {/* kolom 2 */}
             <div className="flex mx-6">
              <div className="p-4 border-2 border-r-0 border-t-0 w-full">
                <p className="text-[#7A7A7A] font-semibold">
                Subtotal
                </p>
              </div>
              <div className="p-4 border-2 w-full border-t-0">
                <p className="text-[#7A7A7A] font-semibold">
                Rp. 16.055.000
                </p>
              </div>
            </div>

             {/* kolom 3 */}
             <div className="flex mx-6">
              <div className="p-4 border-2 border-t-0 w-full">
                <p className="text-[#7A7A7A] font-semibold">
                Shipping
                </p>
                <p className="text-[#7A7A7A] mt-1">
                Free shipping
                </p>
              </div>
            </div>

            {/* kolom 4 */}
            <div className="flex mx-6">
              <div className="p-4 border-2 border-r-0 border-t-0 w-full">
                <p className="text-[#7A7A7A] font-bold">
                Total
                </p>
              </div>
              <div className="p-4 border-2 w-full border-t-0">
                <p className="font-semibold">
                Rp. 16.055.000
                </p>
              </div>
            </div>

            {/* kolom 5 */}
            <div className="flex mx-6">
              <div className="p-4 border-2 border-r-0 border-t-0 w-full">
                <p className="text-[#7A7A7A] font-bold">
                DP
                </p>
              </div>
              <div className="p-4 border-2 w-full border-t-0">
                <p className="font-semibold">
                Rp. 2.000.000
                </p>
              </div>
            </div>

            {/* kolom 6 */}
            <div className="flex mx-6">
              <div className="p-4 border-2 border-r-0 border-t-0 w-full">
                <p className="text-[#7A7A7A] font-bold">
                Pelunasan
                </p>
              </div>
              <div className="p-4 border-2 w-full border-t-0">
                <p className="font-semibold">
                Rp. 14.055.000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Method */}
        <div className="lg:grid lg:grid-cols-12 my-20">
          <div className="lg:col-span-8 p-6 container_pembayaran">
            {payments.map((payment, index) => (
              <>
                <div
                  key={payment.id}
                  className={`flex justify-between p-4 border-2 ${
                    index !== 0 ? "border-t-0" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id={`payment-${index}`}
                      name="paymentOption"
                      value={payment.value}
                      className="mr-2"
                      onChange={(e) => handlePaymentChange(payment.id)}
                    />
                    <label htmlFor={`payment-${index}`}>{payment.label}</label>
                  </div>
                  <div className="flex">
                    {payment.logo.map((logo, logoIndex) => (
                      <img
                        key={logoIndex}
                        src={logo}
                        alt="logo"
                        className="h-5 w-12 mr-2"
                      />
                    ))}
                  </div>
                </div>
                <div
                  className={` p-4 border-l-2 border-r-2 border-b-2 bg-[#F3F3F3] ${
                    showBankTransfer == payment.id ? "" : "hidden"
                  }`}
                >
                  <div className="">
                    Pay with bank transfer{" "}
                    <span
                      style={{ fontWeight: "bold", textTransform: "uppercase" }}
                    >
                      {payment.id}
                    </span>{" "}
                    or virtual account.
                  </div>
                </div>
              </>
            ))}
            {/* remaining */}
            <div>
              <h1 className="font-light text-sm mt-3">
                By making a purchase, you agree to our{" "}
                <a
                  href="https://travelindoofficial.com/terms-and-conditions/"
                  className="text-blue-500 hover:underline font-light"
                >
                  Terms and Conditions
                </a>
              </h1>
              <h1 className="font-light text-sm mt-2">
                By using this payment method, you agree that all submitted data
                for your order will be processed by payment processor.
              </h1>
            </div>
            {/* button place order */}
            <div className="my-6 text-center pb-6">
              <button className="bg-[#4773CA] p-2 rounded-md text-white font-medium w-full">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
