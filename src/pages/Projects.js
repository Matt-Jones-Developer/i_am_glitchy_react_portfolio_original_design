
import styles from "./styles/Projects.module.css"
import cristalVision from "../assets/png/cristalvision.png";
import musicForYou from "../assets/png/musicforyou_api.png";
import gameBoy from "../assets/png/gameboy_site.png";
import fineWeather from "../assets/png/fine_days_weather.png";
import passwordGen from "../assets/png/password_gen.png";
import codeBoss from "../assets/gif/code_boss_intro_loop.gif";

import data from "../data.json";

// map between id and the path
const projectImages = {
  1: fineWeather,
  2: passwordGen,
  3: musicForYou,
  4: cristalVision,
  5: codeBoss,
  6: gameBoy
}

const Projects = () => {
  // this array is data.json
  const projects = data;

  return (
    <section className="projects">
      <div className="container">
        <div className="title">
          <h2 className="text-white">
            Projects
          </h2>
          <p className="pb-5 text-white">
            Some of my best projects. I built them using a mix of React &
            Tailwind, vanilla JavaScript, HTML5 and CSS3.
            I love building CLI programs using Node.js too!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
        {projects.map((project, i) => {
          return (
            <div className="project-card" key={i}>
              <div className="project-image">
                <img src={projectImages[project.id]} alt={project.title} />
              </div>
              <div className="project-info">
                <div className="card bg-dark shadow-lg rounded-lg overflow-hidden
                align-items-center justify-center m-4 p-4">
                  {/* about and 2 btn links */}
                  <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-white text-base text-center">{project.desc}</p>
                  <div className="flex justify-center items-end mt-4 p-4 mx-auto">
                    <button className="btn text-dark bg-lumi-green text-center mx-auto">
                      <a className="button" href={project.live} target="_blank" rel="noopener noreferrer">
                        Live
                      </a>
                    </button>
                    <button className="btn bg-lumi-pink text-white text-center mx-auto">
                      <a className="button" href={project.code} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects;

