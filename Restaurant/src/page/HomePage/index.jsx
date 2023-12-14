import React from 'react'
import PopularDishesSection from '../../components/PopularDishesSection'
import ReservationSection from '../../components/ReservationSection'
import ContactWithSection from '../../components/ContactWithSection'
import Header from '../../layout/Header'

function HomePage() {
  return (
    <div>
      <Header/>
      <PopularDishesSection/> 
      <ReservationSection/>
      <ContactWithSection/>
    </div>
  )
}

export default HomePage