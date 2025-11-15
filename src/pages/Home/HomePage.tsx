import SwiperSlider from "../../components/SwiperSlider";

const HomePage = () => {
  const myslide = [
    {
      url: "https://images.unsplash.com/photo-1761839257046-84e95464cc52?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      url: "https://images.unsplash.com/photo-1713325803954-722cd5c99046?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "",
    },
    {
      url: "https://images.unsplash.com/photo-1659274155388-d47df11ef93e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      alt: "",
    },
  ];
  return (
    <>
      {/* HeroSection */}
      <section className="w-full bg-green-600">
        <div className="flex justify-center items-center p-24 gap-16">
          <div>
            <h1 className="font-semibold text-4xl">Boenhaz Makmur Utama</h1>
            <h2 className="text-2xl">
              Jagalah ke integritasan dalam menaungi peruhsaan{" "}
            </h2>
            <div className="flex gap-5 mt-8">
              <button className="bg-amber-300 p-5 rounded-2xl text-lg font-medium">
                Lihat Produk Kami
              </button>
              <button className="bg-amber-300 p-5 rounded-2xl text-lg font-medium">
                Hubungi Kami
              </button>
            </div>
          </div>
          <div>
            <SwiperSlider slides={myslide} />
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold text-center text-black">
            Keunggulan Kami
          </h1>
          <h2 className="text-xl font-extrabold text-center text-gray-600 tracking-tight">
            Kenapa milih kami?
          </h2>
        </div>
        <div className="grid-cols-3 flex"></div>
      </section>
    </>
  );
};

export default HomePage;
