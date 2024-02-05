import { FaArrowDown } from "react-icons/fa";
import * as S from "./styles";
import { AnswerCard } from "../../Answer/AnswerCard";
import { useState } from "react";
import { AnswerService } from "../../../services/general";

export const AskCard = ({
  description,
  id,
}: {
  description: string;
  id: number;
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { data: answer } = AnswerService.useGetAnswerWithAskById(id);
  console.log(answer);
  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      <S.AskContainer>
        <div>
          <strong>Cristiano</strong>
          <p>{description}</p>
        </div>
        <FaArrowDown onClick={() => handleShowAnswer()} />
      </S.AskContainer>
      {showAnswer &&
        answer?.map((event) => {
          return (
            <AnswerCard
              date={event.date}
              user={{ name: event.user.name }}
              description={event.description}
            />
          );
        })}
    </>
  );
};
