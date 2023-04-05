import React from 'react'
import {MealRecipeStyles} from "./mealRecipe.styles.jsx";
import ParallaxImageComponent from "../../../../components/parallaxImage/parallaxImage.component.jsx";

const MealRecipeComponent = () => {
  return (<MealRecipeStyles>
	<div className="meal-title">
	  <h2 className="font-m">
		<div>WHERE</div>
		<div>TASTE</div>
		<div>MEETS</div>
		<div>HUNGER</div>
	  </h2>
	</div>
	<div className="meal-image">
	  <ParallaxImageComponent
		src="https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
		alt="asvs"
		imgParallaxPercent={"10"}
		height="400px"
		width="350px"
	  />

	  <div className="para left-localP" data-speed={"1.4"}>
		<div className="blur-wrapper">
		  <img src="https://www.themealdb.com/images/ingredients/Chicken.png" alt="chkn"/>
		</div>
		<div className="blur-wrapper">
		  <img src="https://www.themealdb.com/images/ingredients/Chilli%20Powder.png" alt="chilli"/>
		</div>
	  </div>
	  <div className="para right-localP" data-speed={"1.5"}>
		<div className="blur-wrapper">
		  <img src="https://www.themealdb.com/images/ingredients/Tomatoes.png" alt="Tomatoes"/>
		</div>
		<div className="blur-wrapper">
		  <img src="https://www.themealdb.com/images/ingredients/Coriander%20Seeds.png" alt="Coriander"/>
		</div>
	  </div>

	</div>
	<div className="meal-desc">
	  Handi chicken is a delicious dish made with chicken cooked on a low flame for a long time. Handi is a Hindi word
	  for an earthen pot and the traditional recipe is still made in an earthen pot and is slow-cooked in tandoor.
	  So, we have this recipe for you that will not only cause much less mess than you think and will not compromise on
	  the restaurant-style taste at all! What are you waiting for now? Gather your ingredients and cook this dish with
	  the help of this easy step by step recipe below!
	</div>
	<div className="circle circle-1" data-speed={"3"}></div>
	<div className="circle circle-2" data-speed={"4"}></div>
  </MealRecipeStyles>)
}
export default MealRecipeComponent
