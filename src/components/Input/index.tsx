import { useField, ErrorMessage } from "formik";
import { InputHTMLAttributes, useState } from "react";
import { ContainerInput, CustomInput, HideButton, HideIcon, InputBox, Label } from "./style";
import PasswordIcon from '../../assets/icons/password.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  secondStyle?: boolean;
}

export function Input({ label, secondStyle, ...props }: InputProps) {
  // @ts-ignore
  const [field, meta] = useField(props); 
  const [passwordShown, setPasswordShown] = useState('password');

  const handleTogglePassword = (event: any) => {
    event.preventDefault();

    if (passwordShown === 'password') {
      setPasswordShown('text');
    } else {
      setPasswordShown('password');
    }
  }

  return (
    <ContainerInput secondStyle={secondStyle}>
      <Label secondStyle={secondStyle} htmlFor={field.name}>{label}</Label>
      <InputBox secondStyle={secondStyle}>
        <CustomInput
          {...field}
          {...props}
          type={props.type === "password" ? passwordShown : 'text'}
          autoComplete="off"
          secondStyle={secondStyle}
        />
        {props.type === "password" && (<HideButton onClick={handleTogglePassword}><HideIcon src={PasswordIcon} alt="show/hide icon" /></HideButton>)}
      </InputBox>
      <ErrorMessage component="div" name={field.name} className='error' />
    </ContainerInput>
  );
}