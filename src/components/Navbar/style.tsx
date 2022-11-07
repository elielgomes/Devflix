import styled from "styled-components";

export const NavbarBody = styled.div`
  background-color: #1e1e1e6f;
  height: 80px;
  width: 100vw;
  position: fixed;
  z-index: 1;

  #navbar {
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 1500px;
  }

  #container-brand {
    margin-left: 40px;
  }

  input {
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    margin-right: 30px;
    outline: none;
  }

  @media (max-width: 525px) {
    img {
      width: 90px;
    }
  }

  @media (max-width: 425px) {
    input {
      width: 160px;
    }
  }
`;
