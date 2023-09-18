import RepoCard from '../components/RepoCard';
import { getRepos } from './api/repos';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
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
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const repos = getRepos();

  return {
    props: { title: 'repos', repos },
  };
}

export default GithubPage;
