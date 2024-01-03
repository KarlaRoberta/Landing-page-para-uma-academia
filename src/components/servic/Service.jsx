import classes from "./Service.module.css"

import tour from "../../assets/img/tourPelaAcad.png";
import aulas from "../../assets/img/aulasEmGrupo.png";
import personal from "../../assets/img/personal.png";


export const Service = () => {
  return (
    <div id="servicos">
    <div className={classes.services}>
        <h1>O que oferecemos</h1>
        <h2>Estamos empenhados em trazer a melhor experiência e treino.</h2>

      <div className={classes.categorias}>

        <h3>Tour pela academia</h3>
        <h3>Aulas em grupo</h3>
        <h3 className={classes.p}>Personal Trainers</h3>

      </div>
        
        <div className={classes.imagensService}>
  
                <span> 
                <img className={classes.tour} src={tour} alt="Imagem de alteres de academia." />
                </span>

                <span>
                <img className={classes.aulas} src={aulas} alt="Imagem de duas pessoas pulando corda." />
                </span>
              
              <span>
                <img className={classes.personal}  src={personal} alt="Imagem de uma pessoa fazendo exercício." />

              </span>

        </div>
        </div>
        </div>
  )
}
export default Service