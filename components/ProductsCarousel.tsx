"use client";

import React, { useRef, useState, useEffect } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// ProductCard with FocusCards-style hover blur effect
const ProductCard = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl relative bg-gray-100 overflow-hidden h-[32rem] w-full transition-all duration-300 ease-out cursor-pointer",
        // Apply blur and scale to ALL cards except the hovered one
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-start p-6">
        <div className="text-xs font-semibold text-primary-300 mb-2 uppercase tracking-wide">
          {card.category}
        </div>
        <div className="text-xl md:text-2xl font-bold text-white mb-2">
          {card.title}
        </div>
        {/* Description - always visible but with transition */}
        <div className={cn(
          "text-sm text-gray-200 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}>
          {card.description}
        </div>
      </div>
    </div>
  )
);

ProductCard.displayName = "ProductCard";

export default function ProductsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (carouselRef.current) {
        carouselRef.current.style.cursor = 'grab';
      }
    }
  };

  useEffect(() => {
    checkScrollability();
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  }, []);

  return (
    <div className="w-full py-20 bg-white">
      <div className="content-container">
        <div className="flex justify-between items-start mb-10">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 text-left">
              Ürünlerimiz
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium text-left">
              Dijital görüntüleme ve ses sistemleri alanında en son teknolojiye sahip ürünlerimizi keşfedin
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
            >
              <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
            </button>
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
              onClick={handleScrollRight}
              disabled={!canScrollRight}
            >
              <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] select-none"
        onScroll={checkScrollability}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex gap-6 px-4 min-w-max">
          {productsData.map((card, index) => (
            <div key={card.src} className="w-[28rem] flex-shrink-0">
              <ProductCard card={card} index={index} hovered={hovered} setHovered={setHovered} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const productsData = [
  {
    category: "Görüntü Sistemleri",
    title: "LED Ekran Çözümleri",
    description: "Yüksek çözünürlük, parlak görüntü kalitesi ve enerji verimliliği ile LED ekran teknolojilerinde öncü çözümler.",
    src: "/images/product/ledekran.jpg",
  },
  {
    category: "İnteraktif Teknoloji",
    title: "İnteraktif Ekranlar",
    description: "Dokunmatik teknoloji ile gelişmiş kullanıcı deneyimi sunan interaktif ekranlar. Eğitim ve toplantı alanlarında maksimum verimlilik.",
    src: "/images/product/interaktifekran.webp",
  },
  {
    category: "Görüntü Duvarları",
    title: "Videowall",
    description: "Çok ekranlı görüntü duvarları ile büyük ölçekli etkileyici görsel sunumlar. Kontrol merkezleri ve AVM'ler için profesyonel çözümler.",
    src: "/images/product/videowall.png",
  },
  {
    category: "Ses & Görüntü",
    title: "Profesyonel Ses ve Görüntü Sistemleri",
    description: "Konferans salonları ve kurumsal alanlar için entegre ses görüntü sistemleri. Kristal netliğinde ses kalitesi ve profesyonel performans.",
    src: "/images/product/ses.jpg",
  },
  {
    category: "Yazılım Çözümleri",
    title: "Digital Signage",
    description: "Bulut tabanlı dijital tabela yönetim sistemi. İçeriklerinizi planlayın ve tüm ekranlarda eş zamanlı yayınlayın.",
    src: "/images/product/digitalsignage.jpg",
  },
  {
    category: "Yazılım Platformu",
    title: "PlatPlay",
    description: "iDisplay'in kendi geliştirdiği dijital içerik yönetim platformu. Kolay kullanım ve güçlü özellikler.",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
  },
  {
    category: "Sanal Çözümler",
    title: "vDisplay",
    description: "Sanal etkinlikler ve dijital fuarlar için platformumuz. Hibrit etkinliklerinizi profesyonelce yönetin.",
    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2960&auto=format&fit=crop",
  },
  {
    category: "İletişim Sistemleri",
    title: "Video Konferans",
    description: "Kurumsal video konferans sistemleri. Ekiplerinizi dünyanın her yerinden bir araya getirin.",
    src: "/images/product/videokonferans.jpg",
  },
  {
    category: "Otelcilik Çözümleri",
    title: "Otel TV Çözümleri",
    description: "Otel odaları için özel tasarlanmış akıllı TV sistemleri. Misafirlerinize premium eğlence deneyimi.",
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2832&auto=format&fit=crop",
  },
  {
    category: "Yazılım Platformu",
    title: "iSpot",
    description: "Lokasyon bazlı dijital pazarlama platformu. Mağaza içi deneyimi dijitalleştirin ve müşterilerinizle etkileşimi artırın.",
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2940&auto=format&fit=crop",
  },
];
