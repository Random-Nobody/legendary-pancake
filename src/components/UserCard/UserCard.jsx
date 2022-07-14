import { Wrapper } from "./UserCard.styles";
import { useContext } from 'react';
import AppContext from 'App.context';

export default function UserCard() {
  const [{user},] = useContext(AppContext);
  return (
    <Wrapper>
      
    </Wrapper>
  )
}
