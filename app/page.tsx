import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductsCarousel from '@/components/ProductsCarousel';
import { ServicesGrid } from '@/components/ServicesGrid';
import { CounterCards } from '@/components/CounterCards';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Products Carousel Section */}
        <ProductsCarousel />

        {/* Services Grid Section */}
        {/* <ServicesGrid /> */}

      {/* Neden iDisplay Section */}
      <section id="hakkimizda" className="py-16 bg-white">
        <div className="content-container">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 flex flex-wrap items-center gap-x-3">
              <span>Neden</span>
              <PointerHighlight>
                <span>iDisplay</span>
              </PointerHighlight>
              <span>?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Profesyonel görüntü ve ses sistemlerinde güvenilir çözüm ortağınız
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column - Feature Cards */}
            <div className="space-y-8">
              {/* Kaliteli Hizmet */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-100 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-black text-gray-900 mb-3">Kaliteli Hizmet</h4>
                    <p className="text-gray-600 leading-relaxed">Satış öncesi ve satış sonrası süreçlerde profesyonel ve deneyimli bir ekip ile olumlu müşteri deneyimleri yaratılır.</p>
                  </div>
                </div>
              </div>

              {/* Müşteri Memnuniyeti */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-100 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-black text-gray-900 mb-3">Müşteri Memnuniyeti</h4>
                    <p className="text-gray-600 leading-relaxed">Türkiye'de faaliyet gösteren prestijli global ve yerel kurumsal firmalara standartlar dahilinde çözüm ve hizmetler sunulur.</p>
                  </div>
                </div>
              </div>

              {/* Güncel Teknoloji */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-100 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-black text-gray-900 mb-3">Güncel Teknoloji</h4>
                    <p className="text-gray-600 leading-relaxed">Sektördeki gelişmeler ve üreticilerin yeni ürün, çözüm ve teknolojileri yakından takip edildiği için müşteri ihtiyaçlarında güncel teknolojiler kullanılır.</p>
                  </div>
                </div>
              </div>

              {/* Uzman Ekip */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-100 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-black text-gray-900 mb-3">Uzman Ekip</h4>
                    <p className="text-gray-600 leading-relaxed">Sektörde uzun yıllardır çalışmakta olan, kendi alanında uzman ve deneyimli ekibi ile profesyonel çözüm ve hizmetler sunulur.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Statistics Cards */}
            <CounterCards />
          </div>
        </div>
      </section>

      {/* Çözüm Ortaklarımız Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100/50 to-primary-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/30 via-primary-50/20 to-transparent"></div>

        <div className="relative content-container">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4">
              Çözüm Ortaklarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Dünya çapında tanınan lider markalarla iş birliği içinde, en kaliteli ürün ve hizmetleri sunuyoruz
            </p>
          </div>

          {/* Marquee Container */}
          <div className="flex flex-col gap-6">
            {/* First Row - Scroll Left */}
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              <div className="flex gap-6 animate-marquee-left">
                {['samsung', 'philips', 'logitech', 'barco', 'crestron', 'epson', 'nevaya', 'actiontec'].map((partner) => (
                  <div
                    key={partner}
                    className="flex-shrink-0 w-60 h-32 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center p-6"
                  >
                    <img
                      src={`/images/ortaklar/${partner}.jpg`}
                      alt={partner}
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {['samsung', 'philips', 'logitech', 'barco', 'crestron', 'epson', 'nevaya', 'actiontec'].map((partner, idx) => (
                  <div
                    key={`${partner}-dup-${idx}`}
                    className="flex-shrink-0 w-60 h-32 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center p-6"
                  >
                    <img
                      src={`/images/ortaklar/${partner}.jpg`}
                      alt={partner}
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Scroll Right */}
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              <div className="flex gap-6 animate-marquee-right">
                {['extron', 'kramer', 'arthurholm', 'panasonic', 'shure', 'bose', 'akg', 'jbl'].map((partner) => (
                  <div
                    key={partner}
                    className="flex-shrink-0 w-60 h-32 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center p-6"
                  >
                    <img
                      src={`/images/ortaklar/${partner}.jpg`}
                      alt={partner}
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {['extron', 'kramer', 'arthurholm', 'panasonic', 'shure', 'bose', 'akg', 'jbl'].map((partner, idx) => (
                  <div
                    key={`${partner}-dup-${idx}`}
                    className="flex-shrink-0 w-60 h-32 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center p-6"
                  >
                    <img
                      src={`/images/ortaklar/${partner}.jpg`}
                      alt={partner}
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Müşteri Deneyimleri Section */}
      <Testimonials />

      {/* CTA Banner - Katalog İndirme */}
      <CTABanner />

      {/* Footer */}
      <Footer />
      </main>
    </>
  );
}
