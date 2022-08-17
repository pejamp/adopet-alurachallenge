import { CardContainer, CardImage, CardInfo, CardLink, CardText, CardTitle } from "./style";
import { Link } from "react-router-dom";

type PetProps = {
  image: string;
  name: string;
  age: string;
  size: string;
  features: string;
  city: string;
  contact: string;
}

interface PetSourceProps {
  source: PetProps;
}

export function PetCard(props: PetSourceProps) {
  return (
    <CardContainer>
      <CardImage src={props.source.image} alt={props.source.name} />

      <CardInfo>
        <CardTitle>{props.source.name}</CardTitle>

        <CardText>{props.source.age}</CardText>
        <CardText>{props.source.size}</CardText>
        <CardText space="bottom30">{props.source.features}</CardText>

        <CardText size="small">{props.source.city}</CardText>
        <Link to={'/contact'} style={{ textDecorationLine: 'none' }}><CardLink href={props.source.contact}>Falar com responsável</CardLink></Link>
      </CardInfo>
    </CardContainer>
  );
}



