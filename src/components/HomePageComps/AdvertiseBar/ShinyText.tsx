import { motion } from "framer-motion";

export const ShinyText = ({ text }: { text: string }) => (
  <motion.span
    className="relative inline-block font-medium text-xs md:text-sm text-transparent bg-clip-text"
    initial={{ backgroundPosition: "200% center" }}
    animate={{
      backgroundPosition: ["200% center", "0% center"],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      backgroundImage: "linear-gradient(90deg, #fff, #facc15, #fff)",
      backgroundSize: "200% auto",
    }}
  >
    {text}
  </motion.span>
);
