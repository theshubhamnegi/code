import styles from '../styles/CertificateCard.module.css';


const CertificateCard = ({ certificate }) => {
  return (
    <a
      href={certificate.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      {/* <iframe 
      src={certificate.cover_image} 
      frameborder="0" 
      allowfullscreen="" 
      title="Embedded post"
      width={255}
      height={150}
      ></iframe> */}
      <img 
        src={certificate.cover_image} 
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{certificate.title}</h3>
        <p>{certificate.description}</p>
      </div>
    </a>
  );
};

export default CertificateCard;
