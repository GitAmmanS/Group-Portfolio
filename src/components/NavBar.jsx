import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500); // Adjust scroll distance if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-lg shadow-md transition-all duration-300 ${
        isScrolled ? "bg-white/90 text-black" : "bg-white/10 text-white"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">LabXperts</div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8 font-medium">
        <a href="#home" className="hover:text-green-500 transition">Home</a>
        <a href="#about" className="hover:text-green-500 transition">About</a>
        <a href="#features" className="hover:text-green-500 transition">Features</a>
        <a href="#gallery" className="hover:text-green-500 transition">Project Gallery</a>
        <a href="#contact" className="hover:text-green-500 transition">Contact</a>
      </div>

      {/* Mobile Menu Icon */}
      <button onClick={toggleMenu} className="md:hidden">
        {navOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav Menu */}
      {navOpen && (
        <motion.div
          className={`absolute top-16 right-6 rounded-lg p-5 flex flex-col space-y-4 font-medium shadow-xl transition ${
            isScrolled ? "bg-white text-black" : "bg-white/20 backdrop-blur-lg text-white"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#home" onClick={toggleMenu} className="hover:text-green-500 transition">Home</a>
          <a href="#about" onClick={toggleMenu} className="hover:text-green-500 transition">About</a>
          <a href="#features" onClick={toggleMenu} className="hover:text-green-500 transition">Features</a>
          <a href="#team" onClick={toggleMenu} className="hover:text-green-500 transition">Team</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-green-500 transition">Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
