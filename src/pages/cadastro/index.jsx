import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
//import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleCadastro,
  SubtitleCadastro,
  TemCadastro,
  Click,
  CriarText,
  Row,
  Wrapper,
} from "./styles";

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const handleClickSignIn = () => {
    navigate("/login");
  };
  console.log("errors", errors);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>
              Crie sua conta e make the change.
            </SubtitleCadastro>
            <form>
              <Input
                placeholder="Nome"
                leftIcon={<BsPersonFill />}
                name="nome"
                control={control}
              />
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>Campo obrigatório!!</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Campo obrigatorio!!</span>}
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
                onClick={handleClickSignIn}
              />
            </form>
            <Click>
              Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </Click>
            <Row>

              <TemCadastro>Já tenho Cadastro</TemCadastro>

              <CriarText onClick={handleClickSignIn}>Fazer Login</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
