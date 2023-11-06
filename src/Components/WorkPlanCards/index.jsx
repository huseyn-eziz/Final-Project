import axios from 'axios'
import React, { useEffect, useState } from 'react'


const url = 'http://localhost:3000/WorkPlan'

const WorkPlanCards = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.get(url).then(({data})=>{
      setCards(data)
    })
  }, [])
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          {cards.map(({id,title,description})=> {
            return (
              <div
              className={`col-12 col-xl-4 my-3 ${styles.WorkPlanCard}`}
              key={id}
            >
              <h3 className={`my-3 ${styles.title}`}>{title}</h3>
              <p>{description}</p>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WorkPlanCards