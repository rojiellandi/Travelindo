export default function AboutUs() {
  const imageSources = [
    "/assets/tentang-kami1.png",
    "/assets/tentang-kami2.png",
    "/assets/tentang-kami3.png",
    "/assets/tentang-kami4.png",
    "/assets/tentang-kami5.png",
  ];

  const aboutSections = [
    {
      src: "/assets/tentang-kami7.png",
      title: "KEANDALAN",
      text: "Travelindo Official memiliki reputasi yang solid dan telah terbukti dapat diandalkan dalam menyediakan layanan perjalanan yang berkualitas. Mereka memiliki pengalaman yang luas dalam industri pariwisata, sehingga dapat menjamin kepuasan pelanggan.",
    },
    {
      src: "/assets/tentang-kami6.png",
      title: "KEMUDAHAN",
      text: "Travelindo Official memiliki reputasi yang solid dan telah terbukti dapat diandalkan dalam menyediakan layanan perjalanan yang berkualitas. Mereka memiliki pengalaman yang luas dalam industri pariwisata, sehingga dapat menjamin kepuasan pelanggan.",
    },
    {
      src: "/assets/tentang-kami8.png",
      title: "KEBERAGAMAN DESTINASI",
      text: "Travelindo Official memiliki reputasi yang solid dan telah terbukti dapat diandalkan dalam menyediakan layanan perjalanan yang berkualitas. Mereka memiliki pengalaman yang luas dalam industri pariwisata, sehingga dapat menjamin kepuasan pelanggan.",
    },
    {
      src: "/assets/tentang-kami9.png",
      title: "DUKUNGAN PELANGGAN",
      text: "Travelindo Official memiliki reputasi yang solid dan telah terbukti dapat diandalkan dalam menyediakan layanan perjalanan yang berkualitas. Mereka memiliki pengalaman yang luas dalam industri pariwisata, sehingga dapat menjamin kepuasan pelanggan.",
    },
  ];

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center my-10 md:my-20">
          <h1 className="text-[#0B224E] font-bold text-2xl md:text-3xl">
            TENTANG KAMI
          </h1>
          <p className="mt-4 w-11/12 md:w-10/12 text-center text-sm md:text-base">
            Travelindo Official diakui sebagai penyedia layanan tour travel
            terbaik karena reputasi terpercaya, pilihan paket tur menarik,
            layanan pelanggan yang responsif, dan beragamnya destinasi wisata
            yang ditawarkan.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {imageSources.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-32 md:w-40 lg:w-48 transform transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>

        <div className="flex flex-col justify-center items-center my-10 md:my-20">
          <h1 className="text-[#0B224E] font-bold text-2xl md:text-3xl text-center">
            KENAPA HARUS TRAVELINDO OFFICIAL?
          </h1>
          <p className="mt-2 w-11/12 md:w-10/12 text-center text-sm md:text-base font-semibold">
            Profesional, Beragam & Berpengalaman
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center my-10 px-4">
          {aboutSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center m-4 max-w-xs"
            >
              <img src={section.src} className="w-16" />
              <p className="font-bold mt-2">{section.title}</p>
              <p className="text-justify mt-3 w-full text-sm">{section.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center my-20">
          <div className="w-full md:w-5/12 h-96 rounded-2xl flex justify-center items-center">
            {/* <img src="/assets/yt.png" alt="" className="w-24 md:w-32 mx-auto" /> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="mb-9">
          <div className="flex flex-col justify-center items-center my-5 md:my-5">
            <h1 className="text-[#0B224E] font-bold text-2xl md:text-3xl">
              TEMUKAN KAMI DISINI
            </h1>
            <p className="mt-2 w-11/12 md:w-10/12 text-center text-sm md:text-base font-semibold">
              Ikuti sosial media kami di bawah ini
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex flex-row gap-3">
              <img
                className="w-8 h-8"
                src="/assets/tentang-kami-twitter.png"
                alt=""
              />
              <img
                className="w-8 h-8"
                src="/assets/tentang-kami-fb.png"
                alt=""
              />
              <img
                className="w-8 h-8"
                src="/assets/tentang-kami-ig.png"
                alt=""
              />
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
              <img
                className="w-8 h-8"
                src="/assets/tentang-kami-wa.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
