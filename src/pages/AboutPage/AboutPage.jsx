import './AboutPage.css';
import { FaGithub } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <main className='aboutpage'>
      <section className='container'>
        <article>
          <h2>About this App</h2>
          <p>This a Todo App created with the latest version Create-React-App and React Router.</p>
          <p>It allows to save todos to a list, filter the list, delete items and update items.</p>
          <p>There are confirmation modals and alerts to give feedback to the user.</p>
          <p>The changes to the list are persisted to Local Storage using useEffect.</p>
          <p>The state is centrally managed in a global context.</p>
          <a target='_blank' rel='noreferrer' href='https://github.com/javirob' className='btn'>
            View Code <FaGithub />
          </a>
        </article>
        <article>
          <h3>Dependencies</h3>
          <p>React v18, React Icons, React Router v6</p>
        </article>

        <article>
          <h3>Hooks used</h3>
          <p>useState, useEffect, useContext, useRef</p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
