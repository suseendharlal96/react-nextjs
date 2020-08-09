import Head from "next/head";

import Info from "../components/Info";
import BackgroundImg from "../components/BackgroundImg";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Agape Café</title>
      </Head>
      <BackgroundImg
        title="About Us"
        styleClass="about-background"
        img="/coffeeabout.jpg"
      />
      <Info path="/" btnName="Home" />
    </>
  );
};

export default About;
