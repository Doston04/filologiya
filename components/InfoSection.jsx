import { blueCheck } from "../icons/icons";
import Form from "./Form";

export default function InfoBlock() {
  return (
    <section>
      <Form />
      <div className="box infoblock_inner">
        <div className="infoblock_div">
          <h2 className="h2">Как преподается наш урок</h2>
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
          <h2 className="h2">Как будет тип оплаты</h2>
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
