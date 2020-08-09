import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import "../components/bootstrap.min.css";
import "../components/layout.css";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
    router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }, []);
  return (
    <>
      <style jsx global>
        {`
          #nprogress .bar {
            background: orange;
            height: 4px;
          }
        `}
      </style>
      <Head>
        <link rel="icon" href="/logo.png" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="YjBkZTdiZjYtNDM0YS00MWVkLWEyMmUtYzNmZmM5YjM5ZDMwNjM3MzE5NTYwMjM5MTAyMTU1"
          id="snipcart"
        ></script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default MyApp;
