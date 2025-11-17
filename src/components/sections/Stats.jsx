import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const stats = [
  { id: 1, value: "10K+", label: "Happy Customers" },
  { id: 2, value: "95%", label: "Skin Improvement" },
  { id: 3, value: "50+", label: "Organic Products" },
  { id: 4, value: "4.9", label: "Customer Rating", icon: <FaStar className="text-yellow-400 text-xl" /> },
];

const Stats = () => {
  return (
    <section className="w-full flex justify-center mt-6 md:mt-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-teal-700 text-white px-6 py-5 md:px-10 md:py-6 rounded-2xl shadow-xl flex flex-wrap md:flex-nowrap gap-6 md:gap-10 items-center"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: stat.id * 0.15 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-2xl md:text-3xl font-bold">{stat.value}</h2>
              {stat.icon && stat.icon}
            </div>
            <p className="text-sm md:text-base opacity-90">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;