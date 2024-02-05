import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled.section`
    width: 100%;

    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
`;

export const Form = styled.form`
    background-color: ${colors.primary[2]};
    width: fit-content;
    padding: 1rem;
    border-radius: 10px;

    h3 {
        text-align: center;
    }
`;
