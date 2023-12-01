import academia from "../../assets/img/dd.png";
import simbolo from "../../assets/img/simbolo.png";
import classes from "../../components/header/Header.module.css";

const Header = () => {
  return (
    <div>
        <img className={classes.simbolo} src={simbolo}  alt="" />
        <img src={academia} alt="foto de um homem fazendo exercicio" />
        <span className={classes.header}>Seja seu melhor</span>
        <button>Inscreva-se hoje</button>
    </div>
    
  )
}

export default Header