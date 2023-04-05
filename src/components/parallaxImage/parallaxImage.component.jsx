import React, {useLayoutEffect, useRef} from 'react'
import {ParallaxImageContainer} from "./parallaxImage.styles.jsx";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const ParallaxImageComponent = ({src, alt, debug, width, height, imgParallaxPercent}) => {


  return (<div className="img-parallax">
	<ParallaxImageContainer debug={debug} width={width} height={height} imgParallaxPercent={imgParallaxPercent}>
	  <img src={src} alt={alt}/>
	</ParallaxImageContainer>
  </div>)
}
export default ParallaxImageComponent

