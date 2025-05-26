import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

import img1 from "../assets/gallery/labx1.png";
import img2 from "../assets/gallery/labx2.png";
import img3 from "../assets/gallery/labx3.png";
import img4 from "../assets/gallery/labx4.png";
import img5 from "../assets/gallery/labx5.jpg";
import img6 from "../assets/gallery/labx6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Project Gallery</h2>
        <p className="text-gray-600 mt-2">Sneak peek into UIIT LabXperts UI</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto px-5">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`LabXpert-${index}`} className="w-full h-70 object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Popup */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-3xl">
            <img src={selectedImage} alt="Preview" className="rounded-lg shadow-lg" />
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={36} />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
