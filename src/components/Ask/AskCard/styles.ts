import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const AskContainer = styled.div`
  width: 100%;
  background-color: ${colors.primary["0.2"]};
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    strong {
      color: ${colors.primary[1]};
      font-size: 0.5rem;
    }

    p {
      color: ${colors.primary[1]};
      font-size: 1rem;
    }
  }

  svg {
    fill: ${colors.primary[1]};
    cursor: pointer;
  }
`;
