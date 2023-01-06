import { useEffect, useState } from "react";
import { DefaultLayout } from "../../components/DefaultLayout";
import { PetCard } from "../../components/PetCard";
import { CardList, ContentHome, TextHome } from "./style";
import { supabase } from "../../api/supabase";
import { PetProps } from "../../types/pet-type";
import { Loading } from "../../components/Loading";

export function Home() {
  const [pets, setPets] = useState([] as any);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function getPets() {
    setIsLoading(true);

    const { data, error } = await supabase.from('pets').select('*');
   
    if (!error) {
      setPets(data);
      setIsLoading(false);
    } else {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPets();
  }, []);
  
  return (
    <DefaultLayout profileIcon={true}>
      <ContentHome>
        <TextHome>Olá! Veja os amigos disponíveis para adoção!</TextHome>
        <CardList>
          {errorMessage && <div>{errorMessage}</div>}
          {isLoading ? <Loading /> 
            : 
            pets.map((pet: PetProps) => (
              <PetCard key={pet.id} source={pet} />
            ))
          }
        </CardList>
      </ContentHome>
    </DefaultLayout>
  );
}

