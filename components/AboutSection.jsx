import Image from "next/image";
import { qalpoq } from "../icons/icons";
import aboutImg1 from "../public/media/img1.png";
import aboutImg2 from "../public/media/img2.png";

export default function AboutSection() {
  return (
    <section className="about_section">
      <div className="box about_inner">
        <div className="about_grid_container">
          <div>
            <h2 className="h2">Кто ведет наш курс</h2>
            <div className="text_div">
              <p className="p">
                Джумабаева Жамила Шариповна – доктор филологических наук,
                профессор, Заведующий кафедрой Английского языкознания
                факультета Зарубежной Филологии Национального университета
                Узбекистана, руководитель научной школы Сопоставительного
                языкознания;
              </p>
              <p className="p">
                Научный руководитель базовым докторантам и докторантам,
                свободным соискателям по следующим специальностям: 10.00.06 –
                Сравнительное литературоведение, сопоставительного языкознание и
                переводоведение и 13.00.02 – Теория и методика образования и
                обучения (английский язык) в качестве основного докторанта и
                научного руководителя Опубликовано более 100 научных статей и
                тезисов, в том числе 3 монографии 10 человек получили степень
                доктора философии (PhD) в области филологии и педагогики под ее
                руководстовом
              </p>
              <p className="p">
                Являлась официальным оппонентом для более 10 диссертаций Членом
                Экспертного совета по филологии при ВАК (2017-2021 гг.) Член
                научного совета и семинаров по специальности филологии и
                педагогике в вузах нашей республики (с 2018 года по настоящее
                время) Участница международных конференций: США, Германия,
                Великобритания, Италия, Испания, Португалия, Польша, Турция,
                Россия
              </p>
            </div>
            <button type="button" className="reg_btn">
              {qalpoq}
              <p className="p">Записаться на курс</p>
            </button>
          </div>
          <div className="about_images_container">
            <Image src={aboutImg1} alt="About image" />
            <Image src={aboutImg2} alt="About image" />
          </div>
        </div>
        <div className="career_div_container">
          <div className="career_div">
            <p className="career_title">2006 г.</p>
            <p className="p">кандидат филологических наук</p>
          </div>
          <div className="career_div">
            <p className="career_title">2009 г.</p>
            <p className="p">доцент</p>
          </div>
          <div className="career_div">
            <p className="career_title">2016 г.</p>
            <p className="p">доктор филологических наук (DSc)</p>
          </div>
          <div className="career_div">
            <p className="career_title">2022 г.</p>
            <p className="p">профессор</p>
          </div>
        </div>
      </div>
    </section>
  );
}
