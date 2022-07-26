import { ContainerHeader, IconHeader, ContentHeader, UserHeader, FlexBox } from "./style";
import HomeIcon from '../../assets/icons/casa.svg';
import MessageIcon from '../../assets/icons/mensagens.svg';
import UserImage from '../../assets/usuario.png';
import { Link } from "react-router-dom";

interface HeaderProps {
  logged?: boolean;
}

export function Header({ logged }: HeaderProps) {
  return (
    <ContainerHeader> 
      <FlexBox>
        <ContentHeader>
          <Link to={'/home'}>
            <IconHeader src={HomeIcon} alt="home icon" />
          </Link>
          <Link to={'#'}>
            <IconHeader src={MessageIcon} alt="message icon" />
          </Link>
        </ContentHeader>
        {logged && (<Link to={'#'}><UserHeader src={UserImage} alt="foto de usuário" /></Link>)}
      </FlexBox>
    </ContainerHeader>
  );
}