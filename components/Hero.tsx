"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['led', 'videowall', 'conference', 'interactive', 'audio'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/herobg.jpg"
          alt="Professional Display Technology"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-900/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles - Static positions to avoid hydration mismatch */}
        {[
          { left: 10, top: 20 }, { left: 25, top: 50 }, { left: 40, top: 10 }, { left: 55, top: 70 },
          { left: 70, top: 30 }, { left: 85, top: 60 }, { left: 15, top: 80 }, { left: 30, top: 40 },
          { left: 45, top: 65 }, { left: 60, top: 15 }, { left: 75, top: 85 }, { left: 90, top: 45 },
          { left: 5, top: 55 }, { left: 20, top: 25 }, { left: 35, top: 75 }, { left: 50, top: 35 },
          { left: 65, top: 90 }, { left: 80, top: 5 }, { left: 95, top: 50 }, { left: 12, top: 95 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="content-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 150
              }}
              className="mb-8"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20"
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </motion.svg>
                2012'den Beri Güvenilir Çözüm Ortağınız
              </motion.span>
            </motion.div>

            {/* Main Heading with Animated Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 flex flex-col gap-2"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.2]">
                PROFESYONEL
              </span>
              <div className="flex flex-wrap items-center">
                <LayoutTextFlip
                  text=""
                  words={["GÖRÜNTÜ SİSTEMLERİ", "SES SİSTEMLERİ"]}
                  duration={4000}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base mb-10 text-white/90 leading-relaxed max-w-2xl"
            >
              Kendi markaları <span className="font-bold text-white">PlatPlay</span> ve <span className="font-bold text-white">iSpot</span> ile kurumların dijital görüntüleme ve ses sistemleri ihtiyaçlarına özel çözümler sunan sistem entegratörü
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                type: "spring",
                stiffness: 100
              }}
            >
              <Link
                href="/hakkimizda"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-900 bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-50"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Hakkımızda
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Visualizations Slider */}
          <div className="hidden lg:block relative">
            <AnimatePresence mode="wait">
              {currentSlide === 0 && <LEDScreenViz key="led" />}
              {currentSlide === 1 && <VideowallViz key="videowall" />}
              {currentSlide === 2 && <ConferenceViz key="conference" />}
              {currentSlide === 3 && <InteractiveViz key="interactive" />}
              {currentSlide === 4 && <AudioSystemViz key="audio" />}
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white w-8' : 'bg-white/40'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// LED Screen Visualization - Modern LED TV Display
const LEDScreenViz = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className="relative max-w-md mx-auto"
  >
    {/* Product Label */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="absolute -top-3 left-6 z-10 px-4 py-1.5 bg-primary-500 text-white text-xs font-bold rounded-full shadow-lg"
    >
      LED EKRAN ÇÖZÜMLERİ
    </motion.div>

    {/* LED TV Frame - Realistic Design */}
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl">
      {/* Screen Bezel */}
      <div className="relative bg-black rounded-2xl p-2 shadow-inner">
        {/* LED Display Screen */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-950 to-black rounded-xl overflow-hidden">
          {/* Dynamic Content Display */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.8) 0%, rgba(99, 102, 241, 0.6) 30%, rgba(0, 0, 0, 0.95) 70%)",
                "radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.8) 0%, rgba(236, 72, 153, 0.6) 30%, rgba(0, 0, 0, 0.95) 70%)",
                "radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.8) 0%, rgba(99, 102, 241, 0.6) 30%, rgba(0, 0, 0, 0.95) 70%)",
                "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.8) 0%, rgba(99, 102, 241, 0.6) 30%, rgba(0, 0, 0, 0.95) 70%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* LED Pixel Structure - Subtle */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(0,0,0,0.4) 1.5px, rgba(0,0,0,0.4) 2px),
                repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(0,0,0,0.4) 1.5px, rgba(0,0,0,0.4) 2px)
              `,
              backgroundSize: '3px 3px',
            }}
          />

          {/* Screen Reflection Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

          {/* Power LED Indicator */}
          <motion.div
            className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Display Info Overlay */}
          <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
            <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[8px] text-white/80 font-mono">4K HDR</div>
            <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[8px] text-white/80 font-mono">3840×2160</div>
          </div>
        </div>
      </div>

      {/* LED TV Stand/Base */}
      <div className="mt-3 flex justify-center">
        <div className="w-20 h-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full shadow-lg" />
      </div>

      {/* Specs Bar */}
      <div className="mt-4 flex items-center justify-between px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-white/70 text-xs font-semibold">P1.5 LED Display</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-white/50 text-xs">UHD</span>
        </div>
      </div>
    </div>
  </motion.div>
);

// Videowall Visualization
const VideowallViz = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className="relative max-w-md mx-auto"
  >
    {/* Product Label */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="absolute -top-3 left-6 z-10 px-4 py-1.5 bg-primary-500 text-white text-xs font-bold rounded-full shadow-lg"
    >
      Videowall
    </motion.div>
    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
      {/* 3x3 Videowall Grid */}
      <div className="grid grid-cols-3 gap-0.5 mb-3 bg-gray-900/20 p-2 rounded-xl">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="relative aspect-video bg-gradient-to-br from-primary-400/30 to-primary-600/30 rounded overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  `linear-gradient(${45 + i * 40}deg, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)`,
                  `linear-gradient(${45 + i * 40 + 180}deg, rgba(168, 85, 247, 0.3) 0%, rgba(99, 102, 241, 0.3) 100%)`,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Info Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-white/5 rounded-lg">
        <div className="flex gap-1.5 items-center">
          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
          </svg>
          <span className="text-white/60 text-xs">3x3</span>
        </div>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 h-4 bg-white/30 rounded"
              animate={{ height: [16, 8, 16] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

// Video Conference Visualization
const ConferenceViz = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className="relative max-w-md mx-auto"
  >
    {/* Product Label */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="absolute -top-3 left-6 z-10 px-4 py-1.5 bg-primary-500 text-white text-xs font-bold rounded-full shadow-lg"
    >
      Video Konferans
    </motion.div>
    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
      {/* Main Video Feed */}
      <div className="relative aspect-video bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-xl overflow-hidden border border-white/10 mb-2">
        {/* Camera/Mic Icons */}
        <div className="absolute top-2 left-2 flex gap-1">
          <div className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </div>

        {/* Waveform */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-0.5">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 bg-green-400 rounded-full"
              animate={{ height: [4, 12, 4] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Participant Thumbnails */}
      <div className="grid grid-cols-4 gap-1 mb-3">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="relative aspect-video bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/10"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-white/5 rounded-lg">
        <div className="flex gap-1.5 items-center">
          <motion.div className="w-2 h-2 rounded-full bg-green-400" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
          <span className="text-white/60 text-xs">Live</span>
        </div>
        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    </div>
  </motion.div>
);

// Interactive Screen Visualization
const InteractiveViz = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className="relative max-w-md mx-auto"
  >
    {/* Product Label */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="absolute -top-3 left-6 z-10 px-4 py-1.5 bg-primary-500 text-white text-xs font-bold rounded-full shadow-lg"
    >
      İnteraktif Ekranlar
    </motion.div>
    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
      {/* Interactive Display */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-xl overflow-hidden border border-white/10 mb-3">
        {/* Touch Points */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 rounded-full border-2 border-white/60"
            style={{
              top: `${40 + i * 20}%`,
              left: `${30 + i * 30}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}

        {/* Hand Icon */}
        <motion.div
          className="absolute top-1/3 left-1/3"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg className="w-8 h-8 text-white/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
          </svg>
        </motion.div>

        {/* Progress Bars */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white/50 rounded-full"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-white/5 rounded-lg">
        <div className="flex gap-1.5 items-center">
          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span className="text-white/60 text-xs">Touch</span>
        </div>
        <motion.div
          className="w-2 h-2 rounded-full bg-green-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  </motion.div>
);

// Audio System Visualization
const AudioSystemViz = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className="relative max-w-md mx-auto"
  >
    {/* Product Label */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="absolute -top-3 left-6 z-10 px-4 py-1.5 bg-primary-500 text-white text-xs font-bold rounded-full shadow-lg"
    >
      Profesyonel Ses Sistemleri
    </motion.div>
    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
      {/* Audio Visualizer Display */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-xl overflow-hidden border border-white/10 mb-3">
        {/* Circular Audio Visualizer */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32">
            {/* Animated Circles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-primary-400/40 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                }}
              />
            ))}
            {/* Center Speaker Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-12 h-12 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Frequency Bars */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-center gap-0.5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-primary-400/60 rounded-t"
              animate={{
                height: [`${20 + (i % 5) * 2}%`, `${60 + (i % 8) * 5}%`, `${20 + (i % 5) * 2}%`],
              }}
              transition={{
                duration: 0.5 + (i % 3) * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Sound Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 100">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50"
            fill="none"
            stroke="white"
            strokeWidth="2"
            animate={{
              d: [
                "M0,50 Q25,30 50,50 T100,50 T150,50 T200,50",
                "M0,50 Q25,70 50,50 T100,50 T150,50 T200,50",
                "M0,50 Q25,30 50,50 T100,50 T150,50 T200,50",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Control Panel */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {/* Volume Slider */}
        <div className="col-span-2 flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
          <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
          </svg>
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary-400 rounded-full"
              initial={{ width: "70%" }}
              animate={{ width: ["70%", "85%", "70%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Equalizer Indicator */}
        <div className="flex items-center justify-center gap-0.5 px-2 py-2 bg-white/5 rounded-lg">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 bg-white/30 rounded"
              animate={{ height: [8, 16, 8] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-white/5 rounded-lg">
        <div className="flex gap-1.5 items-center">
          <motion.div
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-white/60 text-xs">Dolby Atmos</span>
        </div>
        <span className="text-white/40 text-xs">5.1ch</span>
      </div>
    </div>
  </motion.div>
);
