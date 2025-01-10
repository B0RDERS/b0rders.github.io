import styles from "./page.module.scss";
import { FaEnvelope, FaPhone, FaCalendar, FaLinkedin, FaGithub, FaFilePdf, FaReact, FaLink } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.intro} id="intro">
        <h1>Andrew Borders</h1>
      </div>
      <div className={styles.section} id="education">
        <h2>Education</h2>
        <div className={styles.educationItem}>
          <h3>University of Michigan, Ann Arbor, MI</h3>
          <p>
            <strong>College of Engineering, BSE of Computer Science</strong> | August 2020 - May 2024
          </p>
          <ul>
            <li>GPA: 3.80 | Dean’s List</li>
            <li>
              <strong>Relevant Courses: </strong>
              Operating Systems, Web Systems, Computer Security, Computer Architecture, GPU Programming, Video Game Development
            </li>
          </ul>
        </div>
        <div className={styles.educationItem}>
          <p>
            <strong>College of Engineering, MSE of Computer Science</strong> | August 2024 - May 2025
          </p>
          <ul>
            <li>
              <strong>Areas of focus:</strong> Computer Architecture and Parallel Computing
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.section} id="experience">
        <h2>Experience</h2>
        <div className={styles.experienceItem}>
          <h3>Lagena</h3>
          <p>
            <strong>Co-Founder and Full-Stack Developer</strong> | May 2024 - Present
          </p>
          <ul>
            <li>Designed and built a dynamic frontend using Next.js, React, and SCSS</li>
            <li>
              Collaborated on a backend API integrating stable diffusion, text-to-speech, and large language models for real-time avatar interaction.
            </li>
          </ul>
        </div>
        <div className={styles.experienceItem}>
          <h3>WayWiser, Austin, TX</h3>
          <p>
            <strong>Backend Software Development Internship</strong> | May 2023 - May 2024
          </p>
          <ul>
            <li>Created an SMS-integrated AI assistant using OpenAI’s API</li>
            <li>
              Encoded conversations and user data in a vector database, increasing the AI assistant’s context size by allowing it to query relevant info through the database.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.section} id="projects">
        <h2>Projects</h2>
        <div className={styles.projectItem}>
          <h3>Verilog RISC-V Multiprocessor</h3>
          <p>
            <strong>Group Project</strong> | Aug 2024 - Dec 2024
          </p>
          <ul>
            <li>
              Wrote a RV32+M multiprocessor with R10k architecture, N-way superscalar execution, GSHARE branch prediction, OoO loads, and I-cache prefetching.
            </li>
          </ul>
        </div>
        <div className={styles.projectItem}>
          <h3>WebGPU Renderer <a href="https://aborders.dev/webgpu-rasterizer/" aria-label="Live Demo of WebGPU Renderer"><FaLink/></a></h3>
          <p>
            <strong>Independent Project</strong> | Aug 2024 - Sep 2024
          </p>
          <ul>
            <li>Wrote a real-time Blinn-Phong renderer in WebGPU (the successor to WebGL).</li>
            <li>Set up CI/CD, generating and deploying a static site through GitHub Actions.</li>
          </ul>
        </div>
        <div className={styles.projectItem}>
          <h3>CUDA Fractal Zoom Renderer</h3>
          <p>
            <strong>Independent Project</strong> | Nov 2024 - Jan 2025
          </p>
          <ul>
            <li>Built an efficient fractal zoom renderer in CUDA with dynamic parallelism and temporal caching.</li>
          </ul>
        </div>
        <div className={styles.projectItem}>
          <h3>Nonprofit Web Development</h3>
          <p>
            <strong>Freelance Work</strong> | Feb 2020 - Present
          </p>
          <ul>
            <li>Designed and maintained static sites, giving local non-profits internet presence.</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer} id="footer">
        <div className={styles.footerLinks}>
          <a href="tel:+15127393210" aria-label="Andrew Borders' Cell Phone">
            <FaPhone />
          </a>
          <a href="mailto:atborders1@gmail.com" aria-label="Andrew Borders' Email">
            <FaEnvelope />
          </a>
          <a href="https://calendar.app.google/TyGTHr7NuYmsXKLS7" aria-label="Andrew Borders' Calendar">
            <FaCalendar />
          </a>
          <a href="https://www.linkedin.com/in/b0rders/" aria-label="Andrew Borders' Linkedin">
            <FaLinkedin />
          </a>
          <a href="https://github.com/B0RDERS" aria-label="Andrew Borders' Github">
            <FaGithub />
          </a>
          <a href="/resume.pdf" aria-label="Andrew Borders' Resume">
            <FaFilePdf />
          </a>
        </div>
        <div className={styles.footerText}>
          Built with <FaReact /> by Andrew Borders
        </div>
      </div>
    </div>
  );
}
