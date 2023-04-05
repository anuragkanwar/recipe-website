import styled from "styled-components";

export const HorzListItemStyles = styled.div`
  padding-bottom: 2em;
  border-bottom: var(--border);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h3 {
    color: var(--title-color);
    font-family: "Monalisa", "Space Mono", sans-serif;
    font-size: 2rem;
    font-weight: lighter;
    letter-spacing: 2px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-end;
  }

  p {
    font-size: 0.75rem;
    flex-basis: 35%;
  }

`