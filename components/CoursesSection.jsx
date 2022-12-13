import { useState } from "react";
import { blueCheck } from "../icons/icons";

export default function CoursesSection() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <section className="courses_section">
      <div className="box courses_inner">
        <div className="courses_text_div">
          <h1 className="h1">Чему учат в нашем профессиональном курсе</h1>
          <div className="tab_div">
            <p
              className={currentTab === 1 ? "p active" : "p"}
              role="button"
              onClick={() => setCurrentTab(1)}
            >
              Интенсив
            </p>
            <p
              className={currentTab === 2 ? "p active" : "p"}
              role="button"
              onClick={() => setCurrentTab(2)}
            >
              Экстенсив
            </p>
          </div>
        </div>
        {currentTab === 1 ? <Intensive /> : <Extensive />}
      </div>
    </section>
  );
}

const Intensive = () => {
  return (
    <div className="courses_container">
      <Course />
    </div>
  );
};

const Extensive = () => {
  return <div className="courses_container"></div>;
};

const Course = () => {
  return (
    <div className="course">
      <div className="course_info">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            paddingBottom: "24px",
          }}
        >
          <p className="p">1-курс</p>
          <h2 className="h2">Секреты написания успешной диссертации</h2>
        </div>
        <div style={{ borderTop: "1px solid #D2D2D2", paddingTop: "24px" }}>
          <h3 className="h3">Основное содержание курса:</h3>
          <ul className="infoblock_list">
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">
                Направляющие советы для молодых соискателей, стремящихся
                заниматься наукой;
              </p>
            </li>
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">
                Направляющие советы для молодых соискателей, стремящихся
                заниматься наукой;
              </p>
            </li>
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">
                Направляющие советы для молодых соискателей, стремящихся
                заниматься наукой;
              </p>
            </li>
          </ul>
        </div>
      </div>
      <CourseInfo />
    </div>
  );
};

const CourseInfo = () => {
  return (
    <div className="course_info_table">
      <div className="info_table_inner_container">
        <h3 className="h3">Интенсивный курс включает в себя</h3>
        <div className="div">
          <h4 className="h4">2 урока</h4>
          <p className="p">каждый урок по 60 минут</p>
        </div>
        <div className="div">
          <h4 className="h4">вопросы и ответы в конце каждого занятия</h4>
          <p className="p">30 минут</p>
        </div>
        <div className="div">
          <h4 className="h4">образцы по теме</h4>
        </div>
        <div className="div">
          <h4 className="h4">
            нормативные документы по оформлениюнормативные документы по
            оформлению
          </h4>
        </div>
      </div>
      <button>Записаться на курс</button>
    </div>
  );
};
