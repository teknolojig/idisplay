export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
  {
    name: "Kurumsal",
    href: "#",
    children: [
      {
        name: "Hakkımızda",
        href: "/hakkimizda",
      },
      {
        name: "Basında Biz",
        href: "/basinda-biz",
      },
    ],
  },
  {
    name: "Ürünler",
    href: "#",
    children: [
      {
        name: "LED Ekran Çözümleri",
        href: "/led-ekran-cozumleri",
      },
      {
        name: "İnteraktif Ekranlar",
        href: "/interaktif-ekranlar",
      },
      {
        name: "Videowall",
        href: "/videowall",
      },
      {
        name: "Profesyonel Ses ve Görüntü Sistemleri",
        href: "/profesyonel-ses-ve-goruntu-sistemleri",
      },
      {
        name: "Digital Signage (Kurumsal TV)",
        href: "/digital-signage-kurumsal-tv",
      },
      {
        name: "PlatPlay Ürün ve Çözümleri",
        href: "/platplay-urun-ve-cozumleri",
      },
      {
        name: "vDisplay",
        href: "/vdisplay",
      },
      {
        name: "Video Konferans Çözümleri",
        href: "/video-konferans-cozumleri",
      },
      {
        name: "Otel TV Çözümleri",
        href: "/otel-tv-cozumleri",
      },
      {
        name: "iSpot Ürün ve Çözümleri",
        href: "/ispot-urun-ve-cozumleri",
      },
    ],
  },
  {
    name: "Projeler",
    href: "/projeler",
  },
  {
    name: "Referanslar",
    href: "/sektore-gore-referanslar",
  },
  {
    name: "Blog",
    href: "#",
    children: [
      {
        name: "Yazılar",
        href: "/yazilar",
      },
      {
        name: "Videolar",
        href: "/videolar",
      },
    ],
  },
  {
    name: "İletişim",
    href: "/iletisim",
  },
];
