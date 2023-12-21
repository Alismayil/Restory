import React from 'react'
import './ourHistorySection.scss'

function OurHistorySection() {
  return (
    <section id='ourHistorySection'>
        <div className="ourHistoryLeftBox">
            <div className="ourHistoryTextBox">
                <h1>OUR HISTORY</h1>
                <p>Proin facilisis varius nunc. Curabitur eros risus, ultrices et dui ut, luctus accumsan nibh. Fusce convallis sapien placerat tellus suscipit vehicula.</p>
                <p>Cras vitae diam ut justo elementum faucibus eget a diam. Etiam sodales a sem vitae fermentum. Curabitur pellentesque</p>
            </div>
        </div>
        <div className="ourHistoryRightBox">
            <div className="centerBox">
                <div className="centeBoxLine"></div>
                <div className="leftImgBox"></div>
                <div className="rightImgBox"></div>
            </div>
        </div>
    </section>
  )
}

export default OurHistorySection