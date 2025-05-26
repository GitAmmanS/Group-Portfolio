import { motion } from "framer-motion";
import { Cpu, ClipboardList, Box, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    title: "Inventory Management",
    icon: <Box size={48} className="text-indigo-600" />,
    description: "Track and manage all lab equipment, peripherals, and PCs with real-time updates and QR code identification.",
  },
  {
    title: "Complaint Management",
    icon: <ClipboardList size={48} className="text-green-600" />,
    description: "Smart system for faculty and staff to lodge complaints about faulty equipment with automatic severity escalation.",
  },
  {
    title: "Demand Handling",
    icon: <ShieldCheck size={48} className="text-purple-600" />,
    description: "Monitor incoming and outgoing demands from store to labs, with role-based approvals and audit trail.",
  },
  {
    title: "Role-Based Access",
    icon: <Users size={48} className="text-pink-600" />,
    description: "Coordinator, Lab Incharge, Attendants, and Technicians — each with dedicated dashboards and controls.",
  },
  {
    title: "System Monitoring",
    icon: <Cpu size={48} className="text-yellow-600" />,
    description: "Track lab equipment status, allocation history, and maintenance cycles in one unified dashboard.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">UIIT LabXperts Features</h2>
        <p className="text-gray-600 mt-2">All-in-one smart lab management system</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-5">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            whileHover={{ scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
