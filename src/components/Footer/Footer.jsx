import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='container'>
        <a href='https://javier-robles.netlify.app/' target='_blank' rel='noreferrer'>
          Javi Spanish Dev <FaLink />
        </a>

        <div className='social'>
          <a href='https://www.linkedin.com/in/javirv/' target='_blank' rel='noreferrer'>
            <FaLinkedin />
          </a>

          <a href='https://github.com/javirob' target='_blank' rel='noreferrer'>
            <FaGithub />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
