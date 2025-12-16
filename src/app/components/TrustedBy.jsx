"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedBy() {
  const companies = [
    {
      name: "ClaimBuddy",
      logo: "https://claimbuddy.in/images/logo.png",
    },
    {
      name: "Carelane",
      logo: "https://tse2.mm.bing.net/th/id/OIP.BBri9CFN5VWVWxudaEHzkQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Medfin",
      logo: "https://assets.medfin.in/static/assets-v3/common/images/medfin_logo.svg",
    },
    {
      name: "Aradhya Hospital",
      logo: "data:image/webp;base64,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",
    },
    {
      name: "Himalaya Hospitals",
      logo: "https://th.bing.com/th/id/OIP.cyRl01sTEvaxRcsokO9WRQHaHa?w=163&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
  ];

  return (
    <section className="bg-[#f0f4f8] py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#31415d] mb-2">
          Our Healthcare Partners
        </h2>

        <p className="text-gray-600 mb-10">
          Trusted by leading hospitals, clinics, and healthcare organizations.
        </p>

        {/* LOGO + TITLE CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10 place-items-center">
          {companies.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="
              bg-white 
              p-5 
              w-[160px]
              sm:w-[180px] 
              rounded-xl 
              border 
              border-gray-200 
              shadow-sm 
              hover:shadow-md 
              transition-all 
              duration-300 
              hover:scale-105
              flex 
              flex-col 
              items-center 
              text-center
            "
            >
              {/* FIXED SIZE LOGO */}
              <div className="w-[100px] h-[60px] flex items-center justify-center mb-2">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* TITLE */}
              <p className="text-[#31415d] font-semibold text-sm sm:text-[15px]">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
