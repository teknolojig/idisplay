"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content - Asymmetric Creative Layout */}
      <div className="relative content-container py-12">
        {/* Hero Section with Logo & Social */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 pb-8 border-b border-white/20">
          {/* Logo - Left */}
          <Link href="/" className="inline-block">
            <Image
              src="/images/idisplay-logo-white.png"
              alt="iDisplay"
              width={200}
              height={46}
              className="h-12 w-auto"
            />
          </Link>

          {/* Social Links - Right */}
          <div className="flex gap-2">
            <a href="https://www.facebook.com/iDisplayTeknoloji" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
            </a>
            <a href="https://twitter.com/idisplay_tr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/-idisplay-g-r-nt-leme-teknolojileri-a-" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
            </a>
            <a href="https://www.instagram.com/idisplayteknoloji/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01 M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z" /></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCou57xxObntR5Zy1ExKbl4w" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l0-6.53 5.75 3.27z" /></svg>
            </a>
          </div>
        </div>

        {/* Main Content - Overlapping Cards */}
        <div className="relative mb-10">
          {/* Left Side - Company Info & Products */}
          <div className="lg:w-[58%] mb-8 lg:mb-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                2012 yılında kurulan iDisplay, kendi markaları PlatPlay ve iSpot ile kurumların iletişim faaliyetlerini daha verimli yürütebilmeleri için ihtiyaç duydukları profesyonel ses ve dijital görüntüleme sistemleri konularında özel çözümler sunan bir sistem entegratörüdür.
              </p>

              <h4 className="text-lg font-black mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Ürünler
              </h4>
              <div className="columns-1 md:columns-2 gap-4 space-y-1.5">
                <Link href="/led-ekran-cozumleri" className="block text-white/70 hover:text-white hover:translate-x-1 transition-all text-xs">→ LED Ekran Çözümleri</Link>
                <Link href="/interaktif-ekranlar" className="block text-white/70 hover:text-white hover:translate-x-1 transition-all text-xs">→ İnteraktif Ekranlar</Link>
                <Link href="/videowall" className="block text-white/70 hover:text-white hover:translate-x-1 transition-all text-xs">→ Videowall</Link>
                <Link href="/profesyonel-ses-ve-goruntu-sistemleri" className="block text-white/70 hover:text-white hover:translate-x-1 transition-all text-xs">→ Profesyonel Ses ve Görüntü</Link>
                <Link href="/digital-signage-kurumsal-tv" className="block text-white/70 hover:text-white hover:translate-x-1 transition-all text-xs">→ Digital Signage</Link>
                <Link href="/platplay-urun-ve-cozumleri" className="block text-white/70 hover:text-white hover:translate-x-1 transition-all text-xs">→ PlatPlay Çözümleri</Link>
                <Link href="/video-konferans-cozumleri" className="block text-white/70 hover:text-white hover:translate-x-1 transition-all text-xs">→ Video Konferans</Link>
                <Link href="/otel-tv-cozumleri" className="block text-white/70 hover:text-white hover:translate-x-1 transition-all text-xs">→ Otel TV Çözümleri</Link>
                <Link href="/ispot-urun-ve-cozumleri" className="block text-white/70 hover:text-white hover:translate-x-1 transition-all text-xs">→ iSpot Çözümleri</Link>
              </div>
            </div>
          </div>

          {/* Right Side - Contact (Overlapping) */}
          <div className="lg:absolute lg:right-0 lg:top-6 lg:w-[45%]">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all shadow-2xl">
              <h4 className="text-lg font-black mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                İletişim
              </h4>
              <div className="space-y-3">
                <a href="mailto:info@idisplay.com.tr" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium">info@idisplay.com.tr</span>
                </a>

                <a href="tel:+902123560420" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium">+90 (212) 356-0420</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/iDisplay+Profesyonel+Ses+ve+Görüntü+Sistemleri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium leading-relaxed">Halide Edip Adıvar Mah. Sultan Sk. No:22 Kat:3 Mavi Plaza Şişli İstanbul</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Legal & Credit */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 text-xs text-white/50">
            {/* Left Side - Legal Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <Link href="/kisisel-verilerin-korunmasi" className="hover:text-white transition-colors">Kişisel Verilerin Korunması Kanunu</Link>
              <span>•</span>
              <Link href="/cerez-cookie-politikasi" className="hover:text-white transition-colors">Çerez Cookie Politikası</Link>
              <span>•</span>
              <Link href="/iso-27001-guvenlik-politikamiz" className="hover:text-white transition-colors">ISO 27001 Güvenlik Politikamız</Link>
              <span>•</span>
              <Link href="/iso-9001-kalite-politikamiz" className="hover:text-white transition-colors">ISO 9001 Kalite Politikamız</Link>
              <span>•</span>
              <Link href="/entegre-yonetim-sistemi-politikasi" className="hover:text-white transition-colors">Entegre Yönetim Sistemi Politikası</Link>
            </div>

            {/* Right Side - Copyright & Credit */}
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 flex-shrink-0">
              <span>© {currentYear} iDisplay Tüm Hakları Saklıdır</span>
              <a
                href="https://teknolojig.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors group"
              >
                <span>Web Tasarım ve SEO:</span>
                <Image
                  src="/images/teknolojig.svg"
                  alt="Teknolojig"
                  width={80}
                  height={16}
                  className="opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
