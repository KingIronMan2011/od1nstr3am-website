import { motion, Variants } from "framer-motion";
import type { TFunction } from "i18next";

interface PartnerProps {
  t: TFunction;
  partners: { name: string; url: string; logo?: string; color?: string }[];
}

const Partner = ({ t, partners }: PartnerProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.4, duration: 0.5 } },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.4 } },
  };

  return (
    <motion.div
      className="mt-8 p-6 bg-white/70 dark:bg-gray-800/70 rounded-lg shadow-md backdrop-blur-sm transition-colors duration-500"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300"
        variants={titleVariants}
      >
        {t("sections.partner", "Partner")}
      </motion.h2>
      <motion.p
        className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300 mb-6"
        variants={textVariants}
      >
        {t(
          "partner.description",
          "Ich bin stolz darauf, mit einigen großartigen Partnern zusammenzuarbeiten, die meine Leidenschaft für Gaming und Unterhaltung teilen. Schaut euch ihre Kanäle an und unterstützt sie!"
        )}
      </motion.p>
      <div className="flex flex-wrap gap-4">
        {partners.map((partner, index) => (
          <motion.a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 rounded-lg shadow transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: partner.color || "#4A90E2", // Default color if none is provided
              color: "#fff",
            }}
            variants={buttonVariants}
          >
            {partner.logo && (
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-10 h-10 rounded-full"
              />
            )}
            <span className="text-lg font-medium">{partner.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Partner;
