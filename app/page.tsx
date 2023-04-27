import Link from "next/link";

export default function Home() {

  return (
    <div className="p-2">
      <section className="flex flex-col gap-5 m-auto items-center w-1/2 text-center">
        <h1 className="text-xl font-bold">
          Welcome to our website dedicated to all things cars!{" "}
        </h1>
        <p>
          Whether you&apos;re a car enthusiast, a first-time buyer, or simply
          someone who appreciates the beauty and power of automobiles,
          you&apos;ve come to the right place.
        </p>
        <Link href="/cars" className="px-4 py-2 rounded bg-blue-500 font-bold hover:bg-blue-700">
          See our cars
        </Link>
      </section>
    </div>
  );
}
