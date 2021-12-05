import { useState, MouseEvent } from 'react';
import { Container } from './ContainerStyles';
import Card from '../Card/Card';

interface infoCard {
  id: number;
  title: string;
  description: string;
  from: string;
  to: string;
}

const infoCards: Array<infoCard> = [
  {
    id: 1,
    title: 'Main Office 1',
    description: '123 Main Street, Anytown, Puerto Rico',
    from: '3:00 AM',
    to: '7:00 PM',
  },
  {
    id: 2,
    title: 'Main Office 2',
    description: '123 Main Street, Anytown, USA',
    from: '9:00 AM',
    to: '8:00 PM',
  },
  {
    id: 3,
    title: 'Main Office 3',
    description: '123 Main Street, Anytown, Canada',
    from: '12:00 AM',
    to: '5:00 PM',
  },
];
function ContainerComponent() {
  const [selectedCard, setSelectedCard] = useState<infoCard | null>(null);
  const selectCardAndSendToState = (
    e: MouseEvent<HTMLDivElement>,
    card: infoCard
  ) => {
    e.preventDefault();
    setSelectedCard(card);
  };
  return (
    <>
      <Container>
        
        <h1>{selectedCard ? 'Card Selected' : 'No Card Selected'}</h1>
        <p>{selectedCard?.title}</p>
        <p>{selectedCard?.description}</p>
        <p>{selectedCard?.from}</p>
        <p>{selectedCard?.to}</p>
        {infoCards.map((card, index) => (
          <Card
            key={index}
            {...card}
            selectCard={(e, card) => selectCardAndSendToState(e, card)}
            activeCard={selectedCard?.id}
          />
        ))}
      </Container>
    </>
  );
}

export default ContainerComponent;
