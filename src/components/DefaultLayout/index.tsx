import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container, Content } from "./style";

interface DefaultLayoutProps {
  children?: any;
  profileIcon?: any;
}

export function DefaultLayout({ children, profileIcon }: DefaultLayoutProps) {
  return (
    <Container>
      <Header logged={profileIcon} />
      <Content>
        {children}
      </Content>
      <Footer />
    </Container>
  );
}