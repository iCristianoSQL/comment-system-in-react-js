import dayjs from "dayjs";
import { IAnswerWithUser } from "../../../utils/@types";
import * as S from "./styles";

export const AnswerCard = ({ user, description, date }: IAnswerWithUser) => {
  const formattedDate = dayjs(date).format("[No dia] DD/MM/YYYY [às] HH:mm");

  return (
    <S.AnswerContainer>
      <p>
        Respondido por: <strong>{user.name}</strong>
      </p>
      <p>{formattedDate}</p>
      <p className="description">{description}</p>
    </S.AnswerContainer>
  );
};
