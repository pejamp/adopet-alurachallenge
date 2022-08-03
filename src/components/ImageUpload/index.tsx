import { useField, ErrorMessage } from "formik";
import { InputHTMLAttributes, useRef, useState } from "react";
import { ContainerInput, CustomImg, CustomInput, ImageBox, InputBox, Label, SignText } from "./style";
import UserImage from '../../assets/usuario.png';

interface InputProps {
  name?: string;
  label: string;
  file: any;
  imageRef?: any;
  inputRef?: any;
  secondStyle?: boolean;
}

export function ImageUpload({ label, file, ...props }: InputProps) {
  // @ts-ignore
  const [field, meta] = useField(props); 
  const [preview, setPreview] = useState(UserImage);
  const reader = new FileReader();

  return (
    <ContainerInput>
      <Label htmlFor={field.name}>{label}</Label>
      <InputBox>
        <ImageBox onClick={() => props.inputRef.current.click()}>
          <CustomImg src={UserImage || preview} alt="preview" ref={props.imageRef} />
        </ImageBox>
        <SignText>Clique na foto para editar</SignText>
      </InputBox>
      <ErrorMessage component="div" name={field.name} className='error' />
    </ContainerInput>
  );
}