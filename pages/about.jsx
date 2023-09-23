import styles from '../styles/About.module.css';

const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br />
      <h7>this section is under development so wait for it.</h7>

      <header className={styles.masthead}>
        <p className={styles.mastheadintro}>Hi I'm</p>
        <h1 className={styles.mastheadheading}>Wrake</h1>
      </header>
      <section className={styles.introductionsection}>
        <h1>Introduction</h1>
        <p>
          A passionate visionary young developer who offers fresh ideas and an innovative perspective on technology with an unusual perspective and enjoys bringing innovative solutions to the table.
        </p>
        <p>
          I love the internet, technology, and building beautiful things.
        </p>
      </section>
      <section className={styles.questionssection}>
        <h1>More About Me</h1>
        <h2>What you do in free time?</h2>
        <p>
          In my free time, I watch anime, play games, read some books (E-Books), and think about why I got errors in code and how to solve them.
        </p>
        <h2>Why you start programming?</h2>
        <p>
          Making something new is the most fascinating thing and for me when I create an Excel file for the computer lab it amuses me. and later by landing some fingers on the keyboard I jumped on programming.  
        </p>
        <h2>Why do you want to be a Data Scientist?</h2>
        <p>
          Every time I work with data, I discover something that surprises me. In spite of that, Uncollected data, though, surprises me the most, because it can be something totally different that can turn everything around.
        </p>
      </section>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
