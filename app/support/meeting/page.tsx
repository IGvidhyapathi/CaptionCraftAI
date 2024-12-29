"use client";

import Calendly from "./calendly";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-s bg-[size:14px_24px] py-16">
      <Navbar />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] mx-auto mt-14 flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-2/5">
          <h1 className="pt-10 text-3xl font-semibold md:text-4xl">Let&apos;s Meet with Sales</h1>
          <p className="py-4 text-base md:text-lg text-primary">
            We're excited to explore how we can help you grow your business. Book a meeting with our sales team to discuss your needs.
          </p>

          <h2 className="py-6 text-xl font-semibold md:text-2xl">Our Services</h2>

          {[{
            title: "Sales Consultation",
            description: "Discuss your business goals and discover solutions tailored for your success.",
          },
          {
            title: "Product Demo",
            description: "See a live demo of our product to understand how it can benefit your business.",
          },
          {
            title: "Enterprise Solutions",
            description: "Talk to our experts about custom enterprise solutions to scale your operations.",
          }].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 1.8 }}
              className="flex py-4 gap-x-4"
            >
              <PiCheckCircle className="rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
              <ul>
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <div className="text-primary">{item.description}</div>
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="md:w-1/2">
          <Calendly />
        </div>
      </div>
    </div>
  );
};

export default Meeting;
