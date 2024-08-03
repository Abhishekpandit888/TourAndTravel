import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Stay informed with real-time weather updates for your destination.`,
   },
   {
      imgUrl: guideImg,
      title: `Provide Tour Guide`,
      desc: `Discover your journey with insights and tips from local experts.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Tailor your trip to your preferences with our flexible planning options.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList