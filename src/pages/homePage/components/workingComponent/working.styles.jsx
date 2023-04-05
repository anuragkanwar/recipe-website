import styled from "styled-components";

export const WorkingStyles = styled.section`
  display: flex;
  gap: 3em;
  padding: 250px var(--padding-side) 0;
  align-items: stretch;
  justify-content: space-between;

  .working-info {
    flex-basis: 30%;

    .info-title {
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

    p {
      font-weight: 300;
    }

    .info-image {
      width: 100%;
      aspect-ratio: 20 / 17;
      object-fit: cover;
      object-position: center;
    }
  }

  .working-list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2em;
  }
`