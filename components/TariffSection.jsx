import { cyanCheck, redX } from "../icons/icons";

export default function TariffSection() {
  const tariffs = {
    advantages: [
      {
        id: 1,
        text: "Реал имел половину каждого из них в пакетах, спрашиваем, что мы в восторге от неприятного увидели,",
      },
      {
        id: 2,
        text: "что мы в восторге от неприятного увидели, что его пожертвование осталось расходом, которую вы завершили.",
      },
      {
        id: 3,
        text: "Реал имел половину каждого из них в пакетах, спрашиваем, что мы в восторге от неприятного увидели, что его пожертвование осталось расходом,",
      },
      {
        id: 4,
        text: "Реал имел половину каждого из них в пакетах, спрашиваем, что мы в восторге от неприятного увидели,",
      },
    ],
    disadvantages: [
      {
        id: 1,
        text: "Реал имел половину каждого из них в пакетах, спрашиваем, что мы в восторге от неприятного увидели,",
      },
      {
        id: 2,
        text: "что мы в восторге от неприятного увидели, что его пожертвование осталось расходом, которую вы завершили.",
      },
      {
        id: 3,
        text: "Реал имел половину каждого из них в пакетах, спрашиваем, что мы в восторге от неприятного увидели,",
      },
      {
        id: 4,
        text: "Реал имел половину каждого из них в пакетах, спрашиваем, что мы в восторге от неприятного увидели, что его пожертвование осталось расходом,",
      },
      {
        id: 5,
        text: "Реал имел половину каждого из них в пакетах, спрашиваем, что мы в восторге от неприятного увидели,",
      },
    ],
  };

  return (
    <section className="tariff_section">
      <div className="box tariff_inner">
        <h2 className="h2">Тарифы нашего курса</h2>
        <div className="tariffs_container">
          <div className="tariff">
            <h3 className="h3">Без курса</h3>
            <ul className="tariffs_list">
              {tariffs.advantages.map((advantage) => {
                return (
                  <li key={advantage.id} className="single_tariff">
                    {redX}
                    <p className="p">{advantage.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="tariff">
            <h3 className="h3">С курсом</h3>
            <ul className="tariffs_list">
              {tariffs.disadvantages.map((disadvantage) => {
                return (
                  <li key={disadvantage.id} className="single_tariff">
                    {cyanCheck}
                    <p className="p">{disadvantage.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
