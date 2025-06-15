import React from "react";
import { motion } from "framer-motion";

const Header=()=> {
  return (
    <div className="flex justify-center pt-3">
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#ffffff30] border border-white shadow-md w-3/12 rounded-full"
      >
        <div className="container mx-auto items-center p-4 flex justify-center">
          <div className="text-xl font-bold text-gray-800">DisasterOps</div>
        </div>
      </motion.nav>
    </div>
  );
}

export default Header;