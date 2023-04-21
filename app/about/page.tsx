import Link from "next/link";

export default function About() {
  return (
    <div className="hero flex flex-col gap-2">
      <h1>This is page about our company</h1>
      <p>Desci</p>
      <Link className="link-hover" href="/">Link to Home Page</Link>
    </div>
  );
}
