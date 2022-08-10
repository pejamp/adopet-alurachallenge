import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { DefaultLayout } from "../../components/DefaultLayout";
import { Input } from "../../components/Input";
import { Content, TextContact } from "./style";
import { Textarea } from "../../components/Textarea";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function Contact() {
  const [setDataForm] = useLocalStorage('contactData', '');
  const navigate = useNavigate();
  const validate = Yup.object({
    fullName: Yup.string().min(3, 'Deve ter 3 caracteres ou mais').required('Nome é obrigatório'),
    phone: Yup.string().matches(/(\(?\d{2}\)?\s)?(\d{4,5}\d{4})/g, 'Número de telefone inválido').required('Número de telefone obrigatório'),
    petName: Yup.string().min(3, 'Deve ter pelo menos 3 caracteres').required('Nome do animal é obrigatório'),
    message: Yup.string().max(180, 'Máximo de 180 caracteres').required('Escreva alguma mensagem'),
  });

  return (
    <DefaultLayout profileIcon={true}>
      <Content>
        <TextContact>
          Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:
        </TextContact>
        <Formik
          initialValues={{
            fullName: '',
            phone: '',
            petName: '',
            message: '',
          }}
          validationSchema={validate}
          onSubmit={values => {
            setDataForm(values);
            navigate('/home');
          }}
        >
          {formik => (
            <Form className="form">
              <Input secondStyle label="Nome" name="fullName" type="text" placeholder="Insira seu nome completo" />
              <Input secondStyle label="Telefone" name="phone" type="text" placeholder="Insira seu telefone e/ou whatsapp" />
              <Input secondStyle label="Nome do animal" name="petName" type="text" placeholder="Por qual animal você se interessou?" />
              <Textarea secondStyle label="Mensagem" name="message" placeholder="Escreva sua mensagem." />
              <Button tagType="button" type="submit">Enviar</Button>
            </Form>
          )}
        </Formik>
      </Content>
    </DefaultLayout>
  );
}