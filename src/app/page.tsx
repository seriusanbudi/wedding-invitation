import { CalendarHeart, Clock, MapPin, Heart, Bike } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-pink-100 to-white">
      <header className="bg-white bg-opacity-90 shadow-2xl fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <Heart className="w-6 h-6 md:w-8 md:h-8 mx-auto text-pink-600" />
        </div>
      </header>

      <main>
        <section id="home" className="bg-white relative shadow-2xl">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <div className="relative h-screen flex items-center justify-center">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('/images/main.jpg')] bg-cover bg-center bg-no-repeat opacity-40" />
                <div className="hidden md:block absolute top-0 left-0 bottom-0 w-[92px] bg-gradient-to-l from-transparent from-20% via-white to-white" />
                <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[92px] bg-gradient-to-r from-transparent from-20% via-white to-white" />

                <div className="relative text-center z-10 px-4">
                  <h1 className="animate-on-scroll text-6xl lg:text-8xl font-bold mb-4 font-alex text-pink-600">
                    Budi & Saras
                  </h1>
                  <p className="animate-on-scroll text-base sm:font-bold underline">
                    November 4, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="announcement" className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <Heart className="animate-on-scroll w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 text-pink-600" />
            <h2 className="animate-on-scroll text-4xl lg:text-6xl mb-6 md:mb-8 font-alex text-pink-600">
              We are Married!
            </h2>
            <p className="animate-on-scroll lg:text-2xl mb-6 md:mb-8 text-gray-700 max-w-3xl mx-auto">
              We are overjoyed to announce our marriage and cordially invite you
              to join us in celebrating our love and blessing our union.
            </p>
            <div className="animate-on-scroll w-24 md:w-32 h-1 bg-pink-300 mx-auto mb-6 md:mb-8"></div>
            <p className="animate-on-scroll text-base md:text-lg lg:text-xl text-gray-600">
              Your presence will make our special day even more memorable.
            </p>
          </div>
        </section>

        <section id="event" className="py-16 md:py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="animate-on-scroll text-4xl lg:text-6xl text-center mb-12 md:mb-16 text-pink-600 font-alex">
              Celebration Details
            </h2>

            <div className="grid gap-4 md:gap-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="animate-on-scroll bg-white p-6 md:p-8 rounded-3xl shadow-lg text-center transform transition-transform duration-300">
                  <CalendarHeart className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-pink-600" />
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-pink-600 font-alex">
                    Date
                  </h3>
                  <p className="text-gray-700">November 4, 2024</p>
                </div>
                <div className="animate-on-scroll bg-white p-6 md:p-8 rounded-3xl shadow-lg text-center transform transition-transform duration-300">
                  <Clock className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-pink-600" />
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-pink-600 font-alex">
                    Time
                  </h3>
                  <p className="text-gray-700">4:00 PM - 10:00 PM</p>
                </div>
              </div>

              <div>
                <div className="animate-on-scroll bg-white p-6 md:p-8 rounded-3xl shadow-lg text-center transform transition-transform duration-300">
                  <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-pink-600" />
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-pink-600 font-alex">
                    Location
                  </h3>
                  <p className="text-gray-700">Pondok Luwih</p>
                  <p className="text-gray-700 mb-6">
                    Jalan Batuyang Gg. Garuda 100X
                  </p>

                  <iframe
                    className="rounded-3xl shadow-xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126227.19759786579!2d115.14019833015911!3d-8.634350410933958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23fd7aff3b747%3A0xdd2e11b1ef510d7b!2sPondok%20Luwih!5e0!3m2!1sen!2sid!4v1729780742966!5m2!1sen!2sid"
                    width="100%"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="mt-4 p-4 bg-pink-100 rounded-3xl grid gap-4">
                  <Bike className="w-8 h-8 mx-auto text-pink-600" />
                  <p className="text-sm md:text-base text-gray-700 text-center">
                    <b>Note:</b> It is preferable to bring a motorcycle instead
                    of a car. Cars can not access the venue directly, and you
                    will need to walk about 500 meters from the parking spot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink-800 text-white relative h-[320px] md:h-[520px] flex items-center justify-center w-full">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('/images/footer.jpg')] bg-cover bg-center bg-no-repeat opacity-40" />
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="animate-on-scroll text-center mb-8 md:mb-0">
            <p className="font-alex text-2xl md:text-4xl">
              Thank you for being part of our love story
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
