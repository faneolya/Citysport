import React, { Component } from "react";
import Slider from "react-slick";
import Nike from "../logo/Nike.png";
import Adidas from "../logo/Adidas.jpg";
import Saucony from "../logo/Saucony.png";
import Asics from "../logo/Asics.png";
import Lacoste from "../logo/lacoste.png";
import Veja from "../logo/Veja.png";




export default class CenterMode extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true
    };
    return (
      <div className="MarquesBox">

        <Slider {...settings}>
          <div>
            <div className="Marques">
                <img src={Nike} alt="Nike" className="logo" style={{width: 130}}/>
            </div>
            <h3>Nike</h3>
          </div>
          <div>
            <div className="Marques">
                <img src={Adidas} alt="Adidas" className="logo" style={{width: 120}}/>
            </div>
            <h3>Adidas</h3>
          </div>
          <div>
            <div className="Marques">
                <img src={Veja} alt="Veja" className="logo" style={{width: 150}}/>
            </div>
            <h3>Veja</h3>
          </div>
          <div>
            <div className="Marques">
                <img src={Lacoste} alt="Lacoste" className="logo" style={{width: 160}}/>
            </div>
            <h3>Lacoste</h3>
          </div>
          <div>
            <div className="Marques">
                <img src={Asics} alt="Asics" className="logo" style={{width: 180}}/>
            </div>
            <h3>Asics</h3>
          </div>
          <div>
            <div className="Marques">
                <img src={Saucony} alt="Saucony" className="logo" style={{width: 180}}/>
            </div>
            <h3>Saucony</h3>
          </div>
        </Slider>
      </div>
    );
  }
}