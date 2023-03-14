import { useEffect } from "react";
import Devicons from "../components/Devicons";
import styles from "./styles/Skills.module.css"


const Skills = () => {

  // always auto scroll hook
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <section className={`${styles.skillSection} mx-auto text-center`
      } id="skills">
        <div
          className="container">
          <h2 className="skills-title text-center mx-auto text-6xl pb-4">
            Skills & Languages
          </h2>
          <p className="text-white skillsIntro">
            Here are all the languages, frameworks, tools and software packages I
            use. I'm currently taking a Data Structures & Algorithms course, as
            well as completing CS50x in Computer Science with Harvard University online.
            <em><b> Hover over the icons to find out more</b></em>
          </p>
        </div>
      </section>
      {/* import devicons grid */}
      <Devicons />

    </>
  );
};

export default Skills;