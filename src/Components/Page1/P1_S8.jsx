import "../Page1/P1_S8.scss";
import { useState } from "react";

export default function P1_S8() {
  const [open, setOpen] = useState(null);

  const toggle = (n) => setOpen(open === n ? null : n);

  const itemClass = (n) =>
    open === n ? "faq__item faq__item--open" : "faq__item";

  return (

      <div className="faq">
        <h2 className="faq__title">FAQ</h2>

        <div className={itemClass(1)}>
          <button
            className="faq__question"
            onClick={() => toggle(1)}
            aria-expanded={open === 1}
          >
            <span>How long does delivery take?</span>
            <span className="faq__icon">+</span>
          </button>
          <div className="faq__answer">
            <div className="faq__answer-inner">
              <p>
                Usually 30–45 minutes, depending on the distance and how busy
                the kitchen is. You will see the estimated time before you
                confirm the order.
              </p>
            </div>
          </div>
        </div>

        {/* ... остальные 4 блока без изменений ... */}
      </div>

  );
}