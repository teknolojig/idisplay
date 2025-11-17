"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "motion/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
        }}
        loop={true}
        className="h-full w-full"
      >
        {/* Slide 1 - Profesyonel Ses ve Görüntü Sistemleri */}
        <SwiperSlide>
          <div className="relative h-full w-full bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white z-10"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  >
                    PROFESYONEL SES ve GÖRÜNTÜ SİSTEMLERİ
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl md:text-2xl mb-8 text-primary-50 leading-relaxed"
                  >
                    2012 yılında kurulan iDisplay, kendi markaları PlatPlay ve iSpot ile kurumların iletişim faaliyetlerini daha verimli yürütebilmeleri için ihtiyaç duydukları profesyonel ses ve dijital görüntüleme sistemleri konularında özel çözümler sunan bir sistem entegratörüdür.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      href="/hakkimizda"
                      className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center"
                    >
                      Hakkımızda
                    </Link>
                    <Link
                      href="/iletisim"
                      className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 border-2 border-white/20 hover:border-white/40 hover:-translate-y-1 text-center"
                    >
                      İletişime Geçin
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Animated SVG Illustration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative hidden lg:block"
                >
                  <svg
                    viewBox="0 0 800 600"
                    className="w-full h-auto drop-shadow-2xl"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background circles */}
                    <motion.circle
                      cx="400"
                      cy="300"
                      r="250"
                      fill="rgba(255,255,255,0.05)"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.05, 0.1, 0.05],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Monitor/Screen */}
                    <motion.rect
                      x="200"
                      y="150"
                      width="400"
                      height="280"
                      rx="20"
                      fill="white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    />
                    <rect
                      x="220"
                      y="170"
                      width="360"
                      height="240"
                      rx="10"
                      fill="#1e40af"
                    />

                    {/* Screen content - waves */}
                    <motion.path
                      d="M 220 300 Q 320 250, 420 300 T 620 300"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      animate={{
                        d: [
                          "M 220 300 Q 320 250, 420 300 T 620 300",
                          "M 220 300 Q 320 350, 420 300 T 620 300",
                          "M 220 300 Q 320 250, 420 300 T 620 300",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Sound waves */}
                    <motion.circle
                      cx="150"
                      cy="300"
                      r="30"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      animate={{
                        r: [30, 60, 30],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <motion.circle
                      cx="650"
                      cy="300"
                      r="30"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      animate={{
                        r: [30, 60, 30],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                    />

                    {/* Stand */}
                    <rect x="370" y="430" width="60" height="80" rx="5" fill="white" />
                    <rect x="320" y="500" width="160" height="20" rx="10" fill="white" />

                    {/* Floating icons */}
                    <motion.g
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <circle cx="100" cy="200" r="40" fill="rgba(255,255,255,0.2)" />
                      <path
                        d="M 100 180 L 100 220 M 80 200 L 120 200"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </motion.g>

                    <motion.g
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <circle cx="700" cy="200" r="40" fill="rgba(255,255,255,0.2)" />
                      <polygon
                        points="690,200 710,190 710,210"
                        fill="white"
                      />
                    </motion.g>
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - LED Ekran Çözümleri */}
        <SwiperSlide>
          <div className="relative h-full w-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white z-10"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  >
                    LED EKRAN ÇÖZÜMLERİ
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl md:text-2xl mb-8 text-primary-50 leading-relaxed"
                  >
                    Yüksek çözünürlük, parlak görüntü kalitesi ve enerji verimliliği ile LED ekran teknolojilerinde öncü çözümler sunuyoruz. İç mekan ve dış mekan uygulamaları için ideal LED ekran sistemleri.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      href="/led-ekran-cozumleri"
                      className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center"
                    >
                      Detaylı Bilgi
                    </Link>
                    <Link
                      href="/projeler"
                      className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 border-2 border-white/20 hover:border-white/40 hover:-translate-y-1 text-center"
                    >
                      Projelerimiz
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative hidden lg:block"
                >
                  <svg
                    viewBox="0 0 800 600"
                    className="w-full h-auto drop-shadow-2xl"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* LED Screen Grid */}
                    <motion.rect
                      x="150"
                      y="100"
                      width="500"
                      height="400"
                      rx="15"
                      fill="white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    />

                    {/* LED Pixels Animation */}
                    {[...Array(8)].map((_, row) =>
                      [...Array(12)].map((_, col) => (
                        <motion.circle
                          key={`led-${row}-${col}`}
                          cx={190 + col * 38}
                          cy={140 + row * 45}
                          r="12"
                          fill={`hsl(${(row * col * 30) % 360}, 70%, 60%)`}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: (row + col) * 0.1,
                          }}
                        />
                      ))
                    )}

                    {/* Glow effect */}
                    <motion.rect
                      x="150"
                      y="100"
                      width="500"
                      height="400"
                      rx="15"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Digital Signage */}
        <SwiperSlide>
          <div className="relative h-full w-full bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white z-10"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  >
                    DIGITAL SIGNAGE ÇÖZÜMLER
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl md:text-2xl mb-8 text-primary-50 leading-relaxed"
                  >
                    Kurumsal iletişiminizi dijitalleştirin. PlatPlay ve iSpot yazılımlarımız ile içerik yönetimi, uzaktan kontrol ve etkileşimli dijital tabela çözümleri sunuyoruz.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      href="/digital-signage-kurumsal-tv"
                      className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center"
                    >
                      Çözümlerimiz
                    </Link>
                    <Link
                      href="/platplay-urun-ve-cozumleri"
                      className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 border-2 border-white/20 hover:border-white/40 hover:-translate-y-1 text-center"
                    >
                      PlatPlay
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative hidden lg:block"
                >
                  <svg
                    viewBox="0 0 800 600"
                    className="w-full h-auto drop-shadow-2xl"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Multiple screens */}
                    <motion.g
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <rect
                        x="100"
                        y="150"
                        width="180"
                        height="120"
                        rx="10"
                        fill="white"
                      />
                      <rect x="110" y="160" width="160" height="100" rx="5" fill="#1e40af" />
                    </motion.g>

                    <motion.g
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <rect
                        x="310"
                        y="120"
                        width="180"
                        height="120"
                        rx="10"
                        fill="white"
                      />
                      <rect x="320" y="130" width="160" height="100" rx="5" fill="#2563eb" />
                    </motion.g>

                    <motion.g
                      animate={{
                        y: [0, -12, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <rect
                        x="520"
                        y="180"
                        width="180"
                        height="120"
                        rx="10"
                        fill="white"
                      />
                      <rect x="530" y="190" width="160" height="100" rx="5" fill="#3b82f6" />
                    </motion.g>

                    {/* Connection lines */}
                    <motion.line
                      x1="190"
                      y1="270"
                      x2="400"
                      y2="350"
                      stroke="white"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      animate={{
                        strokeDashoffset: [0, -20],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.line
                      x1="400"
                      y1="240"
                      x2="400"
                      y2="350"
                      stroke="white"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      animate={{
                        strokeDashoffset: [0, -20],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.line
                      x1="610"
                      y1="300"
                      x2="400"
                      y2="350"
                      stroke="white"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      animate={{
                        strokeDashoffset: [0, -20],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Central hub */}
                    <motion.circle
                      cx="400"
                      cy="370"
                      r="40"
                      fill="white"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <circle cx="400" cy="370" r="25" fill="#1e40af" />

                    {/* Cloud icon */}
                    <path
                      d="M 380 360 Q 380 350, 390 350 Q 390 340, 400 340 Q 410 340, 410 350 Q 420 350, 420 360 Q 420 370, 410 370 L 390 370 Q 380 370, 380 360"
                      fill="white"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom pagination styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 40px !important;
        }
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 8px !important;
        }
      `}</style>
    </div>
  );
}
