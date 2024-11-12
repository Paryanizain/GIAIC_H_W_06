import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
export default function Home() {
  return (  
      <div className="w-full">
    <Herosection />
    <div className="bg-slate-100 py-8 px-10 dark:bg-slate-700">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl text-black">Featured New Cars</h1>
        <div className="text-blue-700 text-sm font-medium hover:text-red-700 cursor-pointer">
          View All New Cars
        </div>
      </div>
      <ul className="flex font-semibold py-6 space-x-10 text-black">
        <li className="hover:text-red-700 cursor-pointer">Popular</li>
        <li className="hover:text-red-700 cursor-pointer">Upcoming</li>
        <li className="hover:text-red-700 cursor-pointer">Newly Launched</li>
      </ul>
      
      <div className="flex space-x-6 text-center overflow-x-auto">
        <ul className="w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
          <Link href="/car3">
            <li className="hover:opacity-90 transition duration-300">
              <Image
                src="/image/Corolla-X-Cars.jpg"
                alt="Toyota Corolla"
                width={400}
                height={200}
                className="w-full h-auto object-cover"
              />
            </li>
          </Link>
          <Link href="/car3">
            <li className="text-blue-900 font-semibold hover:text-red-700 mt-2">
              Toyota Corolla
            </li>
          </Link>
          <Link href="/car3">
            <li className="text-green-500 font-semibold my-2 hover:text-red-700">
              PKR 59.7 - 75.5 lacs
            </li>
          </Link>
        </ul>

        <ul className="w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
          <Link href="/car2">
            <li className="hover:opacity-90 transition duration-300">
              <Image
                src="/image/Honda_City.jpg"
                alt="Honda City"
                width={400}
                height={200}
                className="w-full h-auto object-cover"
              />
            </li>
          </Link>
          <Link href="/car2">
            <li className="text-blue-900 font-semibold hover:text-red-700 mt-2">
              Honda City
            </li>
          </Link>
          <Link href="/car2">
            <li className="text-green-500 font-semibold my-2 hover:text-red-700">
              PKR 45.5 - 58.5 lacs
            </li>
          </Link>
        </ul>

        <ul className="w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
          <Link href="/car4">
            <li className="hover:opacity-90 transition duration-300">
              <Image
                src="/image/Nissan_Juke01.png"
                alt="Nissan Juke"
                width={400}
                height={200}
                className="w-full h-auto object-cover"
              />
            </li>
          </Link>
          <Link href="/car4">
            <li className="text-blue-900 font-semibold hover:text-red-700 mt-2">
              Nissan Juke
            </li>
          </Link>
          <Link href="/car4">
            <li className="text-green-500 font-semibold my-2 hover:text-red-700">
              PKR 52.5 - 65.5 lacs
            </li>
          </Link>
        </ul>

        <ul className="w-1/4 bg-white rounded-lg shadow-lg overflow-hidden">
          <Link href="/car1">
            <li className="hover:opacity-90 transition duration-300">
              <Image
                src="/image/Suzuki_Alto_2015.jpg"
                alt="Suzuki Alto"
                width={400}
                height={200}
                className="w-full h-auto object-cover"
              />
            </li>
          </Link>
          <Link href="/car1">
            <li className="text-blue-900 font-semibold hover:text-red-700 mt-2">
              Suzuki Alto
            </li>
          </Link>
          <Link href="/car1">
            <li className="text-green-500 font-semibold my-2 hover:text-red-700">
              PKR 23.3 - 32.5 lacs
            </li>
          </Link>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
  );
}
