import classes from "../../components/menu/Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.menu}>
        <ul>
            <li><a>Menu</a></li>
            <li><a>Sobre</a></li>
            <li><a>Serviços</a></li>
            <li><a>Localização</a></li>
            <li><a>Contatos</a></li>
        </ul>
        
    </div>
  )
}

export default Menu