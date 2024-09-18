import Nav from "@/app/components/Nav/Nav";
import Footer from "@/app/components/Footer/Footer";
import './globals.css'

export const metadata = {
  title: "Lakers Stat App",
  description: "A website that displays the top 3 Laker players within certain stats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#EDEEF0] flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
