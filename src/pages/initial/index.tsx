import { DefaultLayout } from "../../components/DefaultLayout";
import { ContentInitial, FlexBox, IconInitial, TextInitial, TitleInitial } from "./style";
import LogoIcon from "../../assets/logos/full-logo-v1.svg";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect } from "react";

export function Initial() {
  const [dataForm] = useLocalStorage('userFormData', '');
  const navigate = useNavigate();

  useEffect(() => {
    if(dataForm.email) {
      navigate('/home');
    }
  }, []);
  
  return (
    <DefaultLayout>
      <ContentInitial>
        <IconInitial src={LogoIcon} alt="Logo Adopet" />
        <FlexBox>
          <TitleInitial>Boas-vindas!</TitleInitial>
          <TextInitial>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</TextInitial>
        </FlexBox>
        <FlexBox>
          <Link to={'/login'} style={{ textDecorationLine: 'none' }}><Button tagType="link">Já tenho conta</Button></Link>
          <Link to={'/signup'} style={{ textDecorationLine: 'none' }}><Button tagType="link">Quero me cadastrar</Button></Link>
        </FlexBox>
      </ContentInitial>
    </DefaultLayout>
  );
}