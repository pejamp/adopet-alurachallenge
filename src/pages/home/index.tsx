import { useEffect, useState } from "react";
import axios from "axios";
import { DefaultLayout } from "../../components/DefaultLayout";
import { PetCard } from "../../components/PetCard";
import { CardList, ContentHome, TextHome } from "./style";
import { supabase } from "../../api/supabase";
import { PetProps } from "../../types/pet-type";
import { Loading } from "../../components/Loading";

export function Home() {
  const [pets, setPets] = useState([] as any);
  const [isLoading, setIsLoading] = useState(false);

  async function getPets() {
    const { data, error } = await supabase.from('pets').select('*');
    console.log(error);
    if (error) {
      setIsLoading(true);
    }
    
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
          { !isLoading ? pets.map((pet: PetProps) => (
            <PetCard key={pet.id} source={pet} />
          )) : 
            <Loading />
          }
        </CardList>
      </ContentHome>
    </DefaultLayout>
  );
}