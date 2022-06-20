import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <h2> Skontakuj się ze mną</h2>
      <form name="contact" netlify>
        <input placeholder="Imię ..." type="text" name="name" />
        <input placeholder="Adres email..." type="email" name="email" />
        <textarea
          placeholder="Twoja wiadomość"
          name="kroertroi"
          rows="5"
        ></textarea>
        <Button text="Wyślij wiadomość" />
      </form>
    </ContactStyles>
  )
}

export default Contact
