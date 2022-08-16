import { useField, ErrorMessage } from "formik";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { ContainerInput, CustomImg, CustomInput, ImageBox, InputBox, Label, SignText } from "./style";
import UserImage from '../../assets/usuario.png';

interface InputProps {
  name?: string;
  label: string;
  file: any;
  savedFile: any;
  inputRef?: any;
  secondStyle?: boolean;
  onChange(value: any): void | Promise<void>;
}

export function ImageUpload({ label, file, savedFile, onChange, ...props }: InputProps) {
  // @ts-ignore
  const [field, meta] = useField(props); 
  const [preview, setPreview] = useState(UserImage);
    
  useEffect(() => {
    let isCancel = false;
    let fileReader = new FileReader();

    if (file) {
      fileReader.onload = (e: any) => {
        const { result } = e.target;
        
        if (result && !isCancel) {
          setPreview(result);
        }
      }

      fileReader.readAsDataURL(file);
    }

    if (savedFile) {
      setPreview(savedFile);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }    

  }, [file, savedFile]);

  return (
    <ContainerInput>
      <Label htmlFor={field.name}>{label}</Label>
      <InputBox>
        <ImageBox onClick={() => props.inputRef.current.click()}>
          <CustomImg src={preview} alt="preview" />
        </ImageBox>
        <SignText>Clique na foto para editar</SignText>
        <CustomInput name={props.name} type="file" accept="image/*" ref={props.inputRef} onChange={onChange} />
      </InputBox>
      <ErrorMessage component="div" name={field.name} className='error' />
    </ContainerInput>
  );
}