import Reveal from "../Reveal/Reveal";
import "./About.css"; // Import the vanilla CSS file
import uiDesign from "../../../public/assets/ui-design.png"
import webDevelopment from "../../../public/assets/website-design.png"
import appDesign from "../../../public/assets/app-design.png"
const About = () => {
  // Arrays of skills
  const webDevelopmentSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Next.js",
    "Bootstrap",
    "Tailwind CSS",
    "Git",
  ];

  const softwareEngineeringSkills = [
    "Object-Oriented Programming",
    "Functional Programming",
    "Data Structures & Algorithms",
    "Database Management",
    "RESTful APIs",
    "Problem Solving",
  ];

  const softSkills = [
    "Strong problem-solving and analytical skills",
    "Excellent communication skills",
    "Ability to work in a team environment",
    "Willingness to learn new technologies.",
  ];

  return (
    <Reveal>
      <div
        id="about"
        className="about mt-12 px-6 pt-12 w-full flex flex-col items-center justify-center mb-12"
      >
        {/* Top section */}
        <div className="topCont text-center">
          <h2 className="heading text-6xl pb-8">What I do</h2>
          <p className="desc text-md lg:text-lg leading-10 pb-16">
            I am a skilled and passionate web developer with a hunger to learn
            more and become an expert in creating eye-catching and user-friendly
            websites. I am a responsible and determined person.I have deep
            understanding of Figma,HTML,CSS,JavaScript and other frameworks such
            as ReactJS, NextJS.I can implement robust backend solutions with
            technologies like Node.js and MongoDB. I am particularly good in
            solving complex problems and find joy whenever I am tasked to tackle
            hard problems
          </p>
        </div>

        {/* Bottom section with skill cards */}
        <div className="bottomCont flex flex-col gap-6">
          {/* Skill card 1: UI Design */}
          <div className="skillcard m-3">
            <img
              src={uiDesign}
              alt=""
              className="skillPng w-20"
            />
            <div className="skilltext max-w-[50rem] ">
              <h2 className="text-xl md:text-2xl">UI Design</h2>
              <p className="text-base md:text-lg">
                Passionate UI/UX designer crafting seamless digital experiences.
                Innovative, detail-oriented, and dedicated to user-centric
                design solutions.
              </p>
            </div>
          </div>

          {/* Skill card 2: Website Development */}
          <div className="skillcard m-3">
            <img
              src={webDevelopment}
              alt=""
              className="skillPng w-20"
            />
            <div className="skilltext max-w-[50rem]">
              <h2 className="text-xl md:text-2xl">Website Development</h2>
              <p className="text-base md:text-lg">
                Passionate web developer creating seamless user experiences with
                innovative solutions and cutting-edge technologies.
              </p>
            </div>
          </div>

          {/* Skill card 3: App Development */}
          <div className="skillcard m-3">
            <img
              src={appDesign}
              alt=""
              className="skillPng w-20"
            />
            <div className="skilltext max-w-[50rem] ">
              <h2 className="text-xl md:text-2xl">App Development</h2>
              <p className="text-base md:text-lg">
                Innovative app developer crafting seamless user experiences,
                transforming ideas into functional and engaging mobile
                solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Skills section with lists */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 w-full mx-auto gap-5">
            {/* Web Development Skills */}
            <div className="mb-8 px-5">
              <h2 className="text-2xl font-bold mb-4 text-center w-full">
                Web Development
              </h2>
              <Reveal>
                <ul className="grid grid-cols-1 gap-4 ml-16">
                  {webDevelopmentSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center w-full lg:w-[100%] md:w-1/2 mx-auto"
                    >
                      <svg
                        className="w-7 h-5 mr-2 text-green-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="w-full justify-center">{skill}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Software Engineering Skills */}
            <div className="mb-8 px-5">
              <h2 className="text-2xl font-bold mb-4 text-center w-full ml-2">
                Software Engineering
              </h2>
              <Reveal>
                <ul className="grid grid-cols-1 gap-4 ml-12">
                  {softwareEngineeringSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center w-full lg:w-[100%] md:w-1/2 mx-auto "
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Soft Skills */}
            <div className="mb-8 px-5">
              <h2 className="text-2xl font-bold mb-4 text-left md:text-left md:ml-[15rem] lg:text-left ml-12 lg:ml-12 w-full">
                Soft Skills
              </h2>
              <Reveal>
                <ul className="grid grid-cols-1 gap-4 ml-12">
                  {softSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center w-full lg:w-[100%] md:w-1/2 mx-auto"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-linkYellow"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </Reveal>
  );
};

export default About;
