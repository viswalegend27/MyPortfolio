"use client";
import Image from "next/image";
import React, { useState } from 'react';

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
            <div className="logo">V</div>
            <div className="logo-text">Portfolio</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
                <li><a href="#">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="mailto:viswamalar2004@gmail.com" className="button">Contact Me</a></li>
            </ul>
        </nav>
        <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>
        </a>
    </header>
    <main>
      <section className="hero container">
        <div className="hero-blue">
          <div>
            <h1><small>Hi I'm</small>
              Viswa V
            </h1>
            <p>
              I am Viswa i am Frontend Developer i am learning full stack right now my scope of interests are in website development. <span>I'm interested in AI topics and MERN which is widely used in development industry.</span>
            </p>
            <div className="call-to-action">
              <a href="./resume/18-10-2024.pdf" className="button black" target="_blank">
                View Resume
              </a>
              <a href="mailto:viswamalar2004@gmail.com" className="button white">
                Contact Me
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/viswalegend27" target="_blank">
                <img src="./imgs/github.png" alt="GitHub" width="48" />
              </a>
              <a href="https://www.linkedin.com/in/viswa-v-6968a2275/" target="_blank">
                <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-purple">
          <img src="./imgs/hero-image.png" alt="viswa-image" width="100%" />
        </div>
      </section>
      <section className="logos container">
        <div className = "marquee">
          <div className="track">
            <img src="./imgs/html.png" alt="HTML" width="128" />
            <img src="./imgs/css.png" alt="CSS" width="128" />
            <img src="./imgs/javascript.png" alt="JS" width="128" />
            <img src="./imgs/react.png" width="128" alt="React" />
            <img src="./imgs/vscode.png" width="128" alt="VS Code" />
            <img src="./imgs/python.png" width="128" alt="Python" />
            <img src="./imgs/html.png" alt="HTML" width="128" />
            <img src="./imgs/css.png" alt="CSS" width="128" />
            <img src="./imgs/javascript.png" alt="JS" width="128" />
            <img src="./imgs/react.png" width="128" alt="React" />
            <img src="./imgs/vscode.png" width="128" alt="VS Code" />
            <img src="./imgs/python.png" width="128" alt="Python" />
            <img src="./imgs/html.png" alt="HTML" width="128" />
            <img src="./imgs/css.png" alt="CSS" width="128" />
            <img src="./imgs/javascript.png" alt="JS" width="128" />
            <img src="./imgs/react.png" width="128" alt="React" />
            <img src="./imgs/vscode.png" width="128" alt="VS Code" />
            <img src="./imgs/python.png" width="128" alt="Python" />
          </div>
        </div>  
      </section>
      <section className="skills container" id="skills">
        <h2>
          <small>About Me</small>
          Skills
        </h2>
        <div className="holder-blue">
          <div className="left-column">
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="right-column">
            <h3>A bit about me</h3>
            <p>
              I am Viswa i am Frontend Developer i am learning full stack right now my scope of interests are in website development. I'm interested in AI topics and MERN which is widely used in development industry.
            </p>
            <p>
              I'm currently working on a project that uses Django as database to create a product and their details that can help user of an commercial company to navigate their products.  I also worked on a project that uses React and Next.js to create a crowdfunding that uses cryptowallet to transfer money.
            </p>
          </div>
        </div>
      </section>
      <section className="work-experience container">
        <h2>
          <small>Recent</small>
          Work Experience
        </h2>
        <div className="jobs">
          <article>
            <figure>
              <div>
                <img src="./imgs/workplace-1.jpg" alt="DigiAlert" width="100%" />
                <figcaption>
                  DigiAlert
                </figcaption>
              </div>
            </figure>
            <h3>Cybersecurity Intern</h3>
            <div>2023</div>
            <p>I acquired knowledge in cybersecurity and networking.</p>
            <p>Learned about Basics of penetration testing.</p>
            <p>Obtained knowledge about Burpsuite and its usage in networking.</p>
          </article>
          <article>
            <figure>
              <div>
                <img src="./imgs/workplace-2.jpg" alt="Codsoft Internship" width="100%" />
                <figcaption>
                  Codsoft Internship
                </figcaption>
              </div>
            </figure>
            <h3>Web Development</h3>
            <div>2024</div>
            <p>Gained experience in developing web development projects</p>
            <p>Developed projects based on basis of Javascript and HTML/CSS.</p>
          </article>
          <article>
            <figure>
              <div>
                <img src="./imgs/workplace-3.jpg" alt="MERN Stack Development" width="100%" />
                <figcaption>
                  MERN Stack Development
                </figcaption>
              </div>
            </figure>
            <h3>Block-Fund</h3>
            <div>2023-2024</div>
            <p>I have undergone group project development using MERN stack.</p>
            <p>An project based on working of crypto-currency in crowdfund.</p>
          </article>  
        </div>
      </section>
      <section id="projects" className="bento container">
        <h2>
          <small>
            Previous
          </small>
          Completed Projects
        </h2>
        <div className="bento-grid">
          <a href="#" className="bento-item">
            <img src="./imgs/bento-1.jpg" alt="Fitness Tracker" width="100%" />
          </a>
          <a href="#" className="bento-item">
            <img src="./imgs/bento-2.jpg" alt="Calorie Tracker" width="100%" />
          </a>
          <a href="#" className="bento-item">
            <img src="./imgs/bento-3.jpg" alt="Dj-Ecom" width="100%" />
          </a>
          <a href="#" className="bento-item">
            <img src="./imgs/bento-4.jpg" alt="Budget-Tracker" width="100%" />
          </a>
          <a href="#" className="bento-item">
            <img src="./imgs/bento-5.jpg" alt="AI-Image generator" width="100%" />
          </a>
          <a href="#" className="bento-item">
            <img src="./imgs/bento-6.jpg" alt="AI-Image generator" width="100%" />
          </a>
        </div>
      </section>
      <section className="chatbot container">
      <h2>
        <small>Talk to me</small>
        Chatbot
      </h2>
      <div className="chatbot-blue">
        <div className="chat-info">
          <h3>AI Chatbot</h3>
          <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
          <p>You can also download my resume here if you want to take a look at it. I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
          <p>With the AI i have embedded in this portfolio you ask any thing about my traits and skills it will answer in an 
            clear cut manner. Also please provide the correct type of prompt for the ai to understand thank you very much.
          </p>
          <p>If you wanna know more about the scope of this portfolio then don't forget to download my resume.</p>
          <p>Thank you.</p>
          <a href="./resume/13-10-24-Resume Updated.pdf" className="button black" target="_blank">Download Resume</a>
        </div>
        <div className="chat-box">
          <iframe 
            src="https://www.chatbase.co/chatbot-iframe/8TD4Yx3OEo8uSe8GJsCgZ" 
            width="100%" 
            style={{height: '100%', minHeight: '700px'}} 
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
    </main>
    </>
  );
}
