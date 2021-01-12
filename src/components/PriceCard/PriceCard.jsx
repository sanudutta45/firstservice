import React from "react"
import Img from "gatsby-image"

//scss
import cardStyle from "./PriceCard.module.scss"

function PriceCard({ type, speed, channels, desc, iconImg, price }) {
  return (
    <div className={cardStyle.wrapper}>
      <div className={cardStyle.top}>{type}</div>
      <div
        className={`d-flex ${cardStyle.mid} align-items-center p-5 justify-content-between`}
      >
        <div>
          <label htmlFor="speed">internet</label>
          <h5>{speed} Mbps</h5>
          <span>download speeds</span>

          <label htmlFor="speed">tv</label>
          <h5>{channels}+</h5>
          <span>Channels</span>
        </div>
        <Img fixed={iconImg} imgStyle={{ objectFit: "cover" }} />
      </div>
      <div className={`${cardStyle.bottom} pl-5 pt-5 pb-5`}>
        <ul>
          <li>Multi-device streaming</li>
          <li>Download shows quickly</li>
          <li>Download large files</li>
        </ul>
        <div className="mt-3">
          <span>&#8377;</span>
          <span>{price}</span>
          <span>.99/Mo</span>
        </div>
      </div>
    </div>
  )
}

export default PriceCard
