import Image from "next/image";
import { arrowDown } from "../icons/icons";
import avatar from "../public/media/jamila-opa.png";

export default function QuotesSection() {
  return (
    <section>
      <div className="box quotes_inner">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 className="h1">
            Мысли и результаты, которые вы сделали с нашими студентами
          </h1>
          <p style={{ color: "#5D5D5F" }} className="p">
            Результаты моих читателей
          </p>
        </div>
        <div className="quotes_container">
          <Quote />
          <Quote />
          <Quote />
          <Quote />
          <Quote />
        </div>
        <div
          style={{ display: "grid", placeItems: "center", paddingTop: "40px" }}
        >
          <button className="more_btn">
            <span>Узнать больше</span>
            {arrowDown}
          </button>
        </div>
      </div>
    </section>
  );
}

const Quote = () => {
  return (
    <div className="quote_div">
      <div className="quote_top">
        <Image className="quote_avatar" src={avatar} alt="avatar" />
        <div className="quote_owner_div">
          <p className="quote_owner_name">Александрa Медведевa</p>
          <p className="p">Журналистка</p>
        </div>
      </div>
      <p className="p">
        “Было просто очень приятно быть в учебном пространстве с людьми со всего
        мира. Я думаю, что в целом атмосфера очень позитивная. Кажется для меня
        как безопасное пространство. Занятия очень хорошо разработаны для
        взаимодействия друг с другом, поэтому его легко следить и оставаться
        фокусируемым. Даже устал и поздно ночью”
      </p>
    </div>
  );
};
