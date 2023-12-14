import React from 'react'
import ContactWithSection from '../../components/ContactWithSection'
import ContactAndLocationSection from '../../components/ContactAndLocationSection'
import LocationMapSection from '../../components/LocationMapSection'

function LocationPage() {
  return (
    <section>
      <ContactAndLocationSection/>
      <ContactWithSection/>
      <LocationMapSection/>
    </section>
  )
}

export default LocationPage