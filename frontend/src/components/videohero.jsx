import React from "react"
import Logowhite from  "../assets/logo_white.png"


const VideoHeader = () => {
  const handleReservationClick = e => {
    const openTableEl = document.querySelector('#ot-reservation-widget a.ot-button');
  
    if (openTableEl) openTableEl.click();
  }

return(

  <div id="video-section">
    <div className="video-background">
      <video autoPlay muted playsInline loop id="video" src="https://player.vimeo.com/external/379737405.hd.mp4?s=ad8ba11d6115eac7afcb8b4013f6ca054a2d9780&profile_id=174"></video>
    </div>
    <div className="video-overlay"></div>
    <img className="logo" src={Logowhite} alt="" />
    <h1 className="hero-tag white">MAKE RESERVATION AT</h1>
    <div className="reservation-container">
    <a className="button button-outline button-white button-booking" href="#" onClick={handleReservationClick}>Palm Beach Garden</a>
    <a className="button button-outline button-white button-booking" href="https://www.opentable.com/r/waxins-reservations-naples?restref=1374724&lang=en-US&ot_source=Restaurant%20website" target='_blank'>Naples</a>
    <a className="button button-outline button-white button-booking" href="#">West Palm Beach (coming)</a>
  </div>
  </div>

  )
}

export default VideoHeader