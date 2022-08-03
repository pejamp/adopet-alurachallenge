import { useField, ErrorMessage } from "formik";
import { InputHTMLAttributes } from "react";
import { ContainerInput, CustomInput, HideButton, HideIcon, InputBox, Label } from "./style";
import PasswordIcon from '../../assets/icons/password.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  secondStyle?: boolean;
}

export function Input({ label, secondStyle, ...props }: InputProps) {
  // @ts-ignore
  const [field, meta] = useField(props); 

  return (
    <ContainerInput secondStyle={secondStyle}>
      <Label secondStyle={secondStyle} htmlFor={field.name}>{label}</Label>
      <InputBox secondStyle={secondStyle}>
        <CustomInput
          {...field}
          {...props}
          autoComplete="off"
          secondStyle={secondStyle}
        />
        {props.type === "password" && (<HideButton><HideIcon src={PasswordIcon} alt="show/hide icon" /></HideButton>)}
      </InputBox>
      <ErrorMessage component="div" name={field.name} className='error' />
    </ContainerInput>
  );
}