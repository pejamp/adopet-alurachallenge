import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container, Content } from "./style";

interface DefaultLayoutProps {
  children?: any
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Container>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Container>
  );
}