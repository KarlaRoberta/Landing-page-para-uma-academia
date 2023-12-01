import classes from "../about/About.module.css";
import homem from "../../assets/img/homem.png";
import mulher from "../../assets/img/mulher.png";

export const About = () => {
  return (
    <div>
        <h1 className={classes.about}>Sobre a nossa empresa</h1>
        <h2>Astraeus foi fundada em 2001, por uma equipe de marido e mulher, Breno e Denise Silva. Desde então, expandimos para mais de 115 lugares em todo o país!</h2>
        <h3><a className={classes.saibaMais}>Saiba mais</a></h3>
        <div className={classes.imagens}>
        <img className={classes.homem} src={homem} alt="Imagem de um homem fazendo exercício." />
        <img className={classes.mulher} src={mulher} alt="Imagem de uma mulher fazendo exercício." />

        <div>
          <span className={classes.retangulo}></span>
        </div>
        </div>

        </div>
  )
}

export default About