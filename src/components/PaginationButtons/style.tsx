import styled from "styled-components";

type visibleProps = { visible: boolean };
type paginationProps = { paginationvisible: boolean };

export const ContainerButtons = styled.div<paginationProps>`
  ${({ paginationvisible }) =>
    paginationvisible ? `display: flex;` : `display: none;`}
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  gap: 20px;
  user-select: none;

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export const ButtonFirst = styled.button`
  font-size: 20px;
  color: #fff;
  background-color: #e50914ce;
  padding: 5px;
`;

export const ButtonSecond = styled.button<visibleProps>`
  ${({ visible }) => (visible ? `display: initial;` : `display: none;`)}
  font-size: 20px;
  background-color: transparent;
  color: #ffffff7f;
  &:hover {
    color: #fff;
  }
`;

export const ButtonThird = styled(ButtonSecond)``;

export const ButtonPrev = styled.button<visibleProps>`
  ${({ visible }) => (visible ? `display: initial;` : `display: none;`)}

  font-size: 20px;
  background-color: transparent;
  color: #ffffff7f;
  &:hover {
    color: #fff;
  }
`;

export const ButtonNext = styled(ButtonPrev)``;
