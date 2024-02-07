import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <link rel="shortcut icon" href="../public/favicon.ico" type="image/x-icon" />
      <title>{title}</title>
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Shubham Negi',
};
