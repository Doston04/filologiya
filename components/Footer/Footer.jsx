import {
  email,
  facebook,
  instagram,
  location,
  phone,
  telegram,
} from "../../icons/icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`box ${styles.footer_inner}`}>
        <div className={styles.footer_top}>
          <nav className={styles.footer_local_navigation}></nav>
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
        <div className={styles.footer_bottom}></div>
      </div>
    </footer>
  );
}
