import React from 'react'
import './reservationSection.scss'
import { Link } from 'react-router-dom'

function ReservationSection() {
  return (
    <section id='reservationSection'>
        <div className='reservationSectionBox'>
        <h1>Reservation</h1>
        <span>OPENING HOUR 8:00 AM - 10:00 PM, EVERY DAY ON WEEK.</span>
      <Link className='link' to={'/reservation'}> <div className='reservationSectionBtn'>Book a table</div></Link>
        </div>
    </section>
  )
}

export default ReservationSection