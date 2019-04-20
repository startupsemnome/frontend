import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "./GridContainer.jsx";
import GridItem from "./GridItem.jsx";
import Card from "./Card.jsx";
import carouselStyle from "./carouselStyle.jsx";
import image3 from "./../../assets/img/bg3.jpg";

class SectionCarousel extends React.Component {
  componentDidMount() {
    var slicks = document.getElementsByClassName("slick-arrow");
    slicks[0].style.display = "none";
    slicks[1].style.display = "none";
  }
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div>
        <div>
          <h1 className="footer-H1-Question">Quem Já esta usando a gente?</h1>
        </div>
        <div
          className="col-md-offset-2 col-md-8"
          style={{
            margin: "auto",
            marginTop: "40px",
            maxWidth: "68%",
            webkitBoxShadow: "0px 0px 29px -3px rgba(99,98,99,1)",
            mozBoxShadow: "0px 0px 29px -3px rgba(99,98,99,1)",
            boxShadow: "0px 0px 29px -3px rgba(99,98,99,1)"
          }}
        >
          <Carousel {...settings}>
            <div>
              <img
                src="https://simulare.com.br/wp-content/uploads/182474-como-a-gestao-de-sala-de-aula-pode-melhorar-o-engajamento-dos-alunos-1080x675.jpg"
                alt="First slide"
                className="slick-image"
              />
              <div
                className="slick-caption"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <h4 style={{ fontSize: "30px", color: "white" }}>
                  Estudantes com horarios restritos e pouco conhecimento na área
                </h4>
              </div>
            </div>
            <div>
              <img
                src="https://nova-escola-producao.s3.amazonaws.com/a6x5qxcw8NWtuq5dssw57xcksapPA7DP8dY8YrfpSYqraGEaYdJZjPReEMnv/formacao-de-professores-getty-images.jpg"
                alt="Second slide"
                className="slick-image"
              />
              <div
                className="slick-caption"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <h4 style={{ fontSize: "30px", color: "white" }}>
                  Professres que com grandes conhecimentos e tambem com horarios
                  restritos.
                </h4>
              </div>
            </div>
            <div>
              <img
                src="https://vinhasoft.com.br/wp-content/uploads/2015/12/profissaofuturo-1200x800.jpg"
                alt="Third slide"
                className="slick-image"
              />
              <div
                className="slick-caption"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <h4 style={{ fontSize: "30px", color: "white" }}>
                  Profissionais de mercado com conhecimentos super especificos
                </h4>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
