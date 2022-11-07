import styled from "styled-components";

export const ContainerNotFound = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;
  gap: 20px;

  h1 {
    text-align: center;
  }

  .colored-text {
    color: #e50914;
  }

  .image-404 {
    width: 600px;
  }

  div.container-banner {
    padding: 40px 0;
    margin: 0 auto;
    max-width: 1500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p,
    span {
      font-family: "Bebas Neue", "Bebas" sans-serif;
      font-size: 30px;
      text-align: center;
    }

    button {
      background-color: #e50914;
      color: #fff;
      border: none;
      border-radius: 15px;
      padding: 10px 20px;
      margin-top: 30px;
      transition: all 0.2s;
      font-size: 20px;
      &:hover {
        transform: scale(1.1);
        filter: brightness(0.8);
      }
    }
  }

  @media (max-width: 768px) {
    h1,
    p {
      margin: 0 20px;
    }
    .image-404 {
      width: 80%;
    }
  }
`;
