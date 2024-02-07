import Head from 'next/head';
import Icons from './icons/CodeIcon';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <img src={Icons} alt="" srcset="" />
      <title>{title}</title>
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Shubham Negi',
};
