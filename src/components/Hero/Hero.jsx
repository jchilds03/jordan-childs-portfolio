import styles from "./HeroStyles.module.css";
import gradPhoto from "../../assets/GradPhoto.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/Childs_Resume_Grad_23.pdf";
import { useTheme } from "../../theme/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={gradPhoto}
          alt="Jordan Childs Profile Picture."
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div>
        <h1>
          Jordan <br />
          Childs
        </h1>
        <h2>Full-Stack Web Developer</h2>
        <span>
          <a href="https://github.com/jchilds03" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/childsjordan/" target="_blank">
            <img src={linkedInIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
