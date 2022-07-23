import { Button } from "../../components/Button";
import { DefaultLayout } from "../../components/DefaultLayout";
import { ContentRegister, IconRegister, TextBox, TextRegister } from "./style";
import LogoImage from '../../assets/logos/full-logo-v2.svg';
import { Form, Formik } from "formik";
import { Input } from "../../components/Input";
import * as Yup from 'yup';

export function Signup() {
  const validate = Yup.object({
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    fullName: Yup.string().min(3, 'Deve ter 3 caracteres ou mais').required('Nome é obrigatório'),
    password: Yup.string().min(6, 'Deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais').required('Confirmação da senha é obrigatório'),
  });

  return (
    <DefaultLayout>
      <ContentRegister>
        <IconRegister src={LogoImage} alt="Logo Adopet" />
        <TextBox>
          <TextRegister>
            Ainda não tem cadastro?
          </TextRegister>
          <TextRegister>
            Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
          </TextRegister>
        </TextBox>
        <Formik
          initialValues={{
            email: '',
            fullName: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validate}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {formik => (
            <Form className="form">
              <Input label="Email" name="email" type="text" placeholder="Escolha seu melhor email" />
              <Input label="Nome" name="fullName" type="text" placeholder="Digite seu nome completo" />
              <Input label="Senha" name="password" type="password" placeholder="Crie uma senha" />
              <Input label="Confirme sua senha" name="confirmPassword" type="password" placeholder="Repita a senha criada acima" />
              <Button tagType="button" type="submit">Cadastrar</Button>
            </Form>
          )}
        </Formik>
      </ContentRegister>
    </DefaultLayout>
  );
}