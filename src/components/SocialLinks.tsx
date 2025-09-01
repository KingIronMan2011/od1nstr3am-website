import {
  FaTwitch,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaMoneyBillWave,
} from "react-icons/fa6";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const linkVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      type: "spring" as const,
      stiffness: 140,
      damping: 18,
      mass: 0.8,
    },
  },
  exit: { opacity: 0, y: 24, scale: 0.98, transition: { duration: 0.2 } },
  whileHover: {
    scale: 1.03,
    boxShadow: "0 12px 40px rgba(63, 63, 70, 0.15)",
    transition: { type: "spring" as const, stiffness: 280, damping: 20 },
  },
  whileTap: {
    scale: 0.98,
    transition: { type: "spring" as const, stiffness: 320, damping: 24 },
  },
};

const SocialLinks = ({ t }: any) => {
  const links = [
    {
      label: t("profile.links.0.label"),
      url: t("profile.links.0.url"),
      icon: <FaTwitch size={22} />,
      color: "bg-purple-600 text-white hover:bg-purple-700",
      wide: false,
    },
    {
      label: t("profile.links.1.label"),
      url: t("profile.links.1.url"),
      icon: <FaYoutube size={22} />,
      color: "bg-red-600 text-white hover:bg-red-700",
      wide: false,
    },
    {
      label: t("profile.links.2.label"),
      url: t("profile.links.2.url"),
      icon: <FaDiscord size={22} />,
      color: "bg-indigo-600 text-white hover:bg-indigo-700",
      wide: false,
    },
    {
      label: t("profile.links.4.label"),
      url: t("profile.links.4.url"),
      icon: <FaTiktok size={22} />,
      color: "bg-black text-white hover:bg-zinc-900",
      wide: false,
    },
    {
      label: t("profile.links.3.label"),
      url: t("profile.links.3.url"),
      icon: <FaMoneyBillWave size={22} />,
      color:
        "bg-green-600 text-white hover:bg-green-700 font-bold text-lg border-2 border-green-300",
      wide: false,
    },
  ];

  return (
    <div className="mt-10 z-0 relative">
      <motion.h3
        className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-white mb-5 transition-all duration-500 ease-in-out tracking-tight"
        initial={{ opacity: 0, y: -12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            type: "spring",
            stiffness: 120,
            damping: 20,
          },
        }}
      >
        {t("sections.socialLinks", "Social Links")}
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <AnimatePresence>
          {links.map((link) =>
            link.wide ? (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 px-5 py-4 rounded-xl font-semibold transition-all duration-300 group ${link.color} shadow-lg hover:shadow-xl`}
                style={{ minHeight: "56px" }}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="whileHover"
                whileTap="whileTap"
                layout
              >
                <motion.span
                  className="transition-transform duration-300 group-hover:scale-110 text-white"
                  layout
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  {link.icon}
                </motion.span>
                <motion.span
                  className="flex-1 text-center"
                  layout
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  {link.label}
                </motion.span>
                <ExternalLink
                  size={20}
                  className="opacity-80 group-hover:opacity-100 text-white transition-colors duration-300"
                />
              </motion.a>
            ) : (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all duration-300 group ${link.color} shadow-lg hover:shadow-xl`}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="whileHover"
                whileTap="whileTap"
                layout
              >
                <motion.span
                  className="transition-transform duration-300 group-hover:scale-110 text-white"
                  layout
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  {link.icon}
                </motion.span>
                <motion.span
                  className="flex-1"
                  layout
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  {link.label}
                </motion.span>
                <ExternalLink
                  size={18}
                  className="opacity-80 group-hover:opacity-100 text-white transition-colors duration-300"
                />
              </motion.a>
            ),
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SocialLinks;
