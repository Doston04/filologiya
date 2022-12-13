import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { locale } = router;

  const BASE_URL = "https://fmx.choopon.uz/api";

  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const onRefClick = (ref) => {
    ref.current.scrollIntoView(true);
  };

  const [loading, setLoading] = useState(true);
  const [allInfo, setAllInfo] = useState({});
  const [title, setTitle] = useState("");
  const [map, setMap] = useState("");
  const [translations, setTranslations] = useState({});

  let translationsArray = [];

  useEffect(() => {
    setLoading(true);
  }, [locale]);

  useEffect(() => {
    if (locale == "ru") {
      axios
        .get(BASE_URL + "/translations")
        .then((res) => {
          const data = res.data.data;
          data.forEach((translation) => {
            translationsArray.push({
              [translation.key]: translation.val.ru,
            });
          });
          let russian = {};
          for (let i = 0; i < translationsArray.length; i++) {
            Object.assign(russian, translationsArray[i]);
          }
          setTranslations(russian);
          setLoading(false);
        })
        .catch((err) => console.log(err));
      axios
        .get(BASE_URL + "/site-info")
        .then((res) => {
          setTitle(res.data.data.title.ru);
          setMap(res.data.data.address.ru);
          setAllInfo(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (locale == "uz") {
      axios
        .get(BASE_URL + "/translations")
        .then((res) => {
          const data = res.data.data;
          data.forEach((translation) => {
            translationsArray.push({
              [translation.key]: translation.val.uz,
            });
          });
          let uzbek = {};
          for (let i = 0; i < translationsArray.length; i++) {
            Object.assign(uzbek, translationsArray[i]);
          }
          setTranslations(uzbek);
          setLoading(false);
        })
        .catch((err) => console.log(err));
      axios
        .get(BASE_URL + "/site-info")
        .then((res) => {
          setTitle(res.data.data.title.uz);
          setMap(res.data.data.address.uz);
          setAllInfo(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [locale]);

  const [isSuccess, setIsSuccess] = useState(false);

  const sections = [
    {
      id: "1",
      name: translations.about,
    },
    {
      id: "2",
      name: translations.services,
    },
    {
      id: "3",
      name: translations.courses,
    },
    {
      id: "4",
      name: translations.tariffs,
    },
    {
      id: "5",
      name: translations.result,
    },
    {
      id: "6",
      name: translations.registration,
    },
  ];

  // console.log(allInfo);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Filologiya" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Header
          toTop={toTop}
          onRefClick={onRefClick}
          sections={sections}
          translations={translations}
          allInfo={allInfo}
        />
        <main>
          <HeroSection translations={translations} />
          <MiniBlock translations={translations} />
          <CoursesSection translations={translations} />
          <TariffSection translations={translations} />
          <InfoBlock translations={translations} />
          <AboutSection translations={translations} />
          <QuotesSection translations={translations} />
          <Form
            translations={translations}
            BASE_URL={BASE_URL}
            setIsSuccess={setIsSuccess}
          />
        </main>
        <Footer
          toTop={toTop}
          onRefClick={onRefClick}
          sections={sections}
          translations={translations}
          allInfo={allInfo}
          map={map}
        />
      </div>
      <div className={loading ? "spinner show" : "spinner"}>
        <div className="lds-dual-ring"></div>
      </div>
      <div className={isSuccess ? "toast show" : "toast"}>
        <p>{translations.toast}!</p>
      </div>
    </>
  );
}
