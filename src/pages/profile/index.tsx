import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { DefaultLayout } from "../../components/DefaultLayout";
import { Input } from "../../components/Input";
import { Content, Text } from "./style";
import { Textarea } from "../../components/Textarea";
import { ImageUpload } from "../../components/ImageUpload";
import { useRef } from "react";

export function Profile() {
  const imageUploader = useRef() as React.MutableRefObject<HTMLInputElement>;
  const FILE_SIZE = 160 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png"
  ];
  const navigate = useNavigate();
  const validate = Yup.object({
    userImage: Yup.string(),
    fullName: Yup.string().min(3, 'Deve ter 3 caracteres ou mais').required('Nome é obrigatório'),
    phone: Yup.string().required('Telefone é obrigatório').matches(/(\(?\d{2}\)?\s)?(\d{4,5}\d{4})/g, 'Número de telefone não válido'),
    city: Yup.string().min(3, 'Deve ter pelo menos 3 caracteres').required('Nome do animal é obrigatória'),
    about: Yup.string().max(180, 'Máximo de 180 caracteres'),
  });

  return (
    <DefaultLayout profileIcon={true}>
      <Content>
        <Text>
          Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
        </Text>
        <Formik
          initialValues={{
            userImage: '',
            fullName: '',
            phone: '',
            city: '',
            about: '',
          }}
          //validationSchema={validate}
          onSubmit={values => {
            console.log(values);
            console.log('submit');
            //navigate('/home');
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="form">
              <Text as={'h2'} profile>Perfil</Text>
              <ImageUpload 
                file={values.userImage}
                name="userImage" 
                label="Foto" 
                inputRef={imageUploader} 
              />
              <input 
                hidden
                ref={imageUploader}
                type="file" 
                name="userImage"
                accept="image/*"
                onChange={(event: any) => {setFieldValue("userImage", event.target.files[0])}} 
              />
              <Input secondStyle label="Nome" name="fullName" type="text" placeholder="Insira seu nome completo" />
              <Input secondStyle label="Telefone" name="phone" type="text" placeholder="Insira seu telefone e/ou whatsapp" />
              <Input secondStyle label="Cidade" name="city" type="text" placeholder="Insira sua cidade" />
              <Textarea secondStyle label="Sobre" name="about" placeholder="Escreva sobre você." />
              <Button tagType="button" type="submit">Salvar</Button>
            </Form>
          )}
        </Formik>
      </Content>
    </DefaultLayout>
  );
}