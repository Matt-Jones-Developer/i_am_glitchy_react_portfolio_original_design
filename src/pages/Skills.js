import { useEffect } from "react";
import Devicons from "../components/Devicons";
import styles from "./styles/Skills.module.css"


const Skills = () => {

  useEffect(() => {
    // Scroll to a specific element on the page
    const targetElement = document.querySelector("#skills");
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <section className={`${styles.skillSection} mx-auto text-center`
      } id="skills">
        <div
          className="container">
          <h2 className="skills-title text-center mx-auto text-6xl">
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