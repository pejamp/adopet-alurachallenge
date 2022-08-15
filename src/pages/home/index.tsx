import { useEffect, useState } from "react";
import axios from "axios";
import { DefaultLayout } from "../../components/DefaultLayout";
import { PetCard } from "../../components/PetCard";
import { CardList, ContentHome, TextHome } from "./style";

export function Home() {
  const [pets, setPets] = useState([] as any);
  const url = "/api/pets";

  function getPets() {

    axios.get(url)
      .then(response => setPets(response.data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getPets();
  }, []);

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