"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export interface MenuItem {
  name: string;
  href: string;
  children?: MenuItem[];
}

interface NavigationMenuProps {
  items: MenuItem[];
  visible?: boolean;
  className?: string;
  onDropdownOpen?: (isOpen: boolean) => void;
}

// Ürün görselleri mapping
const productImages: Record<string, string> = {
  "LED Ekran Çözümleri": "/images/product/ledekran.jpg",
  "İnteraktif Ekranlar": "/images/product/interaktifekran.webp",
  "Videowall": "/images/product/videowall.png",
  "Profesyonel Ses ve Görüntü Sistemleri": "/images/product/ses.jpg",
  "Digital Signage (Kurumsal TV)": "/images/product/digitalsignage.jpg",
  "PlatPlay Ürün ve Çözümleri": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
  "vDisplay": "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2960&auto=format&fit=crop",
  "Video Konferans Çözümleri": "/images/product/videokonferans.jpg",
  "Otel TV Çözümleri": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2832&auto=format&fit=crop",
  "iSpot Ürün ve Çözümleri": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2940&auto=format&fit=crop",
};

export const NavigationMenu = ({
  items,
  visible,
  className,
  onDropdownOpen,
}: NavigationMenuProps) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleDropdownChange = (index: number | null) => {
    setActiveDropdown(index);
    onDropdownOpen?.(index !== null);
  };

  return (
    <div
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex pointer-events-none",
        className
      )}
      onMouseLeave={() => {
        handleDropdownChange(null);
        setHovered(null);
      }}
    >
      {items.map((item, idx) => (
        <div
          key={`nav-item-${idx}`}
          className="relative pointer-events-auto"
          onMouseEnter={() => {
            setHovered(idx);
            if (item.children) {
              handleDropdownChange(idx);
            }
          }}
          onMouseLeave={() => {
            if (!item.children) {
              setHovered(null);
            }
          }}
        >
          {item.children ? (
            <button
              className={cn(
                "relative transition-colors flex items-center gap-1",
                visible
                  ? "px-2 py-1.5 text-gray-700 hover:text-primary-600"
                  : "px-4 py-2 text-white hover:text-primary-100"
              )}
            >
              {(hovered === idx || activeDropdown === idx) && (
                <motion.div
                  layoutId="hovered"
                  className={cn(
                    "absolute inset-0 h-full w-full rounded-full",
                    visible ? "bg-gray-100" : "bg-white/10"
                  )}
                />
              )}
              <span className="relative z-20 uppercase">{item.name}</span>
              <IconChevronDown
                className={cn(
                  "w-4 h-4 transition-transform relative z-20",
                  activeDropdown === idx && "rotate-180"
                )}
              />
            </button>
          ) : (
            <Link
              href={item.href}
              className={cn(
                "relative transition-colors block",
                visible
                  ? "px-2 py-1.5 text-gray-700 hover:text-primary-600"
                  : "px-4 py-2 text-white hover:text-primary-100"
              )}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className={cn(
                    "absolute inset-0 h-full w-full rounded-full",
                    visible ? "bg-gray-100" : "bg-white/10"
                  )}
                />
              )}
              <span className="relative z-20 uppercase">{item.name}</span>
            </Link>
          )}

          {/* Dropdown Menu / Mega Menu */}
          <AnimatePresence>
            {item.children && activeDropdown === idx && (
              <>
                {item.name === "Ürünler" ? (
                  // Mega Menu for Products - 2 Column Grid
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "fixed left-0 right-0 z-50 bg-white shadow-xl border-b border-gray-200 overflow-hidden",
                      visible ? "top-[64px] pt-2" : "top-[80px] pt-6"
                    )}
                  >
                    <div className="content-container pb-6">
                      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {item.children.map((child, childIdx) => {
                          // Ürün ikonları
                          const icons: Record<number, string> = {
                            0: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", // LED Ekran
                            1: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", // İnteraktif
                            2: "M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z", // Videowall
                            3: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z", // Ses
                            4: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", // Digital Signage
                            5: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z", // PlatPlay
                            6: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", // vDisplay
                            7: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", // Video Konferans
                            8: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", // Otel TV
                            9: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", // iSpot
                          };

                          return (
                            <Link
                              key={`mega-menu-${idx}-${childIdx}`}
                              href={child.href}
                              className="group flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-200"
                            >
                              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[childIdx]} />
                                </svg>
                              </div>
                              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                {child.name}
                              </h3>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // Regular Dropdown for other menus
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 z-50 pt-2"
                  >
                    <div className="bg-white rounded-xl shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05)] min-w-[240px] py-2">
                      {item.children.map((child, childIdx) => (
                        <Link
                          key={`dropdown-${idx}-${childIdx}`}
                          href={child.href}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm whitespace-nowrap capitalize"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

// Mobile Navigation Menu Component
interface MobileNavigationMenuProps {
  items: MenuItem[];
  onClose: () => void;
}

export const MobileNavigationMenu = ({
  items,
  onClose,
}: MobileNavigationMenuProps) => {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);

  const toggleDropdown = (idx: number) => {
    setOpenDropdowns((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {items.map((item, idx) => (
        <div key={`mobile-nav-${idx}`} className="w-full">
          {item.children ? (
            <>
              <button
                onClick={() => toggleDropdown(idx)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                <span className="uppercase">{item.name}</span>
                <IconChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    openDropdowns.includes(idx) && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openDropdowns.includes(idx) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 py-2 space-y-1">
                      {item.children.map((child, childIdx) => (
                        <Link
                          key={`mobile-dropdown-${idx}-${childIdx}`}
                          href={child.href}
                          onClick={onClose}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors capitalize"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link
              href={item.href}
              onClick={onClose}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium uppercase"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
