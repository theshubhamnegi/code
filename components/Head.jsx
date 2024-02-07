import Head from 'next/head';
import Icons from './icons/CodeIcon';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <img src={Icons} alt={Icons} srcset="Icons" />
      <title>{title}</title>
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Shubham Negi',
};
