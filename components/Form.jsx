import { useState } from "react";
import { IMaskInput } from "react-imask";

export default function Form() {
  const [number, setNumber] = useState("");
  return (
    <div className="box">
      <div className="form_content">
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <h1 className="h1">Зарегистрируйтесь на нашем курсе</h1>
          <p className="p">
            Если у вас есть какие -либо вопросы о формате или если вы не
            понимаете, оставьте свой номер - мы позвоним, чтобы ответить на все
            ваши вопросы.
          </p>
        </div>
        <div className="form_form">
          <input type="text" placeholder="Имя" />
          <IMaskInput
            value={number}
            type="text"
            mask={"(00) 000 00 00"}
            placeholder="Номер телефона"
            unmask={true}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit" onClick={() => alert(number)}>
            Записаться на курс
          </button>
        </div>
      </div>
    </div>
  );
}
