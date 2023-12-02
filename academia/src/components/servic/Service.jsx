import classes from "./Service.module.css"

import tour from "../../assets/img/tourPelaAcad.png";
import aulas from "../../assets/img/aulasEmGrupo.png";
import personal from "../../assets/img/personal.png";


export const Service = () => {
  return (
    <div className={classes.services}>
        <h1>O que oferecemos</h1>
        <h2>Estamos empenhados em trazer a melhor experiência e treino.</h2>
       <div className={classes.categorias}>

        <h3>Tour pela academia</h3>
        <h3>Aulas em grupo</h3>
        <h3>Personal Trainers</h3>

       </div>
        

        <div className={classes.imagensService}>
           
               
                <img className={classes.tour} src={tour} alt="Imagem de alteres de academia." />
              
                <img className={classes.aulas} src={aulas} alt="Imagem de duas pessoas pulando corda." />
              
                <img className={classes.personal}  src={personal} alt="Imagem de uma pessoa fazendo exercício." />
                
            
            
        </div>
        </div>
  )
}
