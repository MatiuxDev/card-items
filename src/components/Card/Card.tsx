import { useState, MouseEvent } from 'react';
import {
  CardContainer,
  CardStatusIconCheck,
  CardTitle,
  CardText,
  CardTime,
  CardStatus,
  CardStatusBadge,
} from './CardStyles';

interface CardProps {
  title: string;
  description: string;
  from: string;
  to: string;
  selectCard: (e: MouseEvent<HTMLDivElement>, card: any) => void;
}
function Card(props: CardProps) {
  const { title, description, from, to, selectCard } = props;
  const [selected, setSelected] = useState(false);
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setSelected(!selected);
    selectCard(e, { title, description, from, to });
  };
  return (
    <CardContainer
      isActive={selected}
      onClick={(e) => handleClick(e)}
      onMouseOut={(e) => setSelected(!selected)}
    >
      <div>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardTime>
          {from}
          <span> * </span>
          {to}
        </CardTime>
      </div>
      <CardStatus>
        <CardStatusIconCheck isActive={selected} />
        <CardStatusBadge>Open</CardStatusBadge>
      </CardStatus>
    </CardContainer>
  );
}

export default Card;
