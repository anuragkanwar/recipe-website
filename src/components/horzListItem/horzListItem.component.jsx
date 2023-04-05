import React from 'react'
import {HorzListItemStyles} from "./horzListItem.styles.jsx";

const HorzListItemComponent = ({index, title, desc}) => {
  return (<HorzListItemStyles>
	<h3>
	  <div>{index}</div>
	  <div>{title}</div>
	</h3>
	<p>{desc}</p>
  </HorzListItemStyles>)
}
export default HorzListItemComponent


