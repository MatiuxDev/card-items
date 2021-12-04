import styled from 'styled-components';

interface isActive {
  isActive: boolean;
}
export const CardContainer = styled.div<isActive>`
width: 17rem;
border: 2px solid ${(props) => (props.isActive ? '#8be6da' : '#000')};} ;
border-radius: 10px;
margin: 15px 0;
padding: 20px;
display: grid;
grid-template-columns: 85% 15%;
cursor: pointer;
`;

export const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 1.2em;
  margin: 0;
`;
export const CardText = styled.p`
  font-weight: 300;
  color: #abb2b3;
  font-size: 1em;
  line-height: 20px;
`;

export const CardTime = styled.p`
  font-weight: 400;
  font-size: 0.8em;
  margin: 0;
`;

export const CardStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardStatusIconCheck = styled.span<isActive>`
  background-color: ${props => props.isActive ? '#04c4ad' : ''};};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.8em;
  align-self: self-end;

  &:before {
    content: ${props => props.isActive ? '"✓"' : ''};
    color: #fff;
    font-size: 0.8em;
    padding: 0.5em;
  }
`;
export const CardStatusBadge = styled.span`
  border: 1px solid #04c4ad;
  background-color: #eaf5ff;
  color: #7ba0e0;
  padding: 2px 5px;
  text-transform: uppercase;
  font-size: 11px;
  text-align: center;
  border-radius: 2px;
`;
