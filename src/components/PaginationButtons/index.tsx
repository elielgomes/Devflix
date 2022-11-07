import {
  ContainerButtons,
  ButtonNext,
  ButtonPrev,
  ButtonFirst,
  ButtonSecond,
  ButtonThird,
} from "./style";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

export type Props = {
  buttonsPaginationVisible: boolean;
  prevVisible: boolean;
  clickPrev: () => void;
  ancorTop: string;
  clickFirstValue: () => void;
  firstValue: number;
  clickSecondValue: () => void;
  secondVisible: boolean;
  secondValue: number;
  clickThirdValue: () => void;
  thirdVisible: boolean;
  thirdValue: number;
  clickNext: () => void;
  nextVisible: boolean;
};

const PaginationButtons: React.FC<Props> = (props) => {
  return (
    <>
      <ContainerButtons paginationvisible={props.buttonsPaginationVisible}>
        <a href={props.ancorTop}>
          <ButtonPrev onClick={props.clickPrev} visible={props.prevVisible}>
            <FaAngleDoubleLeft />
          </ButtonPrev>
        </a>

        <a href={props.ancorTop}>
          <ButtonFirst onClick={props.clickFirstValue}>
            {props.firstValue}
          </ButtonFirst>
        </a>

        <a href={props.ancorTop}>
          <ButtonSecond
            onClick={props.clickSecondValue}
            visible={props.secondVisible}
          >
            {props.secondValue}
          </ButtonSecond>
        </a>

        <a href={props.ancorTop}>
          <ButtonThird
            onClick={props.clickThirdValue}
            visible={props.thirdVisible}
          >
            {props.thirdValue}
          </ButtonThird>
        </a>

        <a href={props.ancorTop}>
          <ButtonNext onClick={props.clickNext} visible={props.nextVisible}>
            <FaAngleDoubleRight />
          </ButtonNext>
        </a>
      </ContainerButtons>
    </>
  );
};

export default PaginationButtons;
