import { MouseEvent } from 'react';
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
  id: number;
  title: string;
  description: string;
  from: string;
  to: string;
  selectCard: (e: MouseEvent<HTMLDivElement>, card: any) => void;
  activeCard: undefined | number;
}
function Card(props: CardProps) {
  const { id, title, description, from, to, selectCard, activeCard } = props;
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    selectCard(e, { id, title, description, from, to });
  };
  return (
    <>
      <CardContainer
        isActive={id === activeCard ? true : false}
        onClick={(e) => handleClick(e)}
      >
        <div>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <CardTime>
            {from}
            <span> • </span>
            {to}
          </CardTime>
        </div>
        <CardStatus>
          <CardStatusIconCheck isActive={id === activeCard ? true : false} />
          <CardStatusBadge>Open</CardStatusBadge>
        </CardStatus>
      </CardContainer>
    </>
  );
}

export default Card;
