const AboutMe = ({ t }: any) => {
  return (
    <div className="mt-8 p-6 bg-white/70 dark:bg-gray-800/70 rounded-lg shadow-md backdrop-blur-sm transition-colors duration-500">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
        {t("sections.aboutMe", "About Me")}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
        {t(
          "aboutMe.description",
          "Hello! I'm a passionate content creator and streamer who loves engaging with the community. I enjoy sharing my gaming experiences, creative projects, and connecting with like-minded individuals. When I'm not streaming, you can find me exploring new games, working on art, or just hanging out with friends. Thanks for stopping by my page!",
        )}
      </p>
    </div>
  );
};

export default AboutMe;
