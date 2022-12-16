import { Button } from "../../components/Button";
import { DefaultLayout } from "../../components/DefaultLayout";
import { ContentRegister, IconRegister, TextBox, TextRegister } from "./style";
import LogoImage from '../../assets/logos/full-logo-v2.svg';
import { Form, Formik, FormikHelpers } from "formik";
import { Input } from "../../components/Input";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface FormProps {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}


export function Signup() {
  const [_,setDataForm] = useLocalStorage('userFormData', '');
  const navigate = useNavigate();
  const validate = Yup.object({
    fullName: Yup.string().min(3, 'Deve ter 3 caracteres ou mais').required('Nome é obrigatório'),
    email: Yup.string().matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Email inválido').required('Insira seu email'),
    password: Yup.string()
      .min(8, "Deve ter 8 caracteres ou mmais")
      .matches(/[a-z]+/, "Insira um caractere minúsculo")
      .matches(/[A-Z]+/, "Insira um caractere maiúsculo")
      .matches(/[@$!%*#?&]+/, "Insira um caractere especial")
      .matches(/\d+/, "Insira um número")
      .required('Senha é obrigatória'),
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
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validate}
          onSubmit={(values: FormProps, { setSubmitting }: FormikHelpers<FormProps>) => {
            setTimeout(() => {
              setDataForm(values);
              setSubmitting(false);
              navigate('/home');
            }, 0);
          }}
        >
          {formik => (
            <Form className="form">
              <Input label="Nome" name="fullName" type="text" placeholder="Digite seu nome completo" />
              <Input label="Email" name="email" type="text" placeholder="Escolha seu melhor email" />
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