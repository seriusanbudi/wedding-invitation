"use client";

import {
  CalendarHeart,
  Clock,
  MapPin,
  Heart,
  TriangleAlert,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-pink-100 to-white">
      <div className="h-dvh w-full fixed inset-0">
        <div className="bg-[url('/images/main-2-mobile.jpg')] w-full h-full lg:bg-[url('/images/main-2-desktop.jpg')] bg-cover bg-top bg-no-repeat" />
      </div>

      <main className="relative">
        <section id="home" className="relative">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <div className="relative min-h-dvh flex items-center justify-center">
                <div className="relative text-center z-10 px-4 w-full md:w-[80%] grid gap-4">
                  <div className="text-pink-600 tracking-[6px]">PERNIKAHAN</div>
                  <h1 className="text-6xl lg:text-8xl font-bold font-alex text-pink-600 relative w-full py-6 flex justify-center gap-4">
                    <div className="flex items-center justify-center gap-6">
                      <div>Budi</div>
                      <div className="text-3xl">&</div>
                      <div>Saras</div>
                    </div>

                    <div className="w-full h-full bg-pink-300 absolute top-0 left-0 right-0 bottom-0 blur-3xl opacity-60" />
                  </h1>
                  <div className="flex justify-center">
                    <p className="border-2 border-pink-600 text-base font-bold px-4 py-1 text-pink-600 rounded-md w-fit">
                      4 November 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[240px] bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0 right-0" />
        </section>

        <section id="announcement" className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <Heart className=" w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 text-pink-600" />
            <h2 className=" text-4xl lg:text-6xl mb-6 md:mb-8 font-alex text-pink-600">
              We are Married!
            </h2>
            <p className=" lg:text-2xl mb-6 md:mb-8 text-gray-700 max-w-3xl mx-auto">
              Dengan penuh sukacita, kami mengumumkan pernikahan kami dan dengan
              hormat mengundang Anda untuk bergabung bersama kami dalam
              merayakan cinta ini serta memberikan doa restu untuk kebahagiaan
              dan kelanggengan ikatan kami.
            </p>
            <div className=" w-24 md:w-32 h-1 bg-pink-300 mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-pink-500">
              Kehadiran Anda akan menjadikan hari istimewa kami semakin berkesan
              dan tak terlupakan.
            </p>
          </div>
        </section>

        <section id="event" className="py-16 md:py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className=" text-4xl lg:text-6xl text-center mb-12 md:mb-16 text-pink-600 font-alex">
              Rincian Acara
            </h2>

            <div className="grid gap-4 md:gap-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className=" bg-white p-6 md:p-8 rounded-3xl text-center">
                  <CalendarHeart className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-pink-600" />
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-pink-600 font-alex">
                    Hari & Tanggal
                  </h3>
                  <p className="text-gray-700">Senin, 4 November 2024</p>
                </div>
                <div className=" bg-white p-6 md:p-8 rounded-3xl text-center">
                  <Clock className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-pink-600" />
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-pink-600 font-alex">
                    Waktu
                  </h3>
                  <p className="text-gray-700">16:00 WITA - 22:00 WITA</p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-3xl text-center grid gap-4">
                <div>
                  <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-pink-600" />
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-pink-600 font-alex">
                    Lokasi
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Jalan Batuyang Gg. Garuda No. 100X
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/gCKwop4cS8khAigq7"
                    className="text-pink-600 font-bold underline"
                  >
                    (Pondok Luwih)
                  </a>
                </div>
                <div className="p-4 bg-pink-100 rounded-3xl grid gap-2 border-2 border-pink-600 mb-2">
                  <TriangleAlert className="w-8 h-8 mx-auto text-pink-600" />
                  <p className="text-sm md:text-base text-gray-700 text-center">
                    Lebih disarankan untuk <b>membawa motor</b>, karena mobil
                    tidak bisa langsung masuk ke lokasi. Anda perlu berjalan
                    sekitar 500 meter dari tempat parkir.
                  </p>
                </div>
                <div>
                  <iframe
                    className="rounded-3xl h-[250px] lg:h-[450px] mb-10"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126227.19759786579!2d115.14019833015911!3d-8.634350410933958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23fd7aff3b747%3A0xdd2e11b1ef510d7b!2sPondok%20Luwih!5e0!3m2!1sen!2sid!4v1729780742966!5m2!1sen!2sid"
                    width="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/gCKwop4cS8khAigq7"
                    className="px-4 py-2 bg-pink-600 rounded-md text-white font-semibold"
                  >
                    Lihat dalam peta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-white relative h-[320px] md:h-[520px] flex items-center justify-center w-full">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('/images/footer.jpg')] bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className=" text-center">
            <p className="font-alex text-5xl md:text-7xl text-pink-600">
              Terima kasih
            </p>
            <p className="text-base text-gray-700">
              Telah menjadi bagian dari kisah cinta kami.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
