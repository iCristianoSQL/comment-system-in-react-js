export interface IQuiz {
  id: number;
  name: string;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPOSTQuiz {
  name: string;
  description: string;
  userId: number;
}

export interface IAsk {
  id: number;
  quizId: number;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAnswer {
  id: number;
  description: string;
  date: string;
  userId: number;
  askId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  id: number;
  name: string;
  password: string;
  cpf: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAnswerWithUser {
  id: number;
  description: string;
  date: string;
  userId: number;
  askId: number;
  createdAt: string;
  updatedAt: string;
  user: IUser;
}
export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
