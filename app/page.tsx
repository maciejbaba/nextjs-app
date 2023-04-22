import { IoCarSport } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2 flex justify-center items-center flex-col gap-2">
      <div className="flex w-full justify-between">
        <p className="flex text-green-500 gap-2 text-4xl items-center font-bold uppercase">
          <IoCarSport />
          <span>Cars</span>
        </p>
        <nav className="flex gap-4 items-center">
          <Link className="link-hover" href="/cars">List of cars</Link>
          <Link className="link-hover" href="/about">About</Link>
          <Link className="link-hover" href="/privacy">Privacy</Link>
        </nav>
      </div>
      <p>This is the home page of our company</p>
      <Link className="link-hover" href="/about">
        Link to About Page
      </Link>
    </div>
  );
}
