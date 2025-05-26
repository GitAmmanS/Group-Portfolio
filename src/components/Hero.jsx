import { motion } from "framer-motion";
import UniPic from "../assets/arid_pic.jpg";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white text-center relative overflow-hidden">

      {/* University Background Image */}
      <motion.img 
        src={UniPic}
        alt="University"
        className="absolute inset-0 w-full h-full object-cover opacity-30 brightness-75"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg flex flex-col items-center">

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to LabXperts
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Smart University Lab Management System by <span className="font-semibold">Amman</span>, <span className="font-semibold">Jawad</span>, and <span className="font-semibold">Farhan</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#about"
          className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold text-lg transition duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More
        </motion.a>

      </div>

    </section>
  );
};

export default Hero;
