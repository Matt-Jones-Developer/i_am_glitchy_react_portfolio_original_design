// footer icons
import gitHub from "../assets/icons/github.png";
import linkedIn from "../assets/icons/linkedIn.png";
import slack from "../assets/icons/slack.png";
import twitter from "../assets/icons/twitter.png";
import mailMe from "../assets/icons/mail_icon.png";
import styles from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className="footer py-4 text-center bg-dark text-white">
      {/* <!-- footer icons --> */}
      <div className="footer-icons">
        <ul className={`${styles.ulIcons}`}>
          <li>
            <a href="mailto:glitchyghost81@protonmail.com">
              <img src={`${mailMe}`} alt="mail-icn" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Matt-Jones-Developer"
              className="git-icn"
            >
              <img src={`${gitHub}`} alt="github-icn" />
            </a>
          </li>
          <li>
            <a href="https://ukvirtfept112-wi02517.slack.com/archives/C04DMB7BK0B">
              <img src={`${slack}`} alt="slack-icn" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/glitchy81_dev">
              <img src={`${twitter}`} alt="twitter-icn" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/matt-jones-zx81/">
              <img src={`${linkedIn}`} alt="linkedin-icn" />
            </a>
          </li>
        </ul>
      </div>
      <p className={`${styles.footer} text-white`}>
        Designed & <code>coded</code> with <strong>love </strong>
        by <a href="https://github.com/Matt-Jones-Developer">Matt Jones</a>.
        &copy; 2023. All rights reserved.
      </p>
      <p className={`${styles.artist}`}>
        <em>
          Special thanks to{" "}
          <a href="https://pngtree.com/junior-betta_49180563?type=1">
            Junior Betta
          </a>{" "}
          for the awesome kraken artwork
        </em>
      </p>
    </footer>
  );
};

export default Footer;