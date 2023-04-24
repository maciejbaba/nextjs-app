"use client";
import Link from "next/link";
import { useState } from "react";

const desktopNav = (
  <nav className="flex gap-4 items-center">
    <Link className="link-hover" href="/cars">
      List of cars
    </Link>
    <Link className="link-hover" href="/about">
      About
    </Link>
    <Link className="link-hover" href="/privacy">
      Privacy
    </Link>
  </nav>
);

const hamburger = (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const close = (
  <svg
    className="w-12 h-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const mobileNav = (
    <nav className="md:hidden fixed top-0 left-0 grid content-center w-[100vw] h-[100vh] bg-black">
      <button className="fixed top-4 right-4" onClick={toggle}>
        {close}
      </button>
      <div className="flex text-4xl flex-col gap-8 items-center">
        <Link className="link-hover" href="/cars">
          List of cars
        </Link>
        <Link className="link-hover" href="/about">
          About
        </Link>
        <Link className="link-hover" href="/privacy">
          Privacy
        </Link>
      </div>
    </nav>
  );

  return (
    <div>
      <button className="md:hidden m-3" onClick={toggle}>
        {!isOpen && hamburger}
      </button>
      {isOpen && mobileNav}
      <div className="hidden md:flex">{desktopNav}</div>
    </div>
  );
}
