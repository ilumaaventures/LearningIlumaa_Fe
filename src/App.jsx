import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LearningPage from "./pages/LearningPage";

function App() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const targetId = hash.replace(/^#/, "");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="site-shell min-h-screen w-full max-w-full bg-bg-primary text-text-primary">
      <Navbar />
      <main className="w-full max-w-full pt-16 sm:pt-20">
        <LearningPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
