import styled from "styled-components";

export const ParallaxImageContainer = styled.div.attrs((props) => ({
  ...props,
  height: props.height || "500px",
  width: props.width || "300px",
  debug: props.debug || false,
  imgParallaxPercent: props.imgParallaxPercent || "50"
}))`
  position: relative;
  overflow: ${props => (props.debug ? "visible" : "hidden")};
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => (props.debug ? "2px solid red" : "none")};

  img {
    border: ${props => (props.debug ? "1px solid black" : "none")};
    position: absolute;
    width: 100%;
    height: ${props => `${+props.imgParallaxPercent + 100}%`};
    object-fit: cover;
    bottom: 0;
  }

`