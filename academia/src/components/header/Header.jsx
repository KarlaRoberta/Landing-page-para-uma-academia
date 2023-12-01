import academia from "../../assets/img/academia.png";
import classes from "../../components/header/Header.module.css";

const Header = () => {
  return (
    <div>
        <img src={academia} alt="foto de um homem fazendo exercicio" />
        <span className={classes.header}>Seja seu melhor</span>
        <button>Inscreva-se hoje</button>
    </div>
    
  )
}

export default Header