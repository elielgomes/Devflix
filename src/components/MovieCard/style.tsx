import styled from "styled-components";

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  img {
    width: 180px;
    border-radius: 10px;
  }

  span {
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    text-align: center;
  }

  a {
    transition: all 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
