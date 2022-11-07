import styled from "styled-components";

export const ContainerButtonHome = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100px;
  width: 100vw;
  position: fixed;
  z-index: 100;
  bottom: 0;
  pointer-events: none;

  button {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: none;
    background-color: #e5091486;
    transition: 0.3s;
    opacity: 0.8;
    margin-right: 60px;
    pointer-events: initial;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
      background-color: #e50914;
    }
  }

  svg {
    width: 30px;
    height: 30px;
    color: #ffffff9f;
  }

  @media (max-width: 768px) {
    button {
      margin-right: 40px;
    }
  }
  @media (max-width: 375px) {
    button {
      margin-right: 30px;
    }
  }
`;
