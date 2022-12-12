import { qalpoq } from "../icons/icons";

export default function HeroSection() {
  return (
    <section className="hero_section">
      <div className="box hero_inner">
        <div className="hero_content">
          <div>
            <h1 className="h1">
              Хотите научиться успешному написанию научной работы, тогда спешите
              на наш курс
            </h1>
            <button className="reg_btn_hero">
              {qalpoq}
              <p className="p">Записаться на курс</p>
            </button>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
