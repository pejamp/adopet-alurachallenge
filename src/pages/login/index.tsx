import { Button } from "../../components/Button";
import { DefaultLayout } from "../../components/DefaultLayout";
import { ContentLogin, IconLogin, LinkLogin, Space, TextLogin } from "./style";
import LogoImage from '../../assets/logos/full-logo-v2.svg';
import { Form, Formik } from "formik";
import { Input } from "../../components/Input";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useState } from "react";
import { WarningMessage } from "../../components/WarningMessage";

export function Login() {
  const [dataForm] = useLocalStorage('userFormData', '');
  const [errorLogin, setErrorLogin] = useState('');
  const navigate = useNavigate();
  const validate = Yup.object({
    email: Yup.string().matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Email inválido').required('Insira seu email'),
    password: Yup.string().required('Insira sua senha'),
  });

  return (
    <DefaultLayout>
      <ContentLogin>
        <IconLogin src={LogoImage} alt="Logo Adopet" />
        <TextLogin>
          Já tem conta? Faça seu login:
        </TextLogin>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validate}
          onSubmit={values => {
            console.log(values);

            if (dataForm.email === values.email) {
              if (dataForm.password === values.password) {
                navigate('/home');
              } else {
                console.log('Senha incorreta');
                setErrorLogin('password');
              }
            } else {
              console.log('Email incorreto');
              setErrorLogin('email');
            }
          }}
        >
          {formik => (
            <Form className="form">
              {errorLogin === 'email' && (<WarningMessage message="Email incorreto" />)}
              {errorLogin === 'password' && (<WarningMessage message="Senha incorreta" />)}
              <Space>
                <Input label="Email" name="email" type="text" placeholder="Insira seu email" />
                <Input label="Senha" name="password" type="password" placeholder="Insira sua senha" />
              </Space>
              <LinkLogin href="#">Esqueci minha senha. </LinkLogin>
              <Button tagType="button" type="submit">Entrar</Button>
            </Form>
          )}
        </Formik>
      </ContentLogin>
    </DefaultLayout>
  );
}