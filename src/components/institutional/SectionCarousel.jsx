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
      initialSlide: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div>
        <div className="col-md-7" style={{ marginLetft: "-10px" }}>
          <h1
            id="header2"
            className="footer-H1-Question titleInstitutional"
            style={{ marginLeft: "12px", maxWidth: "468px" }}
          >
            Veja quem está usando a nossa plataforma!
          </h1>
        </div>
        <div
          className="col-md-offset-2 col-md-8"
          style={{
            margin: "auto",
            marginTop: "40px",
            maxWidth: "69%",
            webkitBoxShadow: "0px 0px 29px -3px rgba(99,98,99,1)",
            mozBoxShadow: "0px 0px 29px -3px rgba(99,98,99,1)",
            boxShadow: "0px 0px 29px -3px rgba(99,98,99,1)"
          }}
        >
          <Carousel {...settings} style={{ height: 450 }}>
            <div>
              <img
                src="http://nbdcc.ca/wp-content/uploads/2018/09/students.png"
                height="550"
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
                src="https://image.freepik.com/vetores-gratis/carater-de-carreira-no-conceito-do-dia-do-trabalho_27170-45.jpg"
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
