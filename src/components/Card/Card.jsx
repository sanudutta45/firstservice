import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//scss
import CardStyle from "./Card.module.scss"

const Card = ({ iconClass, title, text }) => {
  return (
    <div className={`${CardStyle.wrapper} pt-4 pb-4 pl-3 pr-3 text-center mx-auto`}>
      <FontAwesomeIcon icon={iconClass} color="#42b7e2" size="4x" />
      <span className={CardStyle.title}>{title}</span>
      <p className={CardStyle.text}>{text}</p>
    </div>
  )
}

export default Card
