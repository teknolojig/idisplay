"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "motion/react";
import {
  IconBulb,
  IconFlask,
  IconSchool,
  IconPalette,
  IconBriefcase,
  IconChartBar,
  IconCloud,
} from "@tabler/icons-react";

export function ServicesGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Profesyonel ekibimizle size özel çözümler sunuyoruz
          </p>
        </div>
        <BentoGrid className="max-w-full mx-0 md:auto-rows-[22rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const SkeletonConsulting = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-gray-200 p-2 items-center space-x-2 bg-gray-50"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex-shrink-0" />
        <div className="w-full bg-gray-200 h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-gray-200 p-2 items-center space-x-2 w-3/4 ml-auto bg-gray-50"
      >
        <div className="w-full bg-gray-200 h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-gray-200 p-2 items-center space-x-2 bg-gray-50"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex-shrink-0" />
        <div className="w-full bg-gray-200 h-4 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonRnD = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      <motion.div className="h-full w-full rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="h-16 w-16 rounded-lg bg-primary-500"
        />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTraining = () => {
  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] flex-row space-x-2">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0,
        }}
        className="h-full w-1/3 rounded-lg bg-gradient-to-br from-primary-200 to-primary-300"
      />
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.2,
        }}
        className="h-full w-1/3 rounded-lg bg-gradient-to-br from-primary-300 to-primary-400"
      />
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.4,
        }}
        className="h-full w-1/3 rounded-lg bg-gradient-to-br from-primary-400 to-primary-500"
      />
    </motion.div>
  );
};

const SkeletonContentManagement = () => {
  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            width: ["50%", "100%", "50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2,
          }}
          className="h-4 rounded-full bg-gradient-to-r from-primary-200 to-primary-400"
        />
      ))}
    </motion.div>
  );
};

const SkeletonAgency = () => {
  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] relative overflow-hidden">
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="absolute h-full w-1/3 bg-gradient-to-r from-transparent via-primary-300/50 to-transparent"
      />
      <div className="grid grid-cols-3 gap-2 w-full p-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-full rounded-lg bg-gradient-to-br from-primary-100 to-primary-200"
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkeletonMonitoring = () => {
  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2 p-2">
      <div className="flex gap-2 h-1/3">
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0,
          }}
          className="flex-1 rounded-lg bg-primary-300"
        />
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.3,
          }}
          className="flex-1 rounded-lg bg-primary-400"
        />
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.6,
          }}
          className="flex-1 rounded-lg bg-primary-500"
        />
      </div>
      <motion.div
        animate={{
          scaleY: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="flex-1 rounded-lg bg-gradient-to-t from-primary-500 to-primary-300"
      />
    </motion.div>
  );
};

const SkeletonCloud = () => {
  return (
    <motion.div className="flex flex-1 w-full h-full min-h-[6rem] relative">
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0,
        }}
        className="absolute top-1/4 left-1/4 h-16 w-24 rounded-full bg-primary-200/80"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.5,
        }}
        className="absolute top-1/3 right-1/4 h-20 w-28 rounded-full bg-primary-300/80"
      />
      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          delay: 1,
        }}
        className="absolute bottom-1/4 left-1/3 h-14 w-20 rounded-full bg-primary-400/80"
      />
    </motion.div>
  );
};

const items = [
  {
    title: "Danışmanlık Hizmeti",
    description: "Profesyonel ekibimizle ihtiyaçlarınıza özel danışmanlık hizmetleri sunuyoruz.",
    header: <SkeletonConsulting />,
    icon: <IconBulb className="h-4 w-4 text-primary-500" />,
  },
  {
    title: "Ar-Ge Hizmeti",
    description: "Yenilikçi çözümler için araştırma ve geliştirme hizmetleri sağlıyoruz.",
    header: <SkeletonRnD />,
    icon: <IconFlask className="h-4 w-4 text-primary-500" />,
  },
  {
    title: "Eğitim Hizmeti",
    description: "Ürün ve sistemlerimiz hakkında kapsamlı eğitim programları düzenliyoruz.",
    header: <SkeletonTraining />,
    icon: <IconSchool className="h-4 w-4 text-primary-500" />,
  },
  {
    title: "İçerik Yönetim Hizmeti",
    description: "Digital signage içeriklerinizi profesyonel şekilde yönetiyoruz.",
    header: <SkeletonContentManagement />,
    icon: <IconPalette className="h-4 w-4 text-primary-500" />,
  },
  {
    title: "Ajans Hizmeti",
    description: "Kreatif ajans hizmetleri ile markanızı güçlendiriyoruz.",
    header: <SkeletonAgency />,
    icon: <IconBriefcase className="h-4 w-4 text-primary-500" />,
  },
  {
    title: "Monitoring ve Yazılım Servis Destek Hizmeti",
    description: "Sistemlerinizi sürekli izliyor ve yazılım desteği sağlıyoruz.",
    header: <SkeletonMonitoring />,
    icon: <IconChartBar className="h-4 w-4 text-primary-500" />,
  },
  {
    title: "Cloud Hizmeti",
    description: "Bulut tabanlı çözümlerimizle verilerinizi güvende tutuyoruz.",
    header: <SkeletonCloud />,
    icon: <IconCloud className="h-4 w-4 text-primary-500" />,
  },
];
