import { LucideArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[rgba(86,51,208,1)] text-white shadow-md hover:bg-[rgba(70,40,180,1)] transition-all duration-300 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label="Voltar ao topo"
    >
      <LucideArrowUp />
    </button>
  );
};

export default BackToTop;
