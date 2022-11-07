import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 15px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 40px;
  }

  .movie {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 60px;
    margin: 0 60px;
    flex-wrap: wrap;
  }

  img.poster-movie {
    width: 300px;
    border-radius: 10px;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 90px;
    max-width: 40%;
  }

  button#go-back {
    background-color: red;
    border: none;
    cursor: pointer;
    border-radius: 15px;
    color: #fff;
    padding: 10px 20px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 16px;
    transition: 0.2s;
    &:hover {
      filter: brightness(0.8);
      transform: scale(1.1);
    }
  }

  div.container-buttons {
    display: flex;
    gap: 60px;
  }

  span {
    line-height: 150%;
    margin-bottom: 20px;
  }

  span#overview {
    text-align: justify;
  }

  span.release-date {
    opacity: 0.5;
  }

  span.movie-info {
    background-color: #1e1e1e;
    padding: 5px 10px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    img.poster-movie {
      width: 280px;
      border-radius: 10px;
    }
    h1,
    h2 {
      text-align: center;
    }

    .movie {
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .details {
      margin-top: 30px;
      flex-direction: column;
      align-items: center;
      margin-left: 0px;
      max-width: 60%;
    }

    div.container-buttons {
      flex-direction: column;
      gap: 30px;
    }
  }

  @media (max-width: 525px) {
    .details {
      max-width: 80%;
    }
  }

  @media (max-width: 425px) {
    .details {
      max-width: 90%;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 25px;
      padding: 0 10px;
    }

    h2 {
      font-size: 14px;
    }

    span#overview {
      padding: 0 15px;
    }
  }
`;

export const ListGenres = styled.ul`
  list-style: none;
  display: flex;

  gap: 20px 10px;
  margin-bottom: 40px;
  max-width: 300px;
  flex-wrap: wrap;

  li {
    background-color: #1e1e1e;
    padding: 5px 10px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
