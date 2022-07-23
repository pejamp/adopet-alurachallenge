import { ButtonBox, LinkBox } from "./style";

interface ButtonProps {
  children: any;
  tagType: 'button' | 'link';
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export function Button(props: ButtonProps) {
  return (
    <>
      {props.tagType === 'link' && (<LinkBox>{props.children}</LinkBox>)}
      {props.tagType === 'button' && (
        <ButtonBox type={props.type}>
          {props.children}
        </ButtonBox>
      )}
    </>
  );
}