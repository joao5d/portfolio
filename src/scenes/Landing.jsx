import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "../components/SocialMediaIcons";
import LineGradient from "../components/LineGradient";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-2/5 z-10 mt-16 md:mt-24 md:mb-24 mr-10">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:rounded-t-[400px] before:rounded-b-[30px] before:w-full before:max-w-[400px] before:h-full
            before:border-2 before:border-red before:z-[-1]"
          >
            <img
              alt="profile"
              className="transition duration-500 z-10 w-full
              max-w-[400px] md:max-w-[600px] rounded-t-[300px] rounded-b-[30px] border-red border-2"
              src="assets/profile-image.jpg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="transition duration-500 z-10 w-full
            max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.jpg"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12">
        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-7xl font-playfair z-10 text-center md:text-start font-semibold">
            João <span className="text-red">Leite</span>
            <LineGradient width="mt-8 w-2/3" />
          </p>
          <p className="mt-10 mb-7 text-3xl text-center md:text-start">
            A versatile and enthusiastic coder, with major focus is{" "}
            <span className="text-react font-semibold">React</span>
          </p>
          <LineGradient width="mt-8 w-2/4" />
        </motion.div>
        {/* CALL TO ACTIONS */}

        <motion.div
          className="flex mt-4 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
