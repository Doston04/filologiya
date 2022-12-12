import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import AboutSection from "../components/AboutSection";
import CoursesSection from "../components/CoursesSection";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection";
import InfoBlock from "../components/InfoSection";
import MiniBlock from "../components/MiniBlock";
import QuotesSection from "../components/QuotesSection";
import TariffSection from "../components/TariffSection";

export default function Home() {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const onRefClick = (ref) => {
    ref.current.scrollIntoView(true);
  };

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Filologiya" />
        <title>Filologiya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Header toTop={toTop} onRefClick={onRefClick} />
        <main>
          <HeroSection />
          <MiniBlock />
          <CoursesSection />
          <TariffSection />
          <InfoBlock />
          <AboutSection />
          <QuotesSection />
          <Form />
        </main>
        <Footer toTop={toTop} onRefClick={onRefClick} />
      </div>
      <div className={isReady ? "spinner" : "spinner show"}>
        <div class="lds-dual-ring"></div>
      </div>
    </>
  );
}
