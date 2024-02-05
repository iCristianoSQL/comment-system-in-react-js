import { ModalProps } from "../../../utils/@types";

export interface IQuizModal extends ModalProps {
    id?: number;
    handleCloseModal: () => void;
}