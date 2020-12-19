import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

//scss
import CustomIconStyle from "./CustomIcon.module.scss"

const CustomIcon = ({ icon }) => {
  return (
    <span className="fa-stack fa-fw">
      <FontAwesomeIcon
        icon={faCircle}
        className="fa-stack-2x"
        color="#42b7e2"
      />
      <FontAwesomeIcon icon={icon} color="white" className="fa-stack-1x" />
    </span>
  )
}

export default CustomIcon
