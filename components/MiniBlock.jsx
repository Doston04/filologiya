import { play, question, star } from "../icons/icons";

export default function MiniBlock() {
  return (
    <section>
      <div className="box miniBlock_inner">
        <div className="miniBlock_blog">
          <div className="icon_div">{question}</div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3 className="h3">Будущие исследователи, мастера</h3>
            <p className="p">
              что мы в восторге от неприятного увидели, что его пожертвование
              осталось расходом, которую вы завершили.
            </p>
          </div>
        </div>
        <div className="miniBlock_blog">
          <div className="icon_div">{play}</div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3 className="h3">Тайанч докторантов, бесплатные</h3>
            <p className="p">
              что мы в восторге от неприятного увидели, что его пожертвование
              осталось расходом, которую вы завершили.
            </p>
          </div>
        </div>
        <div className="miniBlock_blog">
          <div className="icon_div">{star}</div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h3 className="h3">Для тех, кто хочет быть специалистом</h3>
            <p className="p">
              что мы в восторге от неприятного увидели, что его пожертвование
              осталось расходом, которую вы завершили.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
