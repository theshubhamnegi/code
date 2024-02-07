import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Heads from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css"; 
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout>
      <Head>
      <link rel="icon" type="image/ico" sizes="any" href="/favicon.ico" />
      </Head>
      <Heads title={`Shubham Negi | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
