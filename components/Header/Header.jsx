import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

export default function Header({ toTop, onRefClick }) {
  const router = useRouter();
  const { locale } = router;
  // const t = locale === "ru" ? ru : uz;

  const [currentLocale, setCurrentLocale] = useState(locale);

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

  return (
    <header ref={header} className={styles.header}>
      <div className={`box ${styles.header_inner}`}>
        <p className="logo" role="button" onClick={toTop}>
          ФИЛОЛОГИЯ
        </p>
        <nav className={styles.header_navigation}>
          <p className="p" role="button">
            О нас
          </p>
          <p className="p" role="button">
            Наш курс
          </p>
          <p className="p" role="button">
            Наши услуги
          </p>
          <p className="p" role="button">
            FAQ
          </p>
          <p className="p" role="button">
            Полезные советы
          </p>
        </nav>
        <nav className={styles.header_navigation}>
          <a className={styles.phone} href="tel:+998991234567">
            +998 99 123 45 67
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
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
