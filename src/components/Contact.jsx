import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-2">Let’s connect with the LabXperts team</p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center">
        <a href="mailto:ammansajjad42@gmail.com" className="flex items-center gap-3 text-lg hover:text-indigo-600 transition">
          <Mail /> techa6026@gmail.com
        </a>
        <a href="tel:+923259055292" className="flex items-center gap-3 text-lg hover:text-green-600 transition">
          <Phone /> +92 325 9055292
        </a>
      </div>
    </section>
  );
};

export default Contact;
