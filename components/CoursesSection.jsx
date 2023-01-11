import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { blueCheck } from "../icons/icons";

export default function CoursesSection({
  myRef,
  translations,
  BASE_URL,
  formRef,
}) {
  const { locale } = useRouter();
  const [courses, setCourses] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    axios
      .get(BASE_URL + "/categories")
      .then((res) => {
        setCourses(res.data.data);
        setCurrentTab(res.data.data[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section ref={myRef} className="courses_section">
      <div className="box courses_inner">
        <div className="courses_text_div">
          <h1 className="h1">{translations.maqtov_title}</h1>
          <div className="tab_div">
            {courses.map((course) => {
              if (locale === "ru") {
                return (
                  <p
                    key={course.id}
                    className={currentTab === course.id ? "p active" : "p"}
                    role="button"
                    onClick={() => setCurrentTab(course.id)}
                  >
                    {course.title.ru}
                  </p>
                );
              } else if (locale === "uz") {
                return (
                  <p
                    key={course.id}
                    className={currentTab === course.id ? "p active" : "p"}
                    role="button"
                    onClick={() => setCurrentTab(course.id)}
                  >
                    {course.title.uz}
                  </p>
                );
              }
            })}
          </div>
        </div>
        {courses.map((course) => {
          if (course.id === currentTab) {
            return (
              <Template
                key={course.id}
                formRef={formRef}
                products={course.products}
                locale={locale}
              />
            );
          }
        })}
      </div>
    </section>
  );
}

const Template = ({ products, locale, formRef }) => {
  return (
    <div className="courses_container">
      {products.map((course, index) => {
        if (locale === "ru") {
          return (
            <Course
              key={course.id}
              course={course}
              formRef={formRef}
              index={index}
            />
          );
        } else if (locale === "uz") {
          return (
            <CourseUz
              key={course.id}
              course={course}
              formRef={formRef}
              index={index}
            />
          );
        }
      })}
    </div>
  );
};

const Course = ({ formRef, course, index }) => {
  let descs = course.desc.ru;
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
          <p className="p">{index + 1}-курс</p>
          <h2 className="h2">{course.title.ru}</h2>
        </div>
        <div style={{ borderTop: "1px solid #D2D2D2", paddingTop: "24px" }}>
          <h3 className="h3">Основное содержание курса:</h3>
          <ul className="infoblock_list">
            <li
              className="infoblock_single"
              dangerouslySetInnerHTML={{ __html: descs }}
            ></li>
          </ul>
        </div>
      </div>
      <CourseInfo formRef={formRef} />
    </div>
  );
};

const CourseUz = ({ formRef, course, index }) => {
  let descs = course.desc.uz;
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
          <p className="p">{index + 1}-курс</p>
          <h2 className="h2">{course.title.uz}</h2>
        </div>
        <div style={{ borderTop: "1px solid #D2D2D2", paddingTop: "24px" }}>
          <h3 className="h3">Основное содержание курса:</h3>
          <ul className="infoblock_list">
            <li
              className="infoblock_single"
              dangerouslySetInnerHTML={{ __html: descs }}
            ></li>
          </ul>
        </div>
      </div>
      <CourseInfo formRef={formRef} />
    </div>
  );
};

const CourseInfo = ({ formRef }) => {
  return (
    <div className="course_info_table">
      <div className="info_table_inner_container">
        <h3 className="h3">Наш курс включает в себя</h3>
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
      <button onClick={() => formRef.current.scrollIntoView(true)} href="#form">
        Записаться на курс
      </button>
    </div>
  );
};
