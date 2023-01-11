import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

export default function Header({ toTop, onRefClick, sections, allInfo }) {
  const router = useRouter();
  const { locale } = router;

  const [currentLocale, setCurrentLocale] = useState(locale);
  const [isMenu, setIsMenu] = useState(false);

  const header = useRef();

  const scrollMagic = () => {
    let top = window.pageYOffset;

    if (top >= 10) {
      header.current.classList.add("background");
    } else {
      header.current.classList.remove("background");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollMagic);
    return () => {
      window.removeEventListener("scroll", scrollMagic);
    };
  }, [scrollMagic]);

  useEffect(() => {
    setIsMenu(false);
  }, [locale]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className.includes("Header_mobile_header__RCGxd")) {
        setIsMenu(false);
      } else if (
        e.target.className.includes("Header_mobile_header_inner__DC7_1")
      ) {
        setIsMenu(true);
      }
    });
  }, []);

  return (
    <header ref={header} className={styles.header}>
      <div className={`box ${styles.header_inner}`}>
        <p className="logo" role="button" onClick={toTop}>
          ФИЛОЛОГИЯ
        </p>
        <nav className={styles.header_navigation}>
          {sections.map((section) => {
            return (
              <p
                className="p"
                role="button"
                key={section.id}
                onClick={() => onRefClick(section.myRef)}
              >
                {section.name}
              </p>
            );
          })}
        </nav>
        <nav className={styles.header_navigation}>
          <a className={styles.phone} href={`tel: ${allInfo.phone_number}`}>
            {allInfo.phone_number}
          </a>
          <div className={styles.langChanger}>
            {router.locales.map((locale) => {
              return (
                <Link
                  key={locale}
                  href={router.asPath}
                  locale={locale}
                  onClick={() => setCurrentLocale(locale)}
                  className={
                    locale == currentLocale
                      ? `${styles.link} ${styles.active}`
                      : styles.link
                  }
                  role="button"
                >
                  {locale.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </nav>
        <div
          className={styles.hamburger}
          role="button"
          onClick={() => setIsMenu(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={
          isMenu
            ? `${styles.mobile_header} ${styles.show}`
            : styles.mobile_header
        }
      >
        <div className={styles.mobile_header_inner}>
          {sections.map((section) => {
            return (
              <p className="p" key={section.id}>
                {section.name}
              </p>
            );
          })}
          <a className={styles.phone} href={`tel: ${allInfo.phone_number}`}>
            {allInfo.phone_number}
          </a>
          <div className={styles.langChanger}>
            {router.locales.map((locale) => {
              return (
                <Link
                  key={locale}
                  href={router.asPath}
                  locale={locale}
                  onClick={() => setCurrentLocale(locale)}
                  className={
                    locale == currentLocale
                      ? `${styles.link} ${styles.active}`
                      : styles.link
                  }
                  role="button"
                >
                  {locale.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
