import * as S from "./styles";
import { IQuizModal } from "./types";
import { AskService, QuizServices } from "../../../services/general";
import { AskCard } from "../../Ask/AskCard";

export const QuizModal = ({ isOpen, id, onRequestClose }: IQuizModal) => {
  const { data: quiz } = QuizServices.useGetQuizById(id ?? 0);
  const { data: asks } = AskService.useGetAskByQuizId(id ?? 0);
  return (
    <S.ModalContainer
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.QuizModalTitle>
        {quiz?.name} - {quiz?.id}
        <p>{quiz?.description}</p>
      </S.QuizModalTitle>
      <S.AsksBox>
        {asks?.map((event) => {
          return <AskCard key={event.id} id={event.id} description={event.description} />;
        })}
      </S.AsksBox>
    </S.ModalContainer>
  );
};
