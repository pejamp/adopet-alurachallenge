import { useEffect, useState } from "react";
import axios from "axios";
import { DefaultLayout } from "../../components/DefaultLayout";
import { PetCard } from "../../components/PetCard";
import { CardList, ContentHome, TextHome } from "./style";
import { supabase } from "../../api/supabase";
import { PetProps } from "../../types/pet-type";

export function Home() {
  const [pets, setPets] = useState([] as any);

  async function getPets() {
    const { data, error } = await supabase.from('pets').select('*');
    setPets(data);
  }

  useEffect(() => {
    getPets();
  }, []);

  return (
    <DefaultLayout profileIcon={true}>
      <ContentHome>
        <TextHome>Olá! Veja os amigos disponíveis para adoção!</TextHome>
        <CardList>
          {pets.map((pet: PetProps) => (
            <PetCard key={pet.id} source={pet} />
          ))}
        </CardList>
      </ContentHome>
    </DefaultLayout>
  );
}