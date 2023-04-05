import React from 'react'
import HeroComponent from "./components/heroComponent/hero.component.jsx";
import MealRecipeComponent from "./components/mealRecipeComponent/mealRecipe.component.jsx";
import WorkingComponent from "./components/workingComponent/working.component.jsx";

const HomePage = () => {
  return (<>
	<HeroComponent/>
	<MealRecipeComponent/>
	<WorkingComponent/>
  </>)
}
export default HomePage
