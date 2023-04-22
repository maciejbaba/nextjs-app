import { IoCarSport } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2">
      <div className="flex flex-col gap-5 m-auto items-center w-1/2 text-center">
        <h1 className="text-xl font-bold">
          Welcome to our website dedicated to all things cars!{" "}
        </h1>
        <p>
          Whether you&apos;re a car enthusiast, a first-time buyer, or simply
          someone who appreciates the beauty and power of automobiles,
          you&apos;ve come to the right place.
        </p>
      </div>
    </div>
  );
}
