import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/perkmodule.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="Wordpress 6.0"
          content="Najpopularniejszy na całym świecie system zarządzania treścią stron internetowych (CMS)"
        >
          <StaticImage
            src="../../../static/logos/Wordpress_Blue_logo.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="HTML5"
          content="HTML5 jest to język pozwalający na tworzenie i wyświetlanie stron internetowych, sklepów czy aplikacji webowych."
        >
          <StaticImage
            src="../../../static/logos/html5.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="CSS3"
          content="Język słuzący do opisu warstwy prezentacji stron internetowych. Nadaje naszej stronie wygląd."
        >
          <StaticImage
            src="../../../static/logos/css3.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
