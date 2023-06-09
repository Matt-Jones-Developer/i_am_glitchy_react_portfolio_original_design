import { useEffect } from 'react';
import styles from './styles/Contact.module.css';
import linkedIn from "../assets/icons/linkedin_lg.png"
import slack from "../assets/icons/slack_lg.png"
import github from "../assets/icons/github_lg_wht.png"
import myCV from '../assets/pdf/Matt Jones C.V 2023 (Google Docs).pdf'
import Form from '../components/Form'


const Contact = () => {

  // always auto scroll hook
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <section className={`${styles.section} 
      container flex p-4 px-5 py-24`}>
      <div className={`${styles.contactMe} mx-auto text-white md:w-[50%]`}>
        <h2 className="contact-title pb-4">
          Contact
        </h2>
        <p className="text-white contactIntro">
          I'm currently available for hire within any full-time or part-time Front-end Developer roles.
          If you want to discuss potential freelance contracts with me, please feel free to get in touch...
        </p>
        <p className="py-2 text-white">
          <span className="font-bold">Email me:</span>
          <a href="mailto:glitchyghost@gmail.com"> <em>Matt Jones</em></a>
        </p>
        <a href={myCV} download="Matt Jones C.V 2023.pdf">
          <em className='text--peachy'><b>Download my CV</b></em>
        </a>
        <div className='iconDrop flex justify-center py-8 mb-16'>
          <a href='https://github.com/Matt-Jones-Developer'>
            <img className='github p-2'
              src={`${github}`}
              width="90px"
              height="90px"
              alt='github icon'
              title='View my Github Profile & repos'
            >
            </img>
          </a>
          <a href='https://join.slack.com/t/teamcode20/shared_invite/zt-1qnn7btg7-Jdmmun1U8GVM_whdUVFZhw'>
            <img className='slack p-2'
              src={`${slack}`}
              width="90px"
              height="64px"
              alt='slack icon'
              title='Chat me on Slack'
            >
            </img>
          </a>
          <a href='https://www.linkedin.com/in/matt-jones-zx81/'>
            <img className='linkedIn p-2'
              src={`${linkedIn}`}
              width="90px"
              height="64px"
              alt='linkedIn icon'
              title='View my LinkedIn Profile'
            >
            </img>
          </a>
        </div>
      </div>
      {/* form import */}
      <div className={`${styles.formModal}`}>
        <Form />
      </div>
    </section>
  );
};

export default Contact;