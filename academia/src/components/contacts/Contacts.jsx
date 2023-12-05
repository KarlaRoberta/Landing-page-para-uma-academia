import classes from "./Contacts.module.css";
import contact from "../../assets/img/contact.png"

const Contacts = () => {
  return (
    <div className={classes.contacts}>
        <div>
            <img src={contact} alt="" />
        </div>
        <div>
            <h1>Entre em contato ainda hoje</h1>
        </div>

        <div className={classes.footer}>
            <span></span>

            <h2>Endereço</h2>
            <h3>Rua Qualquer, 123, Cidade - EQ</h3>

            <h2>Email</h2>
            <h3>alo@sitebacana.com.br</h3>

            <h2>Telefone</h2>
            <h3>(12) 3456-7890</h3>
        </div>

    </div>
  )
}

export default Contacts