import { DefaultLayout } from "../../components/DefaultLayout";
import { ContentInitial, FlexBox, IconInitial, TextInitial, TitleInitial } from "./style";
import LogoIcon from "../../assets/logos/full-logo-v1.svg";
import { Button } from "../../components/Button";

export function Initial() {
  return (
    <DefaultLayout>
      <ContentInitial>
        <IconInitial src={LogoIcon} alt="Logo Adopet" />
        <FlexBox>
          <TitleInitial>Boas-vindas!</TitleInitial>
          <TextInitial>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</TextInitial>
        </FlexBox>
        <FlexBox>
          <Button tagType="link">Já tenho conta</Button>
          <Button tagType="link">Quero me cadastrar</Button>
        </FlexBox>
      </ContentInitial>
    </DefaultLayout>
  );
}