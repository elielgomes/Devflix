import styled from "styled-components";

export const LoaderBody = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;

  .loader {
    display: block;
    position: relative;
    height: 30px;
    width: 150px;
    background-image: linear-gradient(#ffffff7f 30px, transparent 0),
      linear-gradient(#ffffff7f 30px, transparent 0),
      linear-gradient(#ffffff7f 30px, transparent 0),
      linear-gradient(#ffffff7f 30px, transparent 0);
    background-repeat: no-repeat;
    background-size: 30px auto;
    background-position: 0 0, 40px 0, 80px 0, 120px 0;
    animation: pgfill 500ms linear infinite;
  }

  @keyframes pgfill {
    0% {
      background-image: linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0);
    }
    25% {
      background-image: linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0);
    }
    50% {
      background-image: linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0);
    }
    75% {
      background-image: linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#ffffff7f 30px, transparent 0);
    }
    100% {
      background-image: linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0),
        linear-gradient(#e50914 30px, transparent 0);
    }
  }
`;
