import { Wrapper, Userinfo } from "./UserCard.styles";
import { useContext } from 'react';
import AppContext from 'App.context';
import Spacer from "components/Spacer";

export default function UserCard() {
  const [{ user },] = useContext(AppContext);
  return <Wrapper>
    <img src={user.profilePic} alt="profile pic" />
    <Spacer w='15px' />
    <Userinfo>
      <i>Welcome back:</i>
      <p>{user.name}</p>
      <b>Balance: ₼{user.balance}</b>
    </Userinfo>
  </Wrapper>
}
