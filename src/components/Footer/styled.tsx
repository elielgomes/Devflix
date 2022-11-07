import styled from "styled-components";

export const FooterBody = styled.footer`
  background-color: #1e1e1e6f;
  max-height: 450px;

  .container-footer {
    margin: auto;
    max-width: 1500px;
    padding-top: 40px;
  }
  .container-brand-footer {
    img {
      width: 80px;
      margin: 0 0 30px 80px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 20px;
    row-gap: 10px;
    list-style: none;
  }

  li {
    cursor: pointer;
    text-align: center;
    color: #ffffff7f;
    &:hover {
      color: #fff;
    }
  }

  p {
    text-align: center;
    color: #ffffff1f;
    padding: 60px 0;
  }

  @media (max-width: 1000px) {
    ul {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  @media (max-width: 525px) {
    ul {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  @media (max-width: 425px) {
    .container-brand-footer {
      display: flex;
      justify-content: center;
      img {
        width: 80px;
        margin: 0 0 30px 0;
      }
    }
  }
`;
