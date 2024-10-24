
import Image from "next/image";
import Icon from '@/assets/icon.png'
import iPhoneMockup from '@/assets/iPhoneMockup.png'
import AppleBadge from '@/assets/apple.svg'
import GoogleBadge from '@/assets/google.svg'
import AptoideBadge from '@/assets/aptoide.svg'
import UptodownBadge from '@/assets/uptodown.svg'

export default function Home() {
  return (
    <div className="font-poppiins min-h-screen flex flex-col  bg-gray-200">
      {/* Header/Nav */}
      <header className="w-full bg-gray-100 shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-8">
          <h1 className="font-poppins text-2xl font-bold text-gray-800">Oil<a className="text-blue-400">Reminder</a></h1>
          <button className="bg-black text-white font-medium py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300">
            Baixe agora
          </button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-grow container mx-auto text-center py-20">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-screen h-screen md:w-[1000px] md:h-[1000px] mt-28 md:mt-48 opacity-60 z-0">
          <Image
            src={iPhoneMockup}
            alt="iPhone Mockup"
            layout="fill"
            objectFit="contain"
            className="animate-bounce-slow md:mt-0 mt-20"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in">
            O lembrete que seu carro merece.
          </h2>
          <div className="w-4/6 animate-pulse">
            <p className="text-md md:text-2xl text-gray-100  shadow-lg font-medium bg-blue-400 md:px-9 md:py-2 px-4 py-1 rounded-3xl mb-10 animate-fade-in">
              Nunca esqueça de trocar o óleo. Baixe agora!
            </p>
          </div>

          {/* Download Section */}
          <div className="grid grid-cols-2 gap-x-4 mb-12">
            <a
              href=""
              target=""
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition duration-300 cursor-not-allowed opacity-45"
            >
              <Image
                src={GoogleBadge}
                alt="Google Play"
                width={150}
                height={50}
              />
            </a>
            <a
              href=""
              target=""
              rel="noopener noreferrer"

              className="transform hover:scale-110 transition duration-300 cursor-not-allowed opacity-45"
            >
              <Image
                src={AppleBadge}
                alt="App Store"
                width={150}
                height={50}
              />
            </a>
            <a className=" bg-gray-100 transform hover:scale-110 transition duration-300 w-[150px] h-[50px] border-2 flex items-center justify-center border-gray-600 rounded-md"
              href="https://uptodown.com" target="_blank" rel="noopener noreferrer">
              <Image
                src={UptodownBadge}
                alt="Uptodown"
                width={120}
                height={30}
              />
            </a>
            <a className="bg-gray-100 transform hover:scale-110 transition duration-300 w-[150px] h-[50px] border-2 flex items-center justify-center border-gray-600 rounded-md"
              href="https://uptodown.com" target="_blank" rel="noopener noreferrer">
              <Image

                src={AptoideBadge}
                alt="Uptodown"
                width={120}
                height={30}
              />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white">
        <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center px-8 space-y-4 md:space-y-0">
          <p className="text-sm">Desenvolvido por @matheudsp</p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/matheudsp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/matheudsp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

