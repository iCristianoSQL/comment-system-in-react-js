import { AxiosResponse } from "axios";
import { api } from "./api";
import { useQuery, UseQueryResult } from "react-query";
import { toast } from "react-toastify";
import { handleRequestError } from "../utils/requestErrors";
import { IAnswer, IAnswerWithUser, IAsk, IPOSTQuiz, IQuiz, IUser } from "../utils/@types";

export const QuizServices = {
  useGetQuiz: (): UseQueryResult<IQuiz[]> => {
    return useQuery<IQuiz>(["lista-de-quizzes"], async () => {
      const response: AxiosResponse<IQuiz> = await api.get<IQuiz>("quizzes");
      return response.data;
    });
  },

  useGetQuizById: (quizId: number): UseQueryResult<IQuiz> => {
    return useQuery<IQuiz>(["quiz-por-id", quizId], async () => {
      const response: AxiosResponse<IQuiz> = await api.get<IQuiz>(
        `quizzes/${quizId}`
      );
      return response.data;
    });
  },

  usePostQuiz: async (quizzes: IPOSTQuiz): Promise<IPOSTQuiz> => {
    try {
      const response: AxiosResponse<IPOSTQuiz> = await api.post<IPOSTQuiz>(
        "quizzes",
        quizzes
      );
      toast.success("Quiz cadastrado com sucesso!");
      return response.data;
    } catch (error) {
      handleRequestError(error);
      throw error;
    }
  },
};

export const AskService = {
  useGetAsk: (): UseQueryResult<IAsk[]> => {
    return useQuery<IAsk>(["lista-de-asks"], async () => {
      const response: AxiosResponse<IAsk> = await api.get<IAsk>("asks");
      return response.data;
    });
  },

  useGetAskById: (askId: number): UseQueryResult<IAsk> => {
    return useQuery<IAsk>(["ask-por-id", askId], async () => {
      const response: AxiosResponse<IAsk> = await api.get<IAsk>(
        `asks/${askId}`
      );
      return response.data;
    });
  },

  useGetAskByQuizId: (quizId: number): UseQueryResult<IAsk[]> => {
    return useQuery<IAsk>(["ask-por-quizid", quizId], async () => {
      const response: AxiosResponse<IAsk> = await api.get<IAsk>(`asks/quiz/${quizId}`);
      return response.data;
    });
  },
};

export const AnswerService = {
  useGetAnswer: (): UseQueryResult<IAnswer[]> => {
    return useQuery<IAnswer>(["lista-de-answers"], async () => {
      const response: AxiosResponse<IAnswer> = await api.get<IAnswer>("user-quiz-answers");
      return response.data;
    });
  },

  useGetAnswerWithAskById: (askId: number): UseQueryResult<IAnswerWithUser[]> => {
    return useQuery<IAnswerWithUser>(["ask-por-askId", askId], async () => {
      const response: AxiosResponse<IAnswerWithUser> = await api.get<IAnswerWithUser>(`user-quiz-answers/by-ask/${askId}`);
      return response.data;
    });
  },
}

export const UserService = {
  useGetUsers: (): UseQueryResult<IUser[]> => {
    return useQuery<IUser>(["lista-de-users"], async () => {
      const response: AxiosResponse<IUser> = await api.get<IUser>("users");
      return response.data;
    });
  },
}