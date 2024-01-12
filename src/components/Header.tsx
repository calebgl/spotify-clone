import Image from "next/image";

import ArrowLeft from "~/icons/ArrowLeft";
import ArrowRight from "~/icons/ArrowRight";
import Bell from "~/icons/Bell";

import Button from "./Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between rounded-t-lg p-4 px-5 py-4">
      <div className="flex gap-2">
        <Button className="aspect-square w-8 text-white">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button className="aspect-square w-8 text-white">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex gap-2">
        <Button className="h-full bg-gray-100 px-4 py-1 text-sm font-bold transition-transform hover:scale-105">
          Explore premium
        </Button>
        <Button className="h-full px-4 py-1 text-sm font-bold text-white transition-transform hover:scale-105">
          Install app
        </Button>
        <Button className="aspect-square w-8 text-neutral-400 transition-transform hover:scale-105 hover:text-white">
          <Bell className="h-4 w-4" />
        </Button>
        <Button className="grid aspect-square w-8 place-content-center rounded-full bg-gray-100 p-1 text-black transition-transform hover:scale-105">
          <Image
            width={100}
            height={100}
            src="https://avatars.githubusercontent.com/u/57515964?v=4"
            alt="github"
            className="rounded-full"
          />
        </Button>
      </div>
    </header>
  );
}
