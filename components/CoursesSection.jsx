import { useState } from "react";

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
  return <div className="courses_container">Intensive</div>;
};

const Extensive = () => {
  return <div className="courses_container">Extensive</div>;
};
