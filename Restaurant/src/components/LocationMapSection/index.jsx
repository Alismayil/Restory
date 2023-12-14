import React from 'react'
import './locationMap.scss'
function LocationMapSection() {
  return (
    <section id='locationMapSection'>
      <iframe width="100%" height="556" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=967&amp;height=556&amp;hl=en&amp;q=%20Baku+()&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=bd20295ad0ae72bde61270c8f66dbf108e02a865'></script>
    </section>
  )
}

export default LocationMapSection