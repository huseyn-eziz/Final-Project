import React from 'react'
import Navigation from '../../Components/Navigation'
import Banner from '../../Components/Banner'
import WorkPlanCards from '../../Components/WorkPlanCards'
import { motion } from "framer-motion"
import { Helmet } from 'react-helmet'

const Homepage = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    >
      <Helmet>
        <title>Interno</title>
      </Helmet>
    <Navigation/>
    <Banner/>
    <WorkPlanCards/>
    </motion.div>
  )
}

export default Homepage
