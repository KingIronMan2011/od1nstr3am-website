import { motion, Variants } from "framer-motion";
import { TFunction } from "i18next";

interface AboutMeProps {
  t: TFunction;
}

const AboutMe = ({ t }: AboutMeProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="mt-8 p-6 bg-white/70 dark:bg-zinc-800/70 rounded-lg shadow-md backdrop-blur-sm transition-colors duration-500"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-2xl font-semibold text-zinc-800 dark:text-white mb-4 transition-colors duration-300"
        variants={titleVariants}
      >
        {t("sections.aboutMe", "Über mich")}
      </motion.h2>
      <motion.p
        className="text-zinc-700 dark:text-zinc-300 leading-relaxed transition-colors duration-300"
        variants={textVariants}
      >
        {t(
          "aboutMe.description",
          "Hey ich bin Martin, 33 Jahre jung und zocke für mein Leben gern. Bei mir wirst du von Horror bis Shooter alles sehen. Gern geh ich auch auf Wünsche ein, welches Game als nächstes gezockt wird.",
        )}
      </motion.p>
    </motion.div>
  );
};

export default AboutMe;
