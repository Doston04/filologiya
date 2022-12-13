import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMaskInput } from "react-imask";

export default function Form({ translations, BASE_URL, setIsSuccess }) {
  const router = useRouter();
  const { pathname } = router.pathname;
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/feedback`, {
        page: BASE_URL,
        name: name,
        email: null,
        phone_number: `+998 ${number}`,
        message: null,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="box">
      <div className="form_content">
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <h1 className="h1">{translations.form_title}</h1>
          <p className="p">{translations.form_desc}</p>
        </div>
        <form className="form_form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={translations.form_name}
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <IMaskInput
            value={number}
            type="text"
            name="number"
            mask={"(00) 000 00 00"}
            placeholder={translations.form_number}
            unmask={true}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <button type="submit">{translations.form_button}</button>
        </form>
      </div>
    </div>
  );
}
