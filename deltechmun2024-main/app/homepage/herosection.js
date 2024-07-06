"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Slider from "./slider";

const HeroSection = () => {
  const slides = [
    {
      url: "/img/heroCrousel/hero.png",
      title: " DELTECH MUN'24",
    },
    {
      url: "/img/heroCrousel/polaroid.jpg",
      title: "Model United nations conference",
    },
  ];

  return <Slider></Slider>;
};

export default HeroSection;
