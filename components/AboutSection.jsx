import Image from "next/image";
import { qalpoq } from "../icons/icons";
import aboutImg1 from "../public/media/img1.png";
import aboutImg2 from "../public/media/img2.png";

export default function AboutSection({
  myRef,
  formRef,
  onRefClick,
  translations,
}) {
  return (
    <section ref={myRef} className="about_section">
      <div className="box about_inner">
        <div className="about_grid_container">
          <div>
            <h2 className="h2">{translations.prepod}</h2>
            <div className="text_div">
              <p className="p">{translations.about_txt1}</p>
              <p className="p">{translations.about_txt2}</p>
              <p className="p">{translations.about_txt3}</p>
            </div>
            <button
              type="button"
              className="reg_btn"
              onClick={() => onRefClick(formRef)}
            >
              {qalpoq}
              <p className="p">{translations.form_button}</p>
            </button>
          </div>
          <div className="about_images_container">
            <Image
              src={aboutImg1}
              alt="About image"
              quality={100}
              priority={true}
            />
            <Image
              src={aboutImg2}
              alt="About image"
              quality={100}
              priority={true}
            />
          </div>
        </div>
        <div className="career_div_container">
          <div className="career_div">
            <p className="career_title">2006-г.</p>
            <p className="p">{translations.kandidat}</p>
          </div>
          <div className="career_div">
            <p className="career_title">2009-г.</p>
            <p className="p">{translations.dotsent}</p>
          </div>
          <div className="career_div">
            <p className="career_title">2016-г.</p>
            <p className="p">{translations.doctor} (DSc)</p>
          </div>
          <div className="career_div">
            <p className="career_title">2022-г.</p>
            <p className="p">{translations.professor}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
