import { useRouter } from "next/router";
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

export default function Footer({
  toTop,
  onRefClick,
  sections,
  translations,
  allInfo,
  map,
}) {
  return (
    <footer className={styles.footer}>
      <div className={`box ${styles.footer_inner}`}>
        <div className={styles.footer_top}>
          <nav className={styles.footer_local_navigation}>
            <p className="logo" role="button" onClick={toTop}>
              ФИЛОЛОГИЯ
            </p>
            <div className={styles.local_nav_div}>
              {sections.map((section) => {
                return (
                  <p
                    className="p"
                    key={section.id}
                    role="button"
                    onClick={() => onRefClick(section.myRef)}
                  >
                    {section.name}
                  </p>
                );
              })}
            </div>
          </nav>
          <nav className={styles.footer_navigation}>
            <div className={styles.info_nav}>
              <a
                href={`tel: ${allInfo.phone_number}`}
                className={styles.footer_nav_link}
              >
                {phone}
                <span>{allInfo.phone_number}</span>
              </a>
              <p
                target="_blank"
                rel="noreferrer"
                className={styles.footer_nav_link}
              >
                {location}
                <span>{map}</span>
              </p>
              <a
                href={`mailto: ${allInfo.email}`}
                target="_blank"
                rel="noreferrer"
                className={styles.footer_nav_link}
              >
                {email}
                <span>{allInfo.email}</span>
              </a>
            </div>
            <div className={styles.social_media_nav}>
              <a
                href={allInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className={styles.sm_icon_div}
              >
                {instagram}
              </a>
              <a
                href={allInfo.telegram}
                target="_blank"
                rel="noreferrer"
                className={styles.sm_icon_div}
              >
                {telegram}
              </a>
              <a
                href={allInfo.facebook}
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
            <p className="p">{translations.privacy_policy}</p>
          </div>
          <div className={styles.ndc_logo}>
            <a href="https://ndc.uz/ru" className={styles.ndc_logo_div}>
              {ndc}
              <span>{new Date().getFullYear()}</span>
            </a>
            <div className={styles.ndc_texts}>
              <p className="p">
                <span className={styles.blue}>{translations.developed_by}</span>{" "}
                National Developers Community
              </p>
              <p className="p">{translations.developers_site}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
