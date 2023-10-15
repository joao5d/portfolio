import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";

const MySkills = () => {
  const skills = [
    {
      skillName: "REACT",
      logo: "../assets/react.png",
      color: "react",
    },
    {
      skillName: "TYPESCRIPT",
      logo: "../assets/typescript.png",
      color: "typescript",
    },
    {
      skillName: "NODE",
      logo: "../assets/nodejs.png",
      color: "node",
    },
    {
      skillName: "MONGODB",
      logo: "../assets/mongodb.png",
      color: "mongoDB",
    },
    {
      skillName: "NEXT",
      logo: "../assets/next.png",
      color: "next",
    },
    {
      skillName: "TAILWIND",
      logo: "../assets/tailwind.png",
      color: "tailwind",
    },
    {
      skillName: "MYSQL",
      logo: "../assets/mySql.png",
      color: "mySql",
    },
    {
      skillName: "GRAPHQL",
      logo: "../assets/graphql.png",
      color: "graphQl",
    },
    {
      skillName: "DOCKER",
      logo: "../assets/docker.png",
      color: "docker",
    },
  ];
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-36">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-24">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            As I delved into various programming languages, I found my true
            comfort in{" "}
            <span className="text-react font-semibold">React</span>. Here,
            I'm in my element, sculpting dynamic and user-friendly interfaces.
            While <span className="text-react font-semibold">React</span>{" "}
            remains my primary focus, I am also proficient in{" "}
            <span className="text-typescript font-semibold">TypeScript</span>,{" "}
            <span className="text-node font-semibold">Node</span>,{" "}
            <span className="text-next font-semibold">Next</span>,{" "}
            <span className="text-mongoDB font-semibold">MongoDB</span>, and
            learn a multitude of other languages.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-8 before:-left-8 
            before:w-full before:h-full
            before:border-2 before:border-red before:z-[-1] before:rounded-[5px] "
            >
              <img
                alt="skills"
                className="z-10 rounded-[5px]"
                src="assets/skills-image.jpg"
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="z-10 rounded-[5px]"
              src="assets/skills-image.jpg"
            />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 1, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="md:flex md:justify-between mt-6 gap-32 "
      >
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ delay: 2000 }}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, Navigation]}
        >
          {skills?.map((skills, i) => (
            <SwiperSlide key={`${skills.skillName}-${i}`}>
              <div className="md:w-1/3 mt-10 mx-auto text-center">
                <div>
                  <p
                    className={`flex items-center 
                    justify-center font-playfair font-semibold text-3xl mb-5 text-${skills.color}`}                 
                  >
                    {skills.skillName}
                  </p>
                  <LineGradient className=" mx-auto" />
                </div>
                <div className="flex flex-col items-center mt-5 mb-10">
                  <div
                    className={`w-28 h-28 flex items-center justify-center 
                    rounded-full border-4 border-${skills.color}`}
                  >
                    <div
                      className=" w-24 h-24 bg-deep-blue flex items-center 
                    justify-center rounded-full "
                    >
                      <img
                        className="w-20 h-20"
                        alt="react"
                        src={skills.logo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <span className="text-react border-react"></span>
      <span className="text-typescript border-typescript"></span>
      <span className="text-node border-node"></span>
      <span className="text-next border-next"></span>
      <span className="text-mongoDB border-mongoDB"></span>
      <span className="text-mySql border-mySql"></span>
      <span className="text-graphQl border-graphQl"></span>
      <span className="text-tailwind border-tailwind"></span>
      <span className="text-docker border-docker"></span>
    </section>
  );
};

export default MySkills;
