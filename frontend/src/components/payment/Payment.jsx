import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import css from "./PaymentStyle.module.scss";

// import sections
import Pocket from "./Build/Pocket/Pocket";
import Summary from "./Build/Summary/Summary";
import ContactInformation from "./Build/Contact/ContactInformation";

// import context
import { usePaymentContext } from "./context/paymentContext";
import { useEffect } from "react";

export const Payment = () => {
  const datas = new Array(2).fill(1);
  const { openPocket, setOpenPocket } = usePaymentContext();
  const [switchSections, setSwitchSections] = useState(false);
  const switchBtn = () => {
    setSwitchSections(true);
  };

  window.addEventListener("resize", (event) => {
    if (event.currentTarget.innerWidth <= 900) setSwitchSections(false);
  });

  useEffect(() => {}, []);
  return (
    <motion.div
      className={css.bagSection}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <ContactInformation switchSections={switchSections} />
      <Summary
        datas={datas}
        switchBtn={switchBtn}
        switchSections={switchSections}
      />
      {openPocket ? <Pocket /> : <div />}
    </motion.div>
  );
};
