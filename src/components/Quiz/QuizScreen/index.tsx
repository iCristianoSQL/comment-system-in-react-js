import { QuizCard } from "../QuizCard";
import * as S from "./styles";
import { IQuiz } from "../../../utils/@types";
import { QuizServices } from "../../../services/general";

export const QuizScreen = () => {
  const { data: quizzes } = QuizServices.useGetQuiz();
  return (
    <S.QuizContainer>
      {quizzes?.map((event: IQuiz) => (
        <QuizCard
          id={event.id}
          name={event.name}
          description={event.description}
          key={event.id}
        />
      ))}
    </S.QuizContainer>
  );
};
