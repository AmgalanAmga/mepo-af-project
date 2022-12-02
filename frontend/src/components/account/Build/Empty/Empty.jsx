import React from 'react';
import bag from "../../../../assets/images/bag.svg"
import css from "../../../../assets/styles/Account/empty-style.module.scss";

export const Empty = () => {
  return (
    <section className={css.empty_section}>
        <div className={css.empty_section__container}>
            <div className={css.circle_border}>
                <img src={bag} alt="bag" />
            </div>
            <h1 className={css.advice}>You haven't shopped with us yet. Is today the day?</h1>
            <button className={css.continue_btn}>
                Continue shopping
            </button>
        </div>
    </section>
  )
}