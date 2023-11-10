import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Customer from "../Customer";
import axios from "axios";

const URL = "http://localhost:3000/";
const Customers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios.get(URL + "customers").then(({ data }) => {
      setCustomers(data);
    });
  }, []);
  return (
    <div className={`container p-5 ${styles.customers}`}>
      <div className="row">
        <div className="col-12 col-xl-7 mx-auto mb-5">
          <h2 className={styles.title}>What the People Thinks About Us</h2>
        </div>
      </div>
      <div className="row">
        {customers.map((customer) => {
          return <Customer key={customer.id} customer={customer} />;
        })}
      </div>
    </div>
  );
};

export default Customers;
