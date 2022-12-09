import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  // const t = locale === "ru" ? ru : uz;

  // const changeLocale = (req) => {
  //   router.push(`/${router.pathname}`, `/${router.pathname}`, {
  //     locale: req,
  //   });
  // };

  return (
    <header>
      <div className={`box ${styles.header_inner}`}>
        <p className="logo" role="button">
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
          <a href="tel:+998991234567">+998 99 123 45 67</a>
          <div className={styles.langChanger}>
            <p className="p" role="button">
              Uz
            </p>
            <span></span>
            <p className="p" role="button">
              Ru
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
