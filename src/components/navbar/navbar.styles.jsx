import styled from "styled-components";

export const NavigationBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding-side);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: var(--bg-color);

  .nav-logo {
    font-size: 1.625rem;
    font-weight: 200;
    cursor: pointer;

    a {
      border: none;
    }
  }

  .nav-links {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin: 0 20px;
      border: none;
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        border-radius: 100vh;
        background: var(--title-color);
        transform: translateX(-100%);
      }

      &:hover::before {
        transition: all 0.3s ease-in-out;
        transform: translateX(0);
      }
    }
  }


  .nav-cta {
    div {
      background: var(--accent-color);
      padding: 15px 25px;
      cursor: pointer;
    }
  }
`