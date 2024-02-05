import { useForm } from "react-hook-form";
import { z } from "zod";
import { QuizServices, UserService } from "../../../services/general";
import SelectInput from "../../SelectInput";
import TextInput from "../../TextInput";
import * as S from "./styles";
import TextArea from "../../TextArea";
import { useMutation } from "react-query";

const schema = z.object({
  name: z.string(),
  description: z.string(),
  userId: z.number(),
});
type TQuiz = z.infer<typeof schema>;

export const QuizCreate = () => {
  const { data: users } = UserService.useGetUsers();
  const teamsOptions = users?.map(({ id, name }) => ({ value: id, label: name })) ?? [];
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<TQuiz>();
    const createChampion = useMutation(QuizServices.usePostQuiz);
    
  const onSubmit = async (data: TQuiz) => {
    data.userId = Number(data.userId);
    createChampion.mutateAsync(data);
  };
  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Novo Questionário</h3>
        <TextInput
          label="Nome"
          placeholder="Nome"
          type="text"
          id="name"
          register={register("name", { required: true })}
        />
        {errors.name && <span className="error">O nome é obrigatório.</span>}
        <TextArea
          placeholder="Descrição"
          id="description"
          label="Descrição"
          register={register("description", { required: true })}
        />
        {errors.description && (
          <span className="error">A descrição é obrigatória.</span>
        )}
        <div>
          <SelectInput
            register={register("userId")}
            options={[{ value: 0, label: "Selecione" }, ...teamsOptions]}
            width="250px"
            label="Usuário"
          />
          {errors.userId && <p>{errors.userId.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </S.Form>
    </S.Container>
  );
};
