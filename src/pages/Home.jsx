import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen p-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-4/5 h-[50vh]"
      >
        <Card className="shadow-xl border rounded-2xl bg-[#ffffff2a] border-white h-full flex flex-col">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center font-serif p-4">
              AI-Powered Disaster Response Platform
            </CardTitle>
            <CardDescription className="p-5 text-xl text-center text-gray-600 flex items-center justify-center">
              A centralized tool to enhance coordination, resource allocation, and communication during natural disasters.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-grow justify-center p-7">
            <p className="text-gray-700 text-lg text-center max-w-2xl">
              This system empowers first responders, volunteers, and affected individuals to
              communicate effectively, submit requests (text/images), and receive real-time
              guidance powered by intelligent agents and vision-language AI.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
