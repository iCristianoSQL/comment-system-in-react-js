import { useNavigate } from "react-router-dom";
import { imgLogoUrl, navibarOptions } from "./content";
import * as S from "./styles";
import { TbLogout } from "react-icons/tb";
import { UserService } from "../../services/general";
import { useForm } from "react-hook-form";
import SelectInput from "../SelectInput";
import { useEffect } from "react";
import { z } from "zod";
const schema = z.object({
  user: z.number(),
});
type TQuiz = z.infer<typeof schema>;

export const NavBar = () => {
  const navigate = useNavigate();
  const { data: users } = UserService.useGetUsers();
  const teamsOptions = users?.map(({ id, name }) => ({ value: id, label: name })) ?? [];
  const {
    register,
    watch,
    setValue, 
    formState: { errors },
  } = useForm<TQuiz>();

  const user = watch('user');

  useEffect(() => {
    const storedUserId = localStorage.getItem('@userId');
    if (storedUserId) {
      setValue('user', parseInt(storedUserId));
    }
  }, [setValue]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('@userId', user.toString());
    }
  }, [user]);

  return (
    <S.Header>
      <img src={imgLogoUrl} alt="Logo" />
      <div>
        <SelectInput
          register={register("user")}
          options={teamsOptions}
          width="250px"
          label="Usuário"
        />
        {errors.user && <p>{errors.user.message}</p>}
      </div>
      <S.NavBar>
        <ul>
          {navibarOptions.map((event) => (
            <li onClick={() => navigate(event.path)} key={event.id}>
              {event.title}
            </li>
          ))}
        </ul>
        <TbLogout />
      </S.NavBar>
    </S.Header>
  );
};
