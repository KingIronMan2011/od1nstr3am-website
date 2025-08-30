import { User, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ProfileCard = ({ t, siteConfig }: any) => (
  <motion.div
    className="w-full"
    initial={{ opacity: 0, y: 30 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    }}
  >
    <motion.div
      className="aspect-square w-full overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:shadow-xl border border-gray-200 dark:border-gray-700"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 8px 32px rgba(59, 130, 246, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 25 }}
    >
      <img
        src={siteConfig.profile.avatar}
        alt="Profile"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </motion.div>
    <div className="mt-6 space-y-4">
      <motion.div
        className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
      >
        <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <span className="text-lg font-semibold">{t("profile.realName")}</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-3 text-gray-700 dark:text-gray-200 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.18 } }}
      >
        <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <span className="text-base">{t("profile.location")}</span>
      </motion.div>
    </div>
  </motion.div>
);

export default ProfileCard;
