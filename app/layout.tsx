import "./globals.css";
import { IoCarSport } from "react-icons/io5";
import Nav from "./components/Nav";

export const metadata = {
  title: "Cars",
  description: "Cars is a website that shows a list of cars.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="flex w-full justify-between p-2 font-bold">
            <p className="m-2 flex text-red-500 gap-2 text-2xl items-center uppercase">
              <IoCarSport />
              <span>Cars</span>
            </p>
            <Nav />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
