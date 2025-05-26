import { motion } from "framer-motion";
import ammanImg from "../assets/team/amman.jpg";
import jawadImg from "../assets/team/jawad.jpg";
import farhanImg from "../assets/team/farhan.jpg";

const team = [
  {
    name: "Amman Sajjad",
    role: "MERN Stack Developer",
    img: ammanImg,
  },
  {
    name: "Jawad",
    role: "React Native Developer",
    img: jawadImg,
  },
  {
    name: "Farhan",
    role: "MERN Stack Developer",
    img: farhanImg,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
        <p className="text-gray-600 mt-2">The brains behind LabXperts</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-5">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={member.img} alt={member.name} className="w-full h-64   object-contain " />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
