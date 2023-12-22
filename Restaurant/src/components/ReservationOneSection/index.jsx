import React from 'react'
import './reservationOneSection.scss'

function ReservationOneSection() {
  return (
    <section id='reservationOneSection'>
        <div className="reservationOneUpBox">
            <h2>OPENING HOUR 8:00 AM - 10:00 PM, EVERY DAY ON WEEK.</h2>
        </div>
        <div className="reservationOneDownBox">
            <form action="">
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Email Address' />
                <input type="date" placeholder='Date' />
                <input type="time" placeholder='Time' />
                <input type="number" placeholder='Guests' />
                <input type="number" placeholder='Phone Number' />
                <button>MAKE RESERVATION</button>
            </form>
        </div>
    </section>
  )
}

export default ReservationOneSection