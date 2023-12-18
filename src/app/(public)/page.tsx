import { Button } from "@/components/ui/button";
import Image from "next/image";
import avatar_yudha from "@/components/assets/avatarYudha2.jpg";

export default function Home() {
  return (
    <>
      <Image
        alt="Muhamamd Yudha Setiawan"
        className="w-56 h-56 rounded-full border-4 transform hover:scale-110 transition-all bg-cover"
        src={avatar_yudha}
      />
      <div className="px-28">
        <h3 className="text-xl lg:text-4xl font-bold my-auto mb-8 text-white animate-[scale_.25s_ease-in-out] mt-10">
          Muhamamd Yudha Setiawan
        </h3>
        <p className="mt-4 text-xs md:text-lg text-justify lg:text-center px-8 text-white animate-[y-b-25_.3s_ease-in-out_.2s_1_normal_forwards]">
          Frontend Engineer passionate about developing web applications using
          various programming languages and modern techniques for advanced
          programs, I have over 2 years of experience in JavaScript and PHP. I
          am skilled in utilizing libraries and frameworks such as React JS,
          Next JS, and Laravel.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <Button className="bg-warning-1 hover:bg-blue-700 transform hover:scale-110 transition-all">
            Contact
          </Button>
          <Button className="bg-accent hover:bg-yellow-500 transform hover:scale-110 transition-all">
            Resume
          </Button>
        </div>
      </div>
    </>
  );
}
