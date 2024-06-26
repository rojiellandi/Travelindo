export function ContactUs() {
  return (
    <div className="relative min-h-screen">
      {/* Hubungi Kami */}
      <div className="text-center m-4 md:m-14">
        <h1 className="font-bold text-[#26355D] text-2xl">HUBUNGI KAMI</h1>
        <p className="mx-auto max-w-2xl mt-2.5 text-base">
          Selamat datang di halaman Hubungi Kami! Jika Anda memiliki pertanyaan,
          masukan, jangan ragu untuk menghubungi kami. Tim kami siap membantu
          Anda dengan segala yang Anda perlukan.
        </p>
      </div>

      {/* Background */}
      <div className="relative w-full mt-3">
        <img
          src="assets/city.png"
          alt="city"
          className="w-full lg:h-auto h-[900px]"
        />
        {/* Send Us a Message */}
        <div className="absolute top-0 left-0 w-full lg:h-full h-[70%] flex items-center md:ml-32 -mt-52">
          <h1 className="text-white text-4xl font-bold lg:ml-0 ml-10">Send Us a Message</h1>
        </div>
      </div>

      {/* Layout Form and Main Office */}
      <div className="absolute top-[300px] w-full max-w-6xl p-6 mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 md:ml-24">
        {/* Form */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <div>
              <textarea
                id="name"
                name="name"
                placeholder="Your Name"
                className="mt-1 block w-full rounded-md bg-white bg-opacity-30 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-4 pt-2 h-10"
              />
            </div>
            <div>
              <textarea
                id="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 block w-full rounded-md bg-white bg-opacity-30 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-4 pt-2 h-10"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="mt-1 block w-full h-[165px] rounded-md bg-white bg-opacity-30 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-4 pt-2"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-3xl text-white bg-white bg-opacity-30 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-[400px]"
              >
                Send a Message
              </button>
            </div>
          </form>
        </div>

        {/* Main Office Details */}
        <div className="w-full md:w-1/2 h-[110%] mt-4 md:mt-0 bg-white bg-opacity-30 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-white">Main Office</h2>
          <p className="text-base text-white">
            Travelindo Official
            <br />
            Jl. Bunga Wijaya Kesuma No.09, Padang Bulan, Kec. Medan Selayang,
            Kota Medan, Sumatera Utara 20131
          </p>
          <h2 className="text-2xl font-bold text-white mt-6">Second Office</h2>
          <p className="text-base text-white">
            Travelindo Official
            <br />
            Jl. Bunga Wijaya Kesuma No.09, Padang Bulan, Kec. Medan Selayang,
            Kota Medan, Sumatera Utara 20131
          </p>
        </div>
      </div>

      {/* temukan kami disini */}
      <div className="text-center m-4 md:m-14">
        <h1 className="font-bold text-[#26355D] text-2xl">
          TEMUKAN KAMI DISINI
        </h1>
        <p className="mx-auto mt-2.5 text-base">
          Ikuti sosial media kami di bawah ini
        </p>
        <div className="flex justify-center items-center mt-3">
          <div className="flex flex-row gap-3">
            <img
              className="w-8 h-8"
              src="/assets/tentang-kami-twitter.png"
              alt=""
            />
            <img className="w-8 h-8" src="/assets/tentang-kami-fb.png" alt="" />
            <img className="w-8 h-8" src="/assets/tentang-kami-ig.png" alt="" />
            <img
              className="w-8 h-8"
              src="/assets/tentang-kami-yt.png"
              alt=""
            />{" "}
            <img
              className="w-8 h-8"
              src="/assets/tentang-kami-tiktok.png"
              alt=""
            />{" "}
            <img className="w-8 h-8" src="/assets/tentang-kami-wa.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
