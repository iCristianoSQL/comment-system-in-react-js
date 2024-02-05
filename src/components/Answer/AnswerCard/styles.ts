import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const AnswerContainer = styled.div`
  width: 100%;
  background-color: ${colors.primary["0.2"]};
  border-radius: 0 10px;
  padding: 0.5rem;

  p {
    color: ${colors.primary[1]};
    font-size: 1rem;

    strong {
      color: ${colors.primary[1]};
      font-size: 1rem;
    }
  }

  .description {
    margin-top: 0.5rem;
  }
`;
