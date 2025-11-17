"use client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CounterCardProps {
  targetValue: number;
  suffix?: string;
  label: string;
  index: number;
}

function CounterCard({ targetValue, suffix = "", label, index }: CounterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  const count = useMotionValue(0);
  const springCount = useSpring(count, {
    stiffness: 50,
    damping: 30,
    duration: 2,
  });

  useEffect(() => {
    if (isInView) {
      count.set(targetValue);
    }
  }, [isInView, targetValue, count]);

  useEffect(() => {
    const unsubscribe = springCount.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springCount]);

  // Format number with thousands separator
  const formattedValue = displayValue.toLocaleString('tr-TR');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Background with gradient and glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl transform transition-all duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative p-8 flex flex-col items-center justify-center min-h-[160px]">
        {/* Icon/Decoration */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 opacity-50" />

        {/* Number with count animation */}
        <div className="text-5xl md:text-6xl font-black text-white mb-2">
          {formattedValue}{suffix}
        </div>

        {/* Label */}
        <div className="text-white/90 font-semibold text-base tracking-wide text-center">
          {label}
        </div>

        {/* Bottom decoration line */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-white/30 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "60%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
        />
      </div>
    </motion.div>
  );
}

export function CounterCards() {
  const stats = [
    { targetValue: 60000, suffix: "+", label: "Aktif Ekran Sayısı" },
    { targetValue: 5000, suffix: "+", label: "Tamamlanan Proje" },
    { targetValue: 25, suffix: "+", label: "Faaliyet Gösterdiği Ülke Sayısı" },
    { targetValue: 100, suffix: "%", label: "Müşteri Memnuniyeti" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 h-fit">
      {stats.map((stat, index) => (
        <CounterCard
          key={stat.label}
          targetValue={stat.targetValue}
          suffix={stat.suffix}
          label={stat.label}
          index={index}
        />
      ))}
    </div>
  );
}
