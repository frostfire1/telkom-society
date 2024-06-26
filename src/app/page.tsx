import Image from "next/image";

import { LinkButton } from "./components/utils/Button";

import { Archivo_Black } from "next/font/google";
const archivo_black = Archivo_Black({ weight: "400", subsets: ["latin"] });

import Orangkeren from "@/../public/img/Element01.png";
import speed from "@/../public/ui/speed.png";
import thumb from "@/../public/ui/thumb_up.png";
import verify from "@/../public/ui/verified_user.png";
import festbg from "@/../public/ui/festive-background.png";
import Hijau from "@/../public/ui/Group_fill.png";
import Piala from "@/../public/ui/piala.png";
import Merah from "@/../public/ui/User_alt_fill.png";

// const Festivebg = "bg-[url(" + festbg + ")]";

export default function Home() {
  return (
    <main className="mt-[200px]">
      <div className="justify-center flex flex-col xl:flex-row items-center px-4">
        <div className="max-w-[490px]">
          <h1
            className={`text-[64px] text-start ${archivo_black.className} leading-none`}
          >
            TELKOM <span className="text-red-500">SOCIETY</span>
          </h1>
          <p className="text-[32px] font-[400]">
            Find the Best Competition
            <br /> Partner to Succeed Together!
          </p>
          <LinkButton
            href="#"
            className="mt-[17px] scale-125 ml-4"
            variant="base"
          >
            Join Us Now!
          </LinkButton>
        </div>
        <div className="mt-12">
          <Image src={Orangkeren} alt="Orang Sukses Amin" />
        </div>
      </div>
      <div className="mt-[175px] px-4">
        <div className="flex justify-center text-center">
          <div>
            <h1 className="text-[36px] text-red-500 font-[600]">
              Why Telkom Society?
            </h1>
            <p className="text-[24px] text-black opacity-70">
              This is the reason why you should use Telkom Society to find your
              team
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-[42px] flex flex-col xl:flex-row gap-[50px] xl:gap-[190px] text-center">
            <div className="flex flex-col gap-4 items-center">
              <Image src={speed} alt="Fast" />
              <h1 className="text-red-500 text-[28px] font-medium">Fast</h1>
            </div>
            <div className="flex flex-col gap-4">
              <Image src={thumb} alt="Easy To Use" />
              <h1 className="text-red-500 text-[28px] font-medium">Easy</h1>
            </div>
            <div className="flex flex-col gap-4">
              <Image src={verify} alt="Safe" />
              <h1 className="text-red-500 text-[28px] font-medium text-center">
                Safe
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full h-[1100px] xl:h-screen relative mt-[400px] xl:mt-[270px] xl:bg-transparent bg-red-500">
        <Image
          src={festbg}
          alt="Background"
          className="w-full object-cover h-full absolute -z-10 invisible xl:visible"
        />
        <div className="flex flex-col justify-center text-center w-full">
          <div className="h-12"></div>
          <h1 className="text-[36px] text-white font-[600] xl:mt-[120px] px-4">
            Telkom Society is trusted and used by dozens of students in
            <br /> Telkom Malang Vocational School.
          </h1>
        </div>
        <div className="flex w-full items-center xl:items-end justify-center static xl:absolute bottom-0 max-w-full mt-12">
          <div className="xl:mx-auto mx-0 flex flex-col xl:flex-row gap-y-4 xl:gap-x-[150px] text-[28px] text-center">
            <div className="bg-white flex justify-center pt-4 xl:pt-[30px] mt-0 xl:mt-24 rounded-xl xl:rounded-b-none xl:rounded-t-xl flex-col text-center">
              <div className="w-[275px]"></div>
              <div className="flex flex-col justify-center items-center px-[10px] md:pb-[80px] xl:pb-[140px] pb-12 ">
                <Image src={Piala} alt="Piala" />
                <h1>Jumlah Kompetisi</h1>
                <p className="opacity-70">Placeholder</p>
              </div>
            </div>
            <div className="bg-white flex justify-center pt-4 xl:pt-[30px] xl:rounded-t-xl xl:rounded-b-none rounded-xl flex-col text-center">
              <div className="w-[275px]"></div>
              <div className="flex flex-col justify-center items-center px-[10px] md:pb-[80px] xl:pb-[140px] pb-12">
                <Image src={Merah} alt="Merah" />
                <h1>Jumlah User</h1>
                <p className="opacity-70 xl:mb-24 mb-0">Placeholder</p>
              </div>
            </div>
            <div className="bg-white flex justify-center pt-4 xl:pt-[30px] mt-0 xl:mt-12 xl:rounded-t-xl xl:rounded-b-none rounded-xl flex-col text-center pb-12">
              <div className="w-[275px]"></div>
              <div className="flex flex-col justify-center items-center px-[10px] md:pb-[80px] xl:pb-[140px] pb-12]">
                <Image src={Hijau} alt="Hijau" />
                <h1>Jumlah Tim</h1>
                <p className="opacity-70 mb-0 xl:mb-12">Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[215px] justify-center items-center flex px-4">
        <div className="flex flex-col text-center items-center">
          <h1 className="text-[32px] font-[500]">
            Join the Telkom Society and find your dream
            <br /> team for you school competition!
          </h1>
          <LinkButton
            href="#"
            variant="base"
            className="scale-125 mb-[215px] mt-[20px]"
          >
            Join Us Now!
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
