"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import {
  NavigationMenu,
  MobileNavigationMenu,
} from "@/components/ui/navigation-menu";
import { navigationData } from "@/data/navigation";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Navbar
      className={isDropdownOpen || isSearchOpen ? "bg-white shadow-md" : ""}
      isExpanded={isDropdownOpen || isSearchOpen}
    >
      {({ visible }: { visible?: boolean }) => (
        <>
        {/* Desktop Navigation */}
        <NavBody visible={visible}>
        {() => {
          // Dropdown veya arama açıksa, her zaman visible=true gibi davran
          const effectiveVisible = visible || isDropdownOpen || isSearchOpen;

          return (
          <>
            <NavbarLogo visible={effectiveVisible} />
            <NavigationMenu
              items={navigationData.slice(0, -1)}
              visible={effectiveVisible}
              onDropdownOpen={setIsDropdownOpen}
            />
            <div className="flex items-center gap-2 relative z-50">
              {/* Arama Butonu */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`flex items-center justify-center transition-all duration-300 relative z-50 ${
                  effectiveVisible
                    ? "w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
                    : "w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
                }`}
                aria-label="Arama"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Bilgi Formu Button */}
              <Link
                href="/iletisim"
                className={`flex items-center gap-2 font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                  effectiveVisible
                    ? "w-10 h-10 rounded-full bg-primary-600 text-white hover:bg-primary-700 justify-center"
                    : "px-6 py-2.5 rounded-full bg-primary-600 text-white hover:bg-primary-700"
                }`}
              >
                {!effectiveVisible && (
                  <span className="text-sm uppercase tracking-wide whitespace-nowrap">
                    Bilgi Formu
                  </span>
                )}
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </Link>

              {/* Hemen Ara Button */}
              <a
                href="tel:+908502222200"
                className={`flex items-center gap-2 font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                  effectiveVisible
                    ? "w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 justify-center"
                    : "px-6 py-2.5 rounded-full bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {!effectiveVisible && (
                  <span className="text-sm uppercase tracking-wide whitespace-nowrap">
                    Hemen Ara
                  </span>
                )}
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
            </div>
          </>
        )}}
      </NavBody>

      {/* Arama Dropdown - Full Width Outside Navbar */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed left-0 right-0 z-50 bg-white shadow-xl border-b border-gray-200 overflow-hidden ${
                visible ? "top-[80px]" : "top-[100px]"
              }`}
            >
              <div className="content-container py-8">
                <div className="max-w-3xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Ürün, hizmet veya çözüm arayın..."
                      autoFocus
                      className="w-full pl-14 pr-14 py-5 text-lg border-2 border-gray-300 rounded-2xl focus:border-primary-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                    />
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">Popüler Aramalar:</span>
                    {["LED Ekran", "Videowall", "Ses Sistemi", "İnteraktif Ekran", "Video Konferans", "Digital Signage"].map((tag) => (
                      <button
                        key={tag}
                        className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-primary-50 hover:text-primary-600 rounded-full transition-all hover:scale-105"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <MobileNav visible={visible}>
        <>
          <MobileNavHeader>
            <NavbarLogo visible={visible} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              visible={visible}
            />
          </MobileNavHeader>
            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              <MobileNavigationMenu
                items={navigationData.slice(0, -1)}
                onClose={() => setIsMobileMenuOpen(false)}
              />
              {/* Mobile Action Buttons */}
              <div className="w-full space-y-2 border-t border-gray-200 pt-4">
                <Link
                  href="/iletisim"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <span className="text-sm uppercase">Bilgi Formu</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </Link>
                <a
                  href="tel:+908502222200"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <span className="text-sm uppercase">Hemen Ara</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </a>
              </div>
            </MobileNavMenu>
        </>
      </MobileNav>
        </>
      )}
    </Navbar>
  );
}
