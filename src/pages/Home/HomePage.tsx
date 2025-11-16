import SwiperSlider from "../../components/SwiperSlider";
import { HiBriefcase, HiShieldCheck } from "react-icons/hi";
import { HiBanknotes, HiTrophy } from "react-icons/hi2";
interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    name: "Kualitas premium",
    description: "Ayam sehat dan pakan alami",
    icon: HiTrophy,
  },
  {
    name: "Higenis dan halal",
    description: "Proses potong terstandar",
    icon: HiShieldCheck,
  },
  {
    name: "Harga Kompetitif",
    description: "Langsung dari peternak",
    icon: HiBanknotes,
  },
  {
    name: "Layanan terpadu",
    description: "Melayani berbegai bidang",
    icon: HiBriefcase,
  },
];

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

const HomePage: React.FC = () => {
  return (
    <>
      {/* HeroSection */}
      <section className="w-full">
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
        <div className="grid grid-cols-2 gap-10 p-10 mt-10">
          {features.map((feature) => (
            <div className="flex flex-col text-center w-xl rounded-2xl h-72 justify-center items-center mx-auto bg-amber-500 p-10">
              <feature.icon size={100} />
              <div>
                <h2 className="font-bold text-3xl">{feature.name}</h2>
                <p className="font-medium text-lg tracking-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lini bisnis */}
      <section>
        <div className="my-12">
          <h1 className="text-4xl font-semibold text-center text-black">
            Bisnis Kita
          </h1>
        </div>
        <div className="w-full flex gap-6 justify-center items-center mx-auto">
          <div className="bg-amber-600 w-[490px] h-[620px] rounded-2xl"></div>
          <div className="bg-amber-600 w-[490px] h-[620px] rounded-2xl"></div>
          <div className="bg-amber-600 w-[490px] h-[620px] rounded-2xl"></div>
        </div>
      </section>

      {/* Tetimoni pelanggan */}
      <section></section>

      {/* CTA Penutup */}
      <section>
        <div className="bg-amber-200 flex w-fit mx-auto h-[620px] my-12 justify-center rounded-3xl items-center gap-12">
          <div className="p-30">
            <h1 className="text-3xl text-black font-semibold">
              Siap Memenuhi Kebutuhan Ayam Kampung Anda?
            </h1>
            <p className="text-2xl text-neutral-700 font-bold">
              Diskusikan Kebutuhan Anda dengan Tim Kami.
            </p>
          </div>
          <div className="p-30">
            <button className="h-28 w-52 rounded-2xl bg-green-500">
              WhatsApp
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
