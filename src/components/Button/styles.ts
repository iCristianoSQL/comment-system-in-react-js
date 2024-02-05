import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Button = styled.button`
    height: 4vh;
    text-transform: uppercase;
    font-weight: 600;
    color: ${colors.primary[1]};
    background-color: ${colors.valid[0]};

    &:hover {
        filter: brightness(0.9);
    }
`;