import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
      <main className="font-sans">
        {/* Navbar always on top */}
        <section className="flex flex-col w-screen items-center justify-center">
          <Navbar />
        </section>

        {/* Page content */}
        <Component {...pageProps} />

        {/* Footer always at bottom */}
        <footer className="px-2 pb-2 md:px-4 md:pb-4">
          <Footer />
        </footer>
      </main>
  );
}
