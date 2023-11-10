import React from "react";
import styles from "../Customers/style.module.css";

const Customer = ({ customer: { name, avatar, description, address } }) => {
  return (
    <div className="col-12 col-md-6 col-xl-4 mb-3">
      <div className={styles.customer}>
        <div className="d-flex align-items-center">
          <div>
            <img src={avatar} alt="" />
          </div>
          <div className="ms-3">
            <h2>{name}</h2>
            <p className={styles.address}>{address}</p>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Customer;
