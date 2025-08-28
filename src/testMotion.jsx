import { motion } from "framer-motion";
export default function TestMotion() {
  return <motion.div animate={{ scale: 2 }} style={{ width: 100, height: 100, background: "red" }} />;
}
