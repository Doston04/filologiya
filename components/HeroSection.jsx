import Image from "next/image";
import { qalpoq } from "../icons/icons";
import jamilaOpa from "../public/media/jamila-opa.png";

export default function HeroSection({ translations }) {
  return (
    <section className="hero_section">
      <div className="box hero_inner">
        <div className="hero_content">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "55px",
              alignItems: "flex-start",
            }}
          >
            <h1 className="h1">{translations.hero_title}</h1>
            <button className="reg_btn_hero">
              {qalpoq}
              <p className="p">{translations.form_button}</p>
            </button>
          </div>
          <div className="hero_stats_container">
            <div className="hero_stats">
              <p className="stats_number">100+</p>
              <p className="p">{translations.hero_stats1}</p>
            </div>
            <div className="hero_stats">
              <p className="stats_number">12</p>
              <p className="p">{translations.hero_stats2}</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "fit-content",
          }}
        >
          <Image className="hero_img" src={jamilaOpa} alt="hero image" />
        </div>
      </div>
    </section>
  );
}
