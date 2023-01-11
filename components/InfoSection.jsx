import { blueCheck } from "../icons/icons";

export default function InfoBlock({ translations }) {
  return (
    <section>
      <div className="box infoblock_inner">
        <div className="infoblock_div">
          <h2 className="h2">{translations.prepodovaniye}</h2>
          <ul className="infoblock_list">
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">Уроки развлекают платформу Zoom</p>
            </li>
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">Быть уроками 3 раза в неделю</p>
            </li>
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">Telegram Messenger - еще одна группа монет</p>
            </li>
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">Уроки развлекают платформу Zoom</p>
            </li>
          </ul>
        </div>
        <div className="infoblock_div">
          <h2 className="h2">{translations.oplata}</h2>
          <ul className="infoblock_list">
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">Возможность заплатить с помощью Payme</p>
            </li>
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">Возможность заплатить с помощью Humo</p>
            </li>
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">Возможность оплатить приложение Apelsin</p>
            </li>
            <li className="infoblock_single">
              {blueCheck}
              <p className="p">Возможность оплатить приложение Налишка</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
