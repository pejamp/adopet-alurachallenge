import { DefaultLayout } from "../../components/DefaultLayout";
import { PetCard } from "../../components/PetCard";
import { CardList, ContentHome, TextHome } from "./style";

import { pets } from '../../../db.json';

export function Home() {

  return (
    <DefaultLayout profileIcon={true}>
      <ContentHome>
        <TextHome>Olá! Veja os amigos disponíveis para adoção!</TextHome>
        <CardList>
          {pets.map((pet: any) => (
            <PetCard key={Math.random()} source={pet} />
          ))}
        </CardList>
      </ContentHome>
    </DefaultLayout>
  );
}