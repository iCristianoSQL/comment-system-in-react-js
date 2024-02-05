import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const QuizContainer = styled.div`
  background-color: ${colors.primary[2]};
  height: 10rem;
  width: 15rem;
  padding: 0.3rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    color: ${colors.primary[1]};
    text-align: center;
    border-bottom: 1px solid ${colors.primary[1]};
  }

  div {
    p {
      color: ${colors.primary[1]};
      text-align: center;
    }
  }
`;
