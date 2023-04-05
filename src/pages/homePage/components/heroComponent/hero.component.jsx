import React from 'react'
import {HeroComponentStyle} from "./hero.styles.jsx";
import ParallaxImageComponent from "../../../../components/parallaxImage/parallaxImage.component.jsx";
import {Link} from "react-router-dom";

const HeroComponent = () => {
  return (<HeroComponentStyle>
	<div className="hero-title">
	  <div className="hero-title-btn">
		<Link to={"/"} className="circle font-p"><img className="long-arrow"
													  src="/src/assets/svg/arrow_black.svg"
													  alt="long arrow to random recepi"/>Get <br/>Random Recipe</Link>
	  </div>
	  <h1>
		<span>* from</span>
		<span>perfect recipe</span>
		<span>to perfect dish</span>
	  </h1>
	</div>
	<div className="hero-img">
	  <ParallaxImageComponent width={"42vw"} height={"600px"} imgParallaxPercent={"40"}
							  src="https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg" alt="meal"/>
	</div>
  </HeroComponentStyle>)
}
export default HeroComponent






































