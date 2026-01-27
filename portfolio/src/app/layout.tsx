import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "IYGEAL.dev | Backend Engineer",
  description: "Backend engineer building reliable, production-ready systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          min-h-screen
          bg-slate-950
          text-slate-100
          relative
        "
      >
        {/* Background image layer */}
        <div
          className="
            fixed inset-0
            bg-[url('/backgrounds/background-slate.png')]
            bg-cover bg-center bg-no-repeat
            pointer-events-none
            z-0
          "
        />

        {/* Dark overlay to preserve contrast */}
        <div className="fixed inset-0 bg-slate-950/70 z-0 pointer-events-none" />

        {/* App content */}
        <div className="relative z-10">
          <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
            <Navbar />
          </header>

          <main className="px-6 pt-10 md:pt-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
