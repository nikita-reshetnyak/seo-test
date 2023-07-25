import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Card.module.scss";
const Card = ({cardId, img, prodName}) => (
    <div className={styles.card}>
      <NavLink to={`/card/${cardId}`}>
          <div className={styles.avatar}>
            <img src={img} alt="продукт" />
          </div>
        <div className={styles.title}>{prodName}</div>
      </NavLink>
    </div>
  );

export default Card;
