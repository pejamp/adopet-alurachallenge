import { useField, ErrorMessage } from "formik";
import { TextareaHTMLAttributes } from "react";
import { ContainerTextarea, CustomTextarea, Label, TextareaBox } from "./style";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  secondStyle?: boolean;
}

export function Textarea({ label, secondStyle, ...props }: TextareaProps) {
  // @ts-ignore
  const [field, meta] = useField(props); 

  return (
    <ContainerTextarea secondStyle={secondStyle}>
      <Label secondStyle={secondStyle} htmlFor={field.name}>{label}</Label>
      <TextareaBox secondStyle={secondStyle}>
        <CustomTextarea
          {...field}
          {...props}
          autoComplete="off"
          secondStyle={secondStyle}
        />
      </TextareaBox>
      <ErrorMessage component="div" name={field.name} className='error' />
    </ContainerTextarea>
  );
}