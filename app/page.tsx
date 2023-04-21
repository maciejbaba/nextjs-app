import { IoCarSport } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <div className="flex w-full">
        <p className="flex text-green-500 gap-2 text-4xl items-center justify-start font-bold uppercase">
          <IoCarSport />
          <span>Cars</span>
        </p>
        <nav className="">
          <Link href="/about">About</Link>
          <Link href="/about">About</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
      <p>This is the home page of our company</p>
      <Link className="link-hover" href="/about">
        Link to About Page
      </Link>
    </div>
  );
}
