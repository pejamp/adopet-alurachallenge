import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { DefaultLayout } from "../../components/DefaultLayout";
import { Input } from "../../components/Input";
import { Content, Text } from "./style";
import { Textarea } from "../../components/Textarea";
import { ImageUpload } from "../../components/ImageUpload";
import { useRef, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function Profile() {
  const [dataForm, setDataForm] = useLocalStorage('userFormData', '');
  const [selectedFile, setSelectedFile] = useState();
  const imageUploader = useRef() as React.MutableRefObject<HTMLInputElement>;
  //const FILE_SIZE = 240 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png"
  ];
  const navigate = useNavigate();
  const validate = Yup.object({
    userImage: Yup.mixed(),
    fullName: Yup.string().min(3, 'Deve ter 3 caracteres ou mais').required('Nome é obrigatório'),
    phone: Yup.string().matches(/(\(?\d{2}\)?\s)?(\d{4,5}\d{4})/g, 'Número de telefone não válido').required('Telefone é obrigatório'),
    city: Yup.string().min(3, 'Deve ter pelo menos 3 caracteres').required('Cidade é obrigatório'),
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
            userImage: dataForm.userImage,
            fullName: dataForm.fullName,
            phone: dataForm.phone,
            city: dataForm.city,
            about: dataForm.about,
          }}
          validationSchema={validate}
          onSubmit={values => {
            setDataForm(values);
            navigate('/home');
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="form">
              <Text as={'h2'} profile>Perfil</Text>
              <ImageUpload 
                file={selectedFile}
                savedFile={dataForm.userImage}
                name="userImage" 
                label="Foto" 
                inputRef={imageUploader}
                onChange={(event: any) => {
                  const files =  event.target.files;
                  const file = files[0];
                  let reader = new FileReader();

                  reader.readAsDataURL(file);

                  reader.onload = (e: any) => {
                    setFieldValue("userImage", e.target.result);
                  }

                  setSelectedFile(file);
                }}
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