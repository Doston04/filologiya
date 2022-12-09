import Head from "next/head";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form";
import HeroSection from "../components/HeroSection";
import MiniBlock from "../components/MiniBlock";
import QuotesSection from "../components/QuotesSection";

export default function Home() {
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
        <main>
          <HeroSection />
          <MiniBlock />
          <Form />
          <AboutSection />
          <QuotesSection />
          <Form />
        </main>
        <Footer />
      </div>
    </>
  );
}
