import { useState, useEffect } from 'react';
import CertificateCard from '../components/CertificateCard';
import { getCertificates } from './api/certificates';
import styles from '../styles/ProjectsPage.module.css';
import FilterButton from '../components/FilterButton';

const ProjectsPage = ({ certificates }) => {
  const [filteredCertificates, setFilteredCertificates] = useState(certificates);
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
      setFilteredCertificates(certificates); // Show all projects if no type selected
    } else {
      const filtered = certificates.filter((certificates) => selectedTypes.includes(certificates.type));
      setFilteredCertificates(filtered);
    }
  }, [certificates, selectedTypes]);

  useEffect(() => {
    const filteredBySearch = certificates.filter((certificates) =>
      certificates.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCertificates(filteredBySearch);
  }, [certificates, searchQuery]);
  return (
    <>
      <h3>Stuff I've Gained So Far</h3>
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
        { filteredCertificates.length > 0 ? (
          filteredCertificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))
        ) : (
          <p>Search something different</p>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const certificates = getCertificates();

  return {
    props: { title: 'Certificates', certificates },
  };
}

export default ProjectsPage;
