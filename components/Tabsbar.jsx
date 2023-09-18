import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.png" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.png" filename="about.html" path="/about" />
      <Tab icon="/css_icon.png" filename="contact.css" path="/contact" />
      <Tab icon="/js_icon.png" filename="projects.js" path="/projects" />
      <Tab icon="/json_icon.png" filename="certificate.json" path="/certificate" />
      <Tab icon="/markdown_icon.png" filename="github_skills.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
