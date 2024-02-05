import * as S from "./styles";
import { IButton } from "./types";

export const Button = ({ text, handleClick }: IButton) => {
  return <S.Button onClick={handleClick}>{text}</S.Button>;
};
