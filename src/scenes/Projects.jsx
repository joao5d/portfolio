import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.png";

const projects = [
  {
    name: (
      <>
        Camões<span className="text-red">Ai</span>
      </>
    ),
    image: project1,
    DemoLink: "https://camoes-ai.vercel.app",
    GitHubLink: "https://github.com/joao5d/CamoesAi",
    tags: (
      <table className="">
        <tr className="flex flex-col">
          <td className="bg-light-grey border-2 border-red py-1 px-1.5 m-0.5 rounded-md">
            React
          </td>
          <td className="bg-light-grey border-2 border-red py-1 px-1.5 m-0.5 rounded-md">
            Typescript
          </td>
          <td className="bg-light-grey border-2 border-red py-1 px-1.5 m-0.5 rounded-md">
            Tailwind
          </td>
        </tr>
      </table>
    ),
  },
  {
    name: (
      <>
        Camões<span className="text-red">Ai</span>
      </>
    ),
    image: project1,
    DemoLink: "https://camoes-ai.vercel.app",
    GitHubLink: "https://github.com/joao5d/CamoesAi",
    tags: (
      <table className="">
        <tr className="flex flex-col">
          <td className="bg-light-grey border-2 border-red py-1 px-1.5 m-0.5 rounded-md">
            React
          </td>
          <td className="bg-light-grey border-2 border-red py-1 px-1.5 m-0.5 rounded-md">
            Typescript
          </td>
          <td className="bg-light-grey border-2 border-red py-1 px-1.5 m-0.5 rounded-md">
            Tailwind
          </td>
        </tr>
      </table>
    ),
  },
  {
    name: (
      <>
        Camões<span className="text-red">Ai</span>
      </>
    ),
    image: project1,
    DemoLink: "https://camoes-ai.vercel.app",
    GitHubLink: "https://github.com/joao5d/CamoesAi",
    tags: (
      <table className="">
        <tr className="flex flex-col">
          <td className="bg-light-grey border-2 border-red py-1 px-1.5 m-0.5 rounded-md">
            React
          </td>
          <td className="bg-light-grey border-2 border-red py-1 px-1.5 m-0.5 rounded-md">
            Typescript
          </td>
          <td className="bg-light-grey border-2 border-red py-1 px-1.5 m-0.5 rounded-md">
            Tailwind
          </td>
        </tr>
      </table>
    ),
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          <span className="text-red">PRO</span>JECTS
        </p>

        <div className="flex justify-center mt-5 mb-8">
          <LineGradient width="w-1/2" />
        </div>
      </motion.div>
      {/* PROJECTS */}
      <div>
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
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, Navigation]}
          >
            {projects.map((projects, index) => (
              <SwiperSlide key={`${projects.name}-${index}`}>
                <div className="h-fit w-full relative">
                  <div className="relative group">
                    <img alt={`${projects.image}`} src={projects.image} />

                    <div
                      className="overlay opacity-0 group-hover:opacity-100 absolute top-0 
                    left-0 w-full h-full bg-light-grey border-2 border-red p-5 flex flex-col items-center 
                    justify-center text-center transition duration-200"
                    >
                      <p className="font-playfair font-semibold text-4xl mb-8">
                        {projects.name}
                      </p>
                      <div
                        className=" bg-gradient-rainblue text-deep-blue font-semibold border-2 border-black 
                        px-2 rounded-2xl text-2xl pb-1 mb-2"
                      >
                        Tags:
                      </div>
                      {projects.tags}
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-start mt-4">
                    <a
                      className="bg-gradient-rainblue text-deep-blue py-3 px-7 font-semibold 
                      hover:bg-blue hover:text-white transition duration-500"
                      href={projects.DemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>

                    <a
                      className="bg-gradient-rainblue py-0.5 pr-0.5"
                      href={projects.GitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className="bg-deep-blue hover:text-red transition duration-500 
                      w-full h-full flex items-center justify-center font-playfair px-10"
                      >
                        GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
