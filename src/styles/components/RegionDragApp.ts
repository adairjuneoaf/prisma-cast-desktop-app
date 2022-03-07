import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 1.75rem;

  top: 0;
  left: 0;

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  z-index: 10;
  background: transparent;

  -webkit-app-region: drag;
  //user-select: none;
`;

export const CustomControlsWindow = styled.div`
  width: fit-content;
  max-height: 1.75rem;

  display: flex;
  align-items: center;
  //justify-content: flex-end;

  -webkit-app-region: no-drag;

  button {
    width: 2.5rem;
    height: 1.75rem;

    font-size: 0;
    border: 0;
    border-radius: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.colors.purple_dark};
    color: ${(props) => props.theme.colors.text_alternative};

    &.minimize,
    &.maximize {
      transition: filter 0.1s;
      &:hover {
        filter: brightness(0.9);
      }
    }

    &.close {
      transition: background-color 0.1s;
      &:hover {
        background: red;
      }
    }

    &.minimize {
      img {
        width: 1.125rem;
        height: auto;
      }
    }

    &.maximize {
      img {
        width: 1rem;
        height: auto;
      }
    }

    &.close {
      img {
        width: 1.125rem;
        height: auto;
      }
    }
  }
`;
