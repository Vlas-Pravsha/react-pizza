import React from "react";
import styles from "./NotFoundBlock.module.scss";

console.log(styles);
export default function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>:(</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.desription}>
        К сожелению даннаю страница отсутсвует в этом интеренет магазине
      </p>
    </div>
  );
}
