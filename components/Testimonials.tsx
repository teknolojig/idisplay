"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  shortText: string;
  fullText: string;
  rating: number;
}

const allTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayhan KARAYEL",
    position: "Teknoloji ve Altyapı Projeler Müdürü",
    company: "CarrefourSA",
    image: "/images/deneyimler/carrefour.jpg",
    shortText: "iDisplay Digital Signage teknolojilerinin kullanılmasıyla sağlanacak olan yenilikçi ve teknolojik firma imajına ve iletişim gücüne her firmanın ihtiyacı olduğunu düşünüyoruz.",
    fullText: "iDisplay Digital Signage teknolojilerinin kullanılmasıyla sağlanacak olan yenilikçi ve teknolojik firma imajına ve iletişim gücüne her firmanın ihtiyacı olduğunu düşünüyoruz. Geliştirilen proje ile mağazanın, yeni imajı ve teknolojik görünümüne yaptığı katkı müşteriler tarafından da çok daha fark edilebilir olmasının dışında merkezi yönetim kolaylığı da ciddi avantaj sağlamaktadır. Kurulan sistem ile tüm içeriklerin dinamik bir biçimde yapılabilmesi müşterilerle iletişiminin kalitesini arttırmaktadır.",
    rating: 5,
  },
  {
    id: 2,
    name: "Davut Toğbay",
    position: "Mağaza Görsel Sorumlusu",
    company: "Fix Gross & Yunus Market",
    image: "/images/deneyimler/fixgross.webp",
    shortText: "Fix Gross ve Yunus Market olarak mağazalarımızda modernleşme ve müşteri deneyimini geliştirme yolunda attığımız önemli adımlardan biri dijital ekran sistemlerini hayata geçirmek oldu.",
    fullText: "Fix Gross ve Yunus Market olarak mağazalarımızda modernleşme ve müşteri deneyimini geliştirme yolunda attığımız önemli adımlardan biri dijital ekran sistemlerini hayata geçirmek oldu. Bu noktada iDisplay ile iş birliği yapmaktan memnuniyet duyduk. Kurulum aşamasında gösterdikleri profesyonellik ve sonrasında sundukları kesintisiz destek sayesinde ekranlarımızı sorunsuz bir şekilde kullanıyoruz. Ekranların kattığı görsellik ve dinamizm, müşterilerimizin ilgisini çekiyor ve alışveriş deneyimlerini daha keyifli hale getiriyor. Çözüm odaklı yaklaşımları ve hızlı geri dönüşleri için iDisplay ekibine teşekkür eder, dijitalleşme yolunda birlikte yeni projelere imza atmayı dileriz.",
    rating: 5,
  },
  {
    id: 3,
    name: "Merve ŞENER ERDİNÇ",
    position: "Marketing Manager",
    company: "Sephora",
    image: "/images/deneyimler/sephora.jpg",
    shortText: "iDisplay ile başlattığımız projemiz kapsamında, mağazalarımızda kullandığımız 50'den fazla ve farklı büyüklükteki profesyonel ekranlarımız üzerinden güçlü bir alışveriş deneyimi sunabilme imkanına sahip olduk.",
    fullText: "iDisplay ile başlattığımız projemiz kapsamında, mağazalarımızda kullandığımız 50'den fazla ve farklı büyüklükteki profesyonel ekranlarımız üzerinden, mağazamızı ziyaret eden tüm müşterilerimize güçlü ve son derece etkileyici bir ortamda alışveriş deneyimi sunabilme imkanına sahip olduk.",
    rating: 5,
  },
  {
    id: 4,
    name: "Yakup Bayrakdar",
    position: "Kıdemli Ticari Pazarlama Uzmanı",
    company: "Atasun Optik",
    image: "/images/deneyimler/atasun.webp",
    shortText: "Mağazalarımızda dijitalleşme süreçlerimizi güçlendirmek amacıyla iDisplay ile uzun süredir iş birliği yürütüyoruz. Türkiye genelindeki Atasun Optik şubelerinde kullanılan LCD ve LED Wall uygulamaları ile mağaza içi iletişimimizi daha dinamik bir hale getirdik.",
    fullText: "Mağazalarımızda dijitalleşme süreçlerimizi güçlendirmek amacıyla iDisplay ile uzun süredir iş birliği yürütüyoruz. Türkiye genelindeki Atasun Optik şubelerinde kullanılan LCD ve LED Wall uygulamaları ile mağaza içi iletişimimizi daha dinamik bir hale getirdik. Ayrıca PlatPlay altyapısı üzerinden yönetilen 370 aktif ekran lisansımızla içeriklerimizi merkezi olarak kontrol edebiliyor, marka mesajlarımızı tutarlı biçimde iletebiliyoruz. Bunun yanı sıra, genel merkezimizdeki toplantı odalarında gerçekleştirilen görüntü ve video konferans çözümleri de çalışma ortamımıza önemli kolaylıklar sağladı. iDisplay ekibine proje sürecindeki destekleri için teşekkür ediyor, iş birliğimizin ilerleyen dönemde de devam etmesini diliyoruz.",
    rating: 5,
  },
  {
    id: 5,
    name: "Cumhur GÖKÇELER",
    position: "Yönetici",
    company: "Garanti BBVA",
    image: "/images/deneyimler/garanti.jpg",
    shortText: "2015 yılından beri iDisplay ile beraber Türkiye genelindeki banka şubelerimiz, İstanbul'daki Genel Müdürlük binamız ve Garanti Teknoloji'nin Pendik'teki yeni binamızda digital signage ve profesyonel görüntüleme sistemleri projeleri yapmaktayız.",
    fullText: "2015 yılından beri iDisplay ile beraber Türkiye genelindeki banka şubelerimiz, İstanbul'daki Genel Müdürlük binamız ve Garanti Teknoloji'nin Pendik'teki yeni binamızda digital signage ve profesyonel görüntüleme sistemleri projeleri yapmaktayız. iDisplay'in hızlı aksiyon alabilen dinamik yapısı, PlatPlay yazılım çözümlerinin güçlü ve geliştirebilir yapısı, projelerimizin başından sonuna kadar büyük bir titizlik içinde ve uzman bir ekiple sorunsuz hizmet sunması senelerdir tedarikçimiz olma nedenleri arasındadır.",
    rating: 5,
  },
  {
    id: 6,
    name: "Onur Altuntaç",
    position: "Facility Management & Services Professional",
    company: "Siemens",
    image: "/images/deneyimler/siemens.jpg",
    shortText: "Genel müdürlük ofislerimizde ve üretim tesislerimizde iDisplay çözümleri sayesinde iş süreçlerimizde büyük iyileşmeler yaşadık. Profesyonel ekran ve ses sistemlerinden müzik yayın ve anons sistemlerine kadar her alanda sağlanan yüksek kaliteli çözümler, çalışanlarımızın verimliliğini artırdı.",
    fullText: "Genel müdürlük ofislerimizde ve üretim tesislerimizde iDisplay çözümleri sayesinde iş süreçlerimizde büyük iyileşmeler yaşadık. Profesyonel ekran ve ses sistemlerinden müzik yayın ve anons sistemlerine kadar her alanda sağlanan yüksek kaliteli çözümler, çalışanlarımızın verimliliğini artırdı. Bilgilendirme ekranları ve yönetim sistemleri sayesinde anlık bilgi akışı çok daha etkili hale geldi. Ayrıca, elektro-akustik tasarımlar, işletme ihtiyaçlarımıza mükemmel uyum sağladı. iDisplay'i tercih etmekten son derece mutluyuz ve bu çözümleri diğer firmalara da gönül rahatlığıyla tavsiye ediyoruz.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(allTestimonials.slice(0, 3));

  // Run random selection only on client side after mount
  useEffect(() => {
    const shuffled = [...allTestimonials].sort(() => Math.random() - 0.5);
    setTestimonials(shuffled.slice(0, 3));
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="content-container">
        {/* Section Header - Left Aligned like other sections */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4">
            Müşteri Deneyimleri
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Türkiye'nin önde gelen markalarının iDisplay ile yaptığı başarılı iş birliklerini keşfedin
          </p>
        </div>

        {/* Testimonials Grid - Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(35,96,147,0.3)] hover:-translate-y-3 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/50 group-hover:to-primary-100/20 transition-all duration-500 rounded-3xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Stars - Top Right */}
                  <div className="flex justify-end mb-6">
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 mb-6">
                    <div className="relative">
                      {/* Quote Icon */}
                      <svg
                        className="absolute -top-2 -left-2 w-8 h-8 text-primary-200 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      <p className="text-gray-700 leading-relaxed pl-10 italic">
                        {expandedId === testimonial.id ? testimonial.fullText : testimonial.shortText}
                      </p>
                    </div>

                    {/* Read More */}
                    {testimonial.fullText !== testimonial.shortText && (
                      <button
                        onClick={() => toggleExpand(testimonial.id)}
                        className="mt-4 text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center gap-1 group/btn"
                      >
                        {expandedId === testimonial.id ? "Daralt" : "Devamını Oku"}
                        <svg
                          className={`w-4 h-4 transition-transform ${expandedId === testimonial.id ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Author Info - Horizontal Layout at Bottom */}
                  <div className="pt-6 border-t-2 border-gray-100 group-hover:border-primary-100 transition-all flex items-center gap-4">
                    {/* Company Logo */}
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-gray-200 group-hover:ring-primary-300 transition-all duration-300 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.company}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Person Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-gray-900 text-lg mb-1 truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1 line-clamp-1">{testimonial.position}</p>
                      <p className="text-sm font-bold text-primary-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corporate References Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 flex flex-col items-center gap-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-sm font-bold text-primary-700 border border-primary-200"
        >
          <motion.svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </motion.svg>
          1000+ Kurumsal Referans
        </motion.div>

        {/* Avatar Group with Pull-up Animation */}
        <div className="inline-flex gap-2">
          {[
            { src: "/images/deneyimler/carrefour.jpg", alt: "CarrefourSA", name: "CarrefourSA" },
            { src: "/images/deneyimler/fixgross.webp", alt: "Fix Gross", name: "Fix Gross & Yunus Market" },
            { src: "/images/deneyimler/sephora.jpg", alt: "Sephora", name: "Sephora" },
            { src: "/images/deneyimler/atasun.webp", alt: "Atasun Optik", name: "Atasun Optik" },
            { src: "/images/deneyimler/garanti.jpg", alt: "Garanti BBVA", name: "Garanti BBVA" },
            { src: "/images/deneyimler/siemens.jpg", alt: "Siemens", name: "Siemens" },
          ].map((company, index) => (
            <motion.div
              key={company.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ y: -8, scale: 1.1, zIndex: 10 }}
              className="group relative"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary-500 shadow-md cursor-pointer">
                <Image src={company.src} alt={company.alt} fill className="object-cover" />
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {company.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
