import classes from "../../components/menu/Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.menu}>
        <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            {/* <li><a href="#depoimentos">Depoimentos</a></li> */}
            <li><a href="#contatos">Contatos</a></li>
        </ul>
        
    </div>
  )
}

export default Menu