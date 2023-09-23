import SkillCard from '../components/SkillCard';
import { getRepos } from './api/skills';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ skills, user }) => {
  return (
    <>
      <div className={styles.user}>
        <div>Living
          {/* <h3 className={styles.username}>{user.login}</h3> */}
        </div>
        <div>Learning
          {/* <h3>{user.public_repos} repos</h3> */}
        </div>
        <div>Leveling
          {/* <h3>{user.followers} followers</h3> */}
        </div>
      </div>
    <h3>Stuff I've Learnt So Far</h3>
      <div className={styles.container}>
        {skills.map((skill) => (
          <SkillCard key={skill.id} repo={skill} />
        ))}
      </div>
      <div className={styles.contributions}>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const skills = getRepos();

  return {
    props: { title: 'skills', skills },
  };
}

export default GithubPage;
