import styled from "styled-components";
import Modal from "react-modal";

export const QuizModalTitle = styled.h3`
    font-size: 2rem;
    text-align: center;
`;

export const AsksBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ModalContainer = styled(Modal)`
  max-height: 80vh;
  overflow: auto;
`;