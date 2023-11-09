import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navigation from '../../Components/Navigation'
import axios from 'axios'
import PageBanner from '../../Components/PageBanner'
import { motion } from "framer-motion"
import { Helmet } from 'react-helmet'


const WorkPlanCardDetail = () => {
  const { id } = useParams()
  const [plan, setPlan] = useState({})

  useEffect(() => {
    axios.get("http://localhost:3000/WorkPlan/" + id).then(({ data }) => { setPlan(data) })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}>
        <Helmet>
          <title>
            Work Plan
          </title>
        </Helmet>
      <Navigation />
      <PageBanner src="../banner1.jpg" page="Work Plan Single" />

      <h2>{plan.title}</h2>
      <p>{plan.description}</p>

    </motion.div>
  )
}

export default WorkPlanCardDetail