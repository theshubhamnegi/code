import styles from '../styles/About.module.css';

const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br />
      <h7>this section is under development so wait for it.</h7>

      <header className={styles.masthead}>Name
        <p className={styles.mastheadintro}>Hi I'm</p>
        <h1 className={styles.mastheadheading}>Wrake</h1>
      </header>
      <section className={styles.introductionsection}>
        <h1>Introduction</h1>
        <p>
          I am a construction business owner, part time marketer, and soon to be
          web developer.
        </p>
        <p>I love the internet, technology, and building beautiful things.</p>
      </section>
      <section className={styles.locationsection}>
        <h1>Where I'm From</h1>
        <p>I'm originally from Toronto, Ontario. </p>
      </section>
      <section className={styles.questionssection}>
        <h1>More About Me</h1>
        <h2>What are your favorite hobbies?</h2>
        <p>
          My favorite hobby is building things on the internet like ecommerce
          sites and email marketing campaigns.
        </p>
        <h2>What's your dream job?</h2>
        <p>
          My dream job is similar to my current job except I would like to be
          building software instead of buildings.
        </p>
        <h2>Where do you live?</h2>
        <p>I live on a rural acreage, but I'm close to Ottawa and Montreal.</p>
        <h2>Why do you want to be a web developer?</h2>
        <p>
          Because programming is awesome and programming for the internet is
          even more awesome.
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
