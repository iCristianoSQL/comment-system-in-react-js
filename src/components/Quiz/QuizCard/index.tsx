import { useState } from "react";
import { truncateText } from "../../../utils/truncate";
import { Button } from "../../Button";
import { QuizModal } from "../QuizModal";
import * as S from "./styles";
import { IQuizCard } from "./types";

export const QuizCard = ({ id, name, description }: IQuizCard) => {
  const [quizModal, setQuizModal] = useState(false);

  const handleCloseQuizModal = () => {
    setQuizModal(false);
  };

  const handleOpenModal = () => {
    setQuizModal(true);
  };
  const storedUserId = Number(localStorage.getItem("@userId") ?? 0);
  return (
    <S.QuizContainer>
      <h3>
        {name} - {id}
      </h3>
      <strong>{id === storedUserId ? "é igual" : "f"}</strong>
      <div>
        <p>{truncateText(`${description}`, 140)}</p>
      </div>
      <Button text="Abrir" handleClick={() => handleOpenModal()} />
      <QuizModal
        id={id}
        onRequestClose={handleCloseQuizModal}
        handleCloseModal={handleCloseQuizModal}
        isOpen={quizModal}
      />
    </S.QuizContainer>
  );
};
