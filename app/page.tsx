import styles from "./page.module.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaCalendar, FaFilePdf } from "react-icons/fa"

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Andrew Borders</h1>
      <a href="mailto:atborders1@gmail.com">
        <FaEnvelope/>
      </a>
      <a href="https://www.linkedin.com/in/b0rders/">
        <FaLinkedin/>
      </a>
      <a href="https://github.com/B0RDERS">
        <FaGithub/>
      </a>
      <a href="https://calendar.app.google/TyGTHr7NuYmsXKLS7">
        <FaCalendar/>
      </a>
      <a href="/resume">
        <FaFilePdf/>
      </a>
    </div>
  );
}
