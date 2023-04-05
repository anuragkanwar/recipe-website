import React from 'react'
import {WorkingStyles} from "./working.styles.jsx";
import HorzListItemComponent from "../../../../components/horzListItem/horzListItem.component.jsx";

const itemList = [{
  title: "find by Category",
  desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore harum iusto nam optio quisquam, saepe!`
}, {
  title: "find by Ingredients",
  desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga, laborum maiores molestiae quia repellat?`
}, {
  title: "find by Country",
  desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores id libero magnam placeat reiciendis ullam`
},]

const WorkingComponent = () => {
  return (<WorkingStyles>
	<div data-speed={1.2} className="working-info">
	  <h2 className="info-title">
		<div>How This</div>
		<div>Works</div>
	  </h2>
	  <p className="info-desc font-p">We take care of everything, you just have to follow the recipe.</p>
	  <img className="info-image" src="https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg"
		   alt="Blackberry Fool"/>
	</div>
	<div className="working-list">
	  {itemList.map((item, index) => {
		return <HorzListItemComponent key={index} index={String(index + 1).padStart(2, '0')} title={item.title}
									  desc={item.desc}/>
	  })}

	</div>
  </WorkingStyles>)
}
export default WorkingComponent
