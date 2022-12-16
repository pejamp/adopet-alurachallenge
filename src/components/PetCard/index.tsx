import { CardContainer, CardImage, CardInfo, CardLink, CardText, CardTitle } from "./style";
import { Link } from "react-router-dom";
import { PetProps } from "../../types/pet-type";

interface PetSourceProps {
  source: PetProps;
}

export function PetCard({ source }: PetSourceProps) {
  return (
    <CardContainer>
      <CardImage src={source.image} alt={source.name} />

      <CardInfo>
        <CardTitle>{source.name}</CardTitle>

        <CardText>{source.age}</CardText>
        <CardText>{source.size}</CardText>
        <CardText space="bottom30">{source.features}</CardText>

        <CardText size="small">{source.city}</CardText>
        <Link to={'/contact'} style={{ textDecorationLine: 'none' }}><CardLink>Falar com responsável</CardLink></Link>
      </CardInfo>
    </CardContainer>
  );
}



