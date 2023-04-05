import styled from "styled-components";

export const HeroComponentStyle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 160px;
  
  .hero-title {
    z-index: 1;
    flex-shrink: 0;

    h1 > span {
      letter-spacing: 5px;
      font-family: "Monalisa", "Space Mono", sans-serif;
      font-size: 8vw;
      font-weight: lighter;
      color: var(--title-color);
      text-transform: uppercase;
      display: block;

      span {
        display: inline-block;
        font-family: "Space Mono", sans-serif;
        font-size: 0.625rem;
        height: 30px;
      }
    }

    h1 > span:nth-child(1) {
      transform: translateX(calc(2 * var(--padding-side)));
    }

    h1 > span:nth-child(2) {
      transform: translateX(var(--padding-side));
    }

    h1 > span:nth-child(3) {
      transform: translateX(calc(3 * var(--padding-side)));
    }

    .hero-title-btn {
      margin: 5% 0 10% 68%;
      position: relative;

      .circle {
        text-align: right;
        font-size: 0.75rem;
        text-transform: uppercase;
        height: 150px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: var(--border);
        display: flex;
        justify-content: center;
        letter-spacing: 0.5px;
        align-items: center;
        font-weight: 300;

        .long-arrow {
          position: absolute;
          transform: translateX(-150%);
          transition: all 0.4s ease-out;
        }

        &:hover {
          .long-arrow {
            position: absolute;
            transform: translateX(-130%);
          }
        }

      }
    }
  }


  .hero-img {
    flex-shrink: 0;
  }

`