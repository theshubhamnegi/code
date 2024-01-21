import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'wrake',
    href: 'https://wrake.com',
  },
  {
    social: 'email',
    link: 'wrake@gmail.com',
    href: 'mailto:wrake@gmail.com',
  },
  {
    social: 'github',
    link: 'wrake',
    href: 'https://github.com/wrake',
  },
  {
    social: 'linkedin',
    link: 'wrake',
    href: 'https://www.linkedin.com/in/wrake/',
  },
  {
    social: 'whataspp',
    link: 'wrake',
    href: 'https://www.whatsapp.com/wrake',
  },
  {
    social: 'telegram',
    link: 'wrake',
    href: 'https://t.me/wrake',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
      <p className={styles.line}>
        <span className={styles.className}>.resume</span> &#123;
      </p>
      <p className={styles.line}>&nbsp;&nbsp;&nbsp;resume: 
        <a href="./ShubhamResume.pdf" download="ShubhamResume.pdf">
          resume.pdf
        </a>
      </p>
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
