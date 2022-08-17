import { ContainerHeader, IconHeader, ContentHeader, UserHeader, FlexBox, LogoHeader } from "./style";
import HomeIcon from '../../assets/icons/casa.svg';
import MessageIcon from '../../assets/icons/mensagens.svg';
import UserImage from '../../assets/usuario.png';
import LogoImage from '../../assets/logos/full-logo-v3.svg';
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";

interface HeaderProps {
  logged?: boolean;
}

export function Header({ logged }: HeaderProps) {
  const [dataForm] = useLocalStorage('userFormData', '');
  const [profileImage, setProfileImage] = useState(UserImage);

  useEffect(() => {
    const { userImage } = dataForm;

    if (dataForm) {
      setProfileImage(userImage);
    }
  }, [dataForm]);

  return (
    <ContainerHeader> 
      <FlexBox>
        <ContentHeader>
          <LogoHeader src={LogoImage} alt="logo da Adopet" />
          <Link to={'/home'}>
            <IconHeader src={HomeIcon} alt="home icon" />
          </Link>
          <Link to={'/contact'}>
            <IconHeader src={MessageIcon} alt="message icon" />
          </Link>
        </ContentHeader>
        {logged && (<Link to={'/profile'}><UserHeader src={profileImage} alt="foto de usuário" /></Link>)}
      </FlexBox>
    </ContainerHeader>
  );
}