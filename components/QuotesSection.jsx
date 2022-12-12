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
          <Quote2 />
          <Quote />
          <Quote />
          <Quote />
          <Quote />
          <Quote2 />
        </div>
      </div>
    </section>
  );
}

const Quote = () => {
  return (
    <div className="quote_div">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
      officiis.
    </div>
  );
};

const Quote2 = () => {
  return (
    <div className="quote_div">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia id, aut
      tempore quibusdam laudantium odio repellat rerum eaque voluptatem,
      molestias nam reiciendis? A ipsa dolorem officia vero modi odio soluta.
    </div>
  );
};
