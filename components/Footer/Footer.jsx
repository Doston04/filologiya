import {
  email,
  facebook,
  instagram,
  location,
  ndc,
  phone,
  telegram,
} from "../../icons/icons";
import styles from "./Footer.module.css";

export default function Footer({ toTop, onRefClick }) {
  return (
    <footer className={styles.footer}>
      <div className={`box ${styles.footer_inner}`}>
        <div className={styles.footer_top}>
          <nav className={styles.footer_local_navigation}>
            <p className="logo" role="button" onClick={toTop}>
              ФИЛОЛОГИЯ
            </p>
            <div className={styles.local_nav_div}>
              <p className="p" role="button">
                Тарифы
              </p>
              <p className="p" role="button">
                Наш курс
              </p>
              <p className="p" role="button">
                О нас
              </p>
            </div>
          </nav>
          <nav className={styles.footer_navigation}>
            <div className={styles.info_nav}>
              <a href="tel:+998991234567" className={styles.footer_nav_link}>
                {phone}
                <span>+998 99 123 45 67</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.footer_nav_link}
              >
                {location}
                <span>Toshkent shahri, Uzbekistan</span>
              </a>
              <a
                href="mailto:index@filologiya.com"
                target="_blank"
                rel="noreferrer"
                className={styles.footer_nav_link}
              >
                {email}
                <span>index@filologiya.com</span>
              </a>
            </div>
            <div className={styles.social_media_nav}>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.sm_icon_div}
              >
                {instagram}
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.sm_icon_div}
              >
                {telegram}
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className={styles.sm_icon_div}
              >
                {facebook}
              </a>
            </div>
          </nav>
        </div>
        <div className={styles.footer_bottom}>
          <div>
            <p className="p">&copy; {new Date().getFullYear()} Filologiya</p>
            <p className="p">Все права защищены.</p>
          </div>
          <div className={styles.ndc_logo}>
            <a href="https://ndc.uz/ru" className={styles.ndc_logo_div}>
              {ndc}
              <span>{new Date().getFullYear()}</span>
            </a>
            <div className={styles.ndc_texts}>
              <p className="p">
                <span className={styles.blue}>Сайт разработан в</span> National
                Development Community
              </p>
              <p className="p">Перейти на сайт разработчиков</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
