import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
      className="fixed bottom-6 right-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition z-50"
    >
      <ArrowUp />
    </button>
  ) : null;
};

export default ScrollToTop;
