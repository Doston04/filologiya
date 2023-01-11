import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { arrowDown } from "../icons/icons";
import bgnull from "../public/media/bg_null.png";

export default function QuotesSection({ BASE_URL, myRef, translations }) {
  const { locale } = useRouter();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    if (locale == "ru") {
      axios
        .get(BASE_URL + "/reviews")
        .then((res) => {
          setQuotes(res.data.data.data);
        })
        .catch((err) => console.log(err));
    } else if (locale == "uz") {
      axios
        .get(BASE_URL + "/reviews")
        .then((res) => {
          setQuotes(res.data.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [locale]);

  return (
    <section ref={myRef}>
      <div className="box quotes_inner">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 className="h1">{translations.results_title}</h1>
          <p style={{ color: "#5D5D5F" }} className="p">
            {translations.results_desc}
          </p>
        </div>
        <div className="quotes_container">
          {quotes.map((quote) => {
            if (locale == "ru") {
              return (
                <div key={quote.id} className="quote_div">
                  <div className="quote_top">
                    {quote.img !== null ? (
                      <img
                        className="quote_avatar"
                        src={quote.lg_logo}
                        alt="avatar"
                      />
                    ) : (
                      <Image
                        className="quote_avatar"
                        src={bgnull}
                        alt="avatar"
                      />
                    )}
                    <div className="quote_owner_div">
                      <p className="quote_owner_name">{quote.name.ru}</p>
                      <p className="p">{quote.position.ru}</p>
                    </div>
                  </div>
                  <p
                    className="p"
                    dangerouslySetInnerHTML={{ __html: quote.feedback.ru }}
                  ></p>
                </div>
              );
            } else {
              return (
                <div key={quote.id} className="quote_div">
                  <div className="quote_top">
                    {quote.img !== null ? (
                      <img
                        className="quote_avatar"
                        src={quote.lg_logo}
                        alt="avatar"
                      />
                    ) : (
                      <Image
                        className="quote_avatar"
                        src={bgnull}
                        alt="avatar"
                      />
                    )}
                    <div className="quote_owner_div">
                      <p className="quote_owner_name">{quote.name.uz}</p>
                      <p className="p">{quote.position.ru}</p>
                    </div>
                  </div>
                  <p
                    className="p"
                    dangerouslySetInnerHTML={{ __html: quote.feedback.uz }}
                  ></p>
                </div>
              );
            }
          })}
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
