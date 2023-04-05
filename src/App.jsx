import React, {useLayoutEffect, useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import NavbarComponent from "./components/navbar/navbar.component.jsx";
import HomePage from "./pages/homePage/home.page.jsx";
import FooterComponent from "./components/footer/footer.component.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
const App = () => {

  const main = useRef();
  const smoother = useRef();

  useLayoutEffect(() => {
	const ctx = gsap.context(() => {
	  let smt = ScrollSmoother.create({
		smooth: 1.5, effects: true,
	  });
	  smt.effects(".img-parallax img", {speed: "auto"})
	  smoother.current = smt;
	}, main);
	return () => ctx.revert();
  }, []);

  return (<>
	<NavbarComponent/>
	<div id="smooth-wrapper" ref={main}>
	  <div id="smooth-content">
		<HomePage/>
		<div style={{height: "40vh"}}></div>
		<FooterComponent/>
		<div style={{height: "4vh"}}></div>
	  </div>
	</div>
  </>)
}
export default App
