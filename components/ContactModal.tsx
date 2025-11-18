"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      // 2 saniye sonra formu sıfırla ve kapat
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
        setSubmitStatus("idle");
        onClose();
      }, 2000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative px-8 py-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Bilgi Formu</h2>
                    <p className="text-sm text-gray-500 mt-1">Size en kısa sürede dönüş yapacağız</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ad Soyad */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  {/* E-posta */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="0500 000 00 00"
                    />
                  </div>

                  {/* Şirket */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Şirket
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="Şirket adınız"
                    />
                  </div>

                  {/* Konu */}
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    >
                      <option value="">Konu seçiniz</option>
                      <option value="led">LED Ekran Çözümleri</option>
                      <option value="interactive">İnteraktif Ekranlar</option>
                      <option value="videowall">Videowall</option>
                      <option value="audio">Ses Sistemleri</option>
                      <option value="signage">Digital Signage</option>
                      <option value="conference">Video Konferans</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>

                  {/* Mesaj */}
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Detaylı bilgi ve taleplerinizi yazınız..."
                    />
                  </div>
                </div>

                {/* Success Message */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                    >
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium text-green-800">Mesajınız başarıyla gönderildi!</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Buttons */}
                <div className="mt-8 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        Gönder
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/20 to-transparent rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary-100/20 to-transparent rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
