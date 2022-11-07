import styled from "styled-components";

export const ContainerCards = styled.div`
  min-height: 100vh;
  max-width: 1500px;
  margin: auto;
  padding: 100px 50px;
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 60px;
  row-gap: 100px;
`;

export const ContainerTitle = styled.div`
  padding: 120px 0 0;
  h1 {
    font-size: 40px;
    opacity: 0.5;
    text-align: center;
    padding: 0 20px;

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 525px) {
    h1 {
      font-size: 30px;
    }
  }
`;
