"use client";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { fadeIn } from "@/app/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MembersCard = ({ member, index, campus }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.2, 0.4)}
      initial="hidden"
      animate="show"
    >
      <div
        className="flex flex-col justify-between items-center bg-white w-[200px] rounded-tr-[48px] border border-[#C5C5C5] shadow-md 
          hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] h-[340px]"
      >
        <div className="flex flex-col justify-evenly items-center">
          <Image
            src={member?.image || "/img/avatar.png"}
            alt="Member-img"
            width={150}
            height={150}
            className="my-4 h-[150px] object-cover rounded-full"
            draggable="false"
          />
          <div className={`flex flex-col px-3`}>
            <p className="text-[#000000] font-bold text-center pb-1 font-merriweather capitalize">
              {member?.name}
            </p>
            <p className={` text-[#7B7474] text-center mx-1 font-serif capitalize`}>
              {member?.position}
            </p>
            <p
              className={`${
                campus == "EAST CAMPUS" ? "block" : "hidden"
              } text-[#7B7474] text-center font-sans`}
            >
              {campus}
            </p>
          </div>
        </div>
        <Link
          href={member?.linkedin || "https://www.linkedin.com/company/deltechdebsoc/mycompany/"}
          target="_blank"
          className="py-3 px-6 mx-auto w-fit duration-500 text-[#1341EC] border-2 border-[#1341EC] rounded-xl mb-4
      hover:bg-gradient-to-t from-[#1341EC] to-[#142e8a] hover:text-[#fff]"
        >
          <div className="flex flex-row items-center justify-center gap-1 font-serif tracking-wide">
            <AiFillLinkedin size={20} />
            <span> View Profile </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default MembersCard;
// hover:border-[#1341EC]
// "text-[#7B7474] text-center" #040b23
