import SkillsBar from "./Skillbar";
import "./about.css";
import { motion } from "framer-motion";

function About({}) {
  return (
    <div className="wrapper-about">
      <div className="row">
        <div className="about-text col md-6">
          <motion.h1
            className="about-title"
            animate={{ x: 0 }}
            initial={{ x: -100 }}
            transition={{ duration: 1 }}
          >
            ABOUT
          </motion.h1>
          <motion.p
            animate={{ x: 0 }}
            initial={{ x: -100 }}
            transition={{ duration: 2 }}
          >
            As a portfolio, I showcase my skills as a technology and product
            enthusiast with a focus on developing rich web applications and web
            service applications using a range of technologies such as HTML,
            CSS, Javascript, Bootstrap, Typescript, Angular, React, React
            Native, Vue, Java, J2EE, SQL, AWS, JQuery, AJAX, and other
            tools/frameworks.
            <p></p> I have actively collaborated with teams on various ongoing
            development projects. I enjoy taking on challenging paths as a
            developer, as they provide exponential opportunities to learn and
            grow. My career growth has been driven by tackling these challenges
            head-on and developing effective, robust, and scalable solutions.
          </motion.p>
        </div>

        <div className="col md-6">
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ duration: 2 }}
          >
            <SkillsBar />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
