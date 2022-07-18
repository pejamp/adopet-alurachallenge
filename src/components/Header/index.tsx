import { ContainerHeader, IconHeader, ContentHeader } from "./style";
import homeIcon from '../../assets/icons/casa.svg';
import messageIcon from '../../assets/icons/mensagens.svg';

export function Header() {
  return (
    <ContainerHeader> 
      <ContentHeader>
        <IconHeader src={homeIcon} alt="home icon" />
        <IconHeader src={messageIcon} alt="message icon" />
      </ContentHeader>
    </ContainerHeader>
  );
}