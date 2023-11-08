import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const _url = "http://localhost:3000/WorkPlan";
const WorkPlanCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setCards(data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row mb-5 mt-2">
        {cards.map(({ id, title, description }) => {
          return (
            <div
              className={`col-12 col-xl-4 my-3 ${styles.WorkPlanCard}`}
              key={id}
            >
              <h3 className={`my-3 ${styles.title}`}>{title}</h3>
              <p>{description}</p>
              <Link
                className={styles.readMoreButton}
                to={`/WorkPlanCardDetail/${id}`}
              >
                Read More
                <span>
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkPlanCards;