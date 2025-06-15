import React from "react";
import { motion } from "framer-motion";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center h-screen bg-black relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3, 1, 0.3, 1] }}
        transition={{
          duration: 3,       
          ease: "easeInOut"
        }}
        className="w-0 h-0 border-l-[250px] border-r-[250px] border-b-[430px] border-l-transparent border-r-transparent border-b-[#D7DAA8] blur-2xl -m-6"
      />

      <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:7}} 
      className="absolute top-[calc(56%-100px)] text-white text-9xl font-semibold bebas">
        COMING SOON
      </motion.p>

      <div className="absolute bottom-12">
        <Popover>
          <PopoverTrigger className="text-white  bg-[#ffffff42] text-2xl font-semibold px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition bebas">
            DISASTER OPS AI
          </PopoverTrigger>
          <PopoverContent sideOffset={40} className="bg-[#ffffff66] border-0 text-white text-center text-lg font-medium p-4 rounded-xl shadow-lg max-w-sm bebas">
            AN AI-DRIVEN DISASTER RESPONSE COORDINATION PLATFORM
          </PopoverContent>
        </Popover>
      </div>
    </div>
    </>
  );
}
