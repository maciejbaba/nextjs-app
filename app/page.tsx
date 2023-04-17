import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <Link href="/about">Link to About Page</Link>
    </div>
  );
}
