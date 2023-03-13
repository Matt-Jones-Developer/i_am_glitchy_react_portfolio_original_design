import { Link } from "react-router-dom";
import ghostKraken from "../assets/png/ghost_kraken.png";
import "./styles/Hero.module.css";

const Hero = () => {
  // to projects scroll
  const handleScroll = () => {
    window.scrollTo({
      top: 220,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero flex mx-auto">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-stretch motion-safe:animate-fadeIn">
        <div className="title-info lg:mr-20">
          <h1>Matt Jones</h1>
          <h2>Front End Developer</h2>
          <p className="hero-p">Your new hire for awesome project builds!</p>
          {/* CTA projects */}
          <Link
            to="/projects"
            onClick={handleScroll}
            className={`btnCTA btn bg-purps gap-2 text-white`}
          >
            My Projects
          </Link>
        </div>
        <div>
          <img
            src={ghostKraken}
            alt="ghost kraken cartoon art by junior betta"
            className="animate-floating lg:ml-20"
            width="600px"
            height="600px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
