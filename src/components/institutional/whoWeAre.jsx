import React, {Component} from "react"

export default class WhoWeAre extends Component {




  render() {

    return( 
      <div>
        <div className="row">
          <h1 style={{color: "black", marginTop: "15px", marginLeft: "40px", fontSize: "30px" }}>Quem nós Somos</h1>
        </div>          
        <div className="row">
          <div className="col-md-10" style={{ display: "flex", margin: "auto", marginTop: "60px" }}>
              <div className="col-md-4">
                <img style={{width: "300px", height:"300px"}} src="https://blog.softwareavaliacao.com.br/wp-content/uploads/2017/05/0089-01.jpg" alt="" srcset=""/>
                <div><h2>Somos jovens apaixonados por tecnologia, movidos por desafios.</h2></div>
              </div>
              <div className="col-md-4">
                <img  style={{width: "300px", height:"300px"}} src="http://diabetesevida.com.br/on/wp-content/uploads/2019/04/quem-somos.png" alt="" srcset=""/>
                <div><h2>Buscamos falicitar a vida dos nossos clientes, com soluções ágeis, praticas e diretas.</h2></div>
              </div>
              <div className="col-md-4">
                <img  style={{width: "300px", height:"300px"}} src="https://image.freepik.com/vetores-gratis/design-de-vetor-de-desenho-animado-de-trabalho-em-equipe-de-carater-empresario_1473-147.jpg" alt="" srcset=""/>
                <div><h2>Temos a melhor solução para o seu negócio, conheça a nossa plataforma Resource Manager.</h2></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}