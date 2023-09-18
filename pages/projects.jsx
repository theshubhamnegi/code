import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import FilterButton from '../components/FilterButton';

const ProjectsPage = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  useEffect(() => {
    if (selectedTypes.length === 0) {
      setFilteredProjects(projects); // Show all projects if no type selected
    } else {
      const filtered = projects.filter((project) => selectedTypes.includes(project.type));
      setFilteredProjects(filtered);
    }
  }, [projects, selectedTypes]);

  useEffect(() => {
    const filteredBySearch = projects.filter((project) =>
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProjects(filteredBySearch);
  }, [projects, searchQuery]);

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.filters}>
        <FilterButton
          value=""
          checked={selectedTypes.length === 0}
          onChange={() => setSelectedTypes([])}
          tag={"all-project"}
        />
        <FilterButton
          value="web"
          checked={selectedTypes.includes('web')}
          onChange={() => handleFilterType('web')}
          tag={"web"}
        />
        <FilterButton
          value="python"
          checked={selectedTypes.includes('python')}
          onChange={() => handleFilterType('python')}
          tag={"python"}
        />
        <FilterButton
          value="cpp"
          checked={selectedTypes.includes('cpp')}
          onChange={() => handleFilterType('cpp')}
          tag={"cpp"}
        />
        <FilterButton
          value="aiml"
          checked={selectedTypes.includes('aiml')}
          onChange={() => handleFilterType('aiml')}
          tag={"aiml"}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchbox}
        />
      </div>
      <div className={styles.container}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>Search something different.</p>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
