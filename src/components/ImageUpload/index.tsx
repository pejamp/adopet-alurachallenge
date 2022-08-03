import { useField, ErrorMessage } from "formik";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { ContainerInput, CustomImg, CustomInput, ImageBox, InputBox, Label, SignText } from "./style";
import UserImage from '../../assets/usuario.png';

interface InputProps {
  name?: string;
  label: string;
  file: any;
  inputRef?: any;
  secondStyle?: boolean;
}

export function ImageUpload({ label, file, ...props }: InputProps) {
  // @ts-ignore
  const [field, meta] = useField(props); 
  const [preview, setPreview] = useState(UserImage);
  
  useEffect(() => {
    const reader = new FileReader();
    let isCancel = false;

    if (file) {
      reader.onload = (e: any) => {
        const { result } = e.target;

        if (result && !isCancel) {
          setPreview(result);
        }
      }
      reader.readAsDataURL(file);
    }

    return () => {
      isCancel = true;
      if (reader && reader.readyState === 1) {
        reader.abort();
      }
    }

  }, [file]);

  return (
    <ContainerInput>
      <Label htmlFor={field.name}>{label}</Label>
      <InputBox>
        <ImageBox onClick={() => props.inputRef.current.click()}>
          <CustomImg src={preview} alt="preview" />
        </ImageBox>
        <SignText>Clique na foto para editar</SignText>
      </InputBox>
      <ErrorMessage component="div" name={field.name} className='error' />
    </ContainerInput>
  );
}