import styled from "styled-components";

export const MealRecipeStyles = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 160px var(--padding-side) 0;
  position: relative;

  .meal-title {
    flex-basis: 25%;
    align-self: flex-end;

    div {
      letter-spacing: 5px;
      font-family: "Monalisa", "Space Mono", sans-serif;
      font-size: 4vw;
      font-weight: 200;
      color: var(--title-color);
      text-transform: uppercase;
      display: block;
    }
  }

  .meal-image {
    position: relative;
    flex-shrink: 0;

    &::before {
      z-index: -1;
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(#ffa97b, #ffa26f);
      rotate: 6deg;
      transform-origin: center;
      transform: scale(1.3);
    }

    .para {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      top: 0;

      .blur-wrapper {
        &::before {
          content: "";
          display: inline-block;
          position: absolute;
          width: 100%;
          height: 150px;
          transform-origin: center;
          transform: scale(1.2);
          backdrop-filter: blur(2px);
          clip-path: circle(40%);
          will-change: transform;
        }
      }

      img {
        width: 140px;
        border-radius: 50%;
        position: relative;
      }
    }

    .left-localP {
      height: 120%;
      left: -40%;
    }

    .right-localP {
      height: 100%;
      right: -40%;
    }


  }

  .meal-desc {
    flex-basis: 25%;
    align-self: flex-end;
  }

  .circle {
    position: absolute;
    z-index: -2;
    width: 200px;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    background: transparent;
    border: var(--border);
  }

  .circle-1 {
    top: 20%;
    left: 20%
  }

  .circle-2 {
    top: 50%;
    left: 70%;
  }

`