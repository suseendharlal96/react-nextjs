import { useEffect } from "react";
import { useRouter } from "next/router";

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
            backgroundColor: "red";
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default MyApp;
