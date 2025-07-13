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
      <section className="hero container" id="hero">
        <div className="hero-blue">
          <div>
            <h1><small>Hi I'm</small>
              Viswa V
            </h1>
            <p>
              I am Frontend Developer i am learning full stack right now my scope of interests are in website development. <span>I'm interested in AI topics and MERN which is widely used in development industry.</span>
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
          <img src="./imgs/Viswa Photo - Chatgpt 2-Background Removed.png" alt="viswa-image" width="100%" />
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
              <li>SQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="right-column">
            <h3>A Bit About Me</h3>
            <p>
                I am Viswa, a Fullstack Developer, currently aspiring in the field of  full-stack development. Fishing for opurtunities in the world of Development.
                My areas of interest include website development, AI, and MERN, which is widely used in the development industry.
            </p>
            <p>
                I have completed a project that uses Django as a database to create a product and its details, aimed at helping users of a commercial company navigate their products. I have also worked on a project using React and Next.js to create a crowdfunding platform that utilizes a cryptowallet for money transfers. Basically would like to work on the concept of empowering user friendly application design.
            </p>
          </div>
        </div>
      </section>
      <section className="work-experience container" id="work-experience">
        <h2>
          <small>Recent</small>
          Work Experience
        </h2>
        <div className="jobs">
          <article>
            <figure>
              <div>
                <img src="./imgs/Plant Guardian Home Page.png" alt="Plant Guardian" width="100%" />
                <figcaption>
                  Plant Guardian
                </figcaption>
              </div>
            </figure>
            <h3>CS Final Year Project</h3>
            <div>2024-25</div>
            <p>An group project based upon machine learning.</p>
            <p>Understand the concepts behind CNN Model.</p>
            <p>One of the main view of the project is understanding the concept of how well the model identifies the plant and it's structural properties.</p>
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
                <img src="./imgs/workplace-3.jpg" alt="Frontend Development" width="100%" />
                <figcaption>
                  Frontend Development
                </figcaption>
              </div>
            </figure>
            <h3>Block-Fund</h3>
            <div>2023-2024</div>
            <p>I have undergone group project development using Web3.</p>
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
    <footer>
        <div class="footer-container">
            <div class="footer-about">
                <img src="./imgs/Logo- 2.jpg" className="footer-logo"/>
                <p>Portfolio of an aspiring job fresher who is seeking for task and challenge based job opportunities</p>
            </div>
            
            <div class="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#skills">Skill sets</a></li>
                    <li><a href="#work-experience">Work experience</a></li>
                    <li><a href="#hero">About me</a></li>
                    <li><a href="mailto:viswamalar2004@gmail.com">Contact</a></li>
                </ul>
            </div>
            
            <div class="footer-contact">
                <h3>Contact Us</h3>
                <p><span>📍</span> Chennai</p>
                <p><span>📞</span> +91 7845425810</p>
                <p><span>✉️</span> viswamalar2004@gmail.com</p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2025 NoCompany. All Rights Reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
    </footer>
    </>
  );
}
