import AboutImg from "../assets/png/about-img-lg-2.png";
import styles from "./styles/About.module.css"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about flex pt-24 pb-24 bg-dark">
      <div className="container flex mx-auto ml-auto mr-auto gap-8">
        <div className="about-content">
          <h2 className="title">About Glitchy</h2>
          <p className="mb-6">
            Hi, my name is Matt Jones, a.k.a glitchyGhost. I'm a
            Frontend Developer and UI designer with an eye for detail.
            I love building intuitive, beautiful websites and applications using
            <b> JavaScript, React & Tailwind.</b>
            <br/>
            With decent front-end skills in React.js, Tailwind, SaSS, CSS3 & HTML5,
            I also love technical back-end tasks and problem-solving.
            I am proficient in Node.js, Python, mySQL, MongoDB, Github and CLI.
            See my Skills page for more detail.
          </p>
          {/* hobbies */}
          <p className="text-white">
            In my spare time I like to play <em>Thrash Metal</em> on my guitar.
            I am obsessed with coding and spend a lot of my time learning new{' '}
            <Link href="/skills"
            ><em style={{ color: 'orange' }}><span>skills <i className="fa-solid fa-arrow-right"></i></span></em>
            </Link>
          </p>
        </div>
        <div className={`${styles.aboutImg}`}>
          <img
            src={AboutImg}
            width="440px"
            height="440px"
            alt="mugshot selfie"
            className="lgw-[100%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  )
}


export default About;
