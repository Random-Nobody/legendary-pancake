import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import AppContext from 'App.context';
import { Wrapper, UserContentWrapper } from "./Userinfo.styles";
import Spacer from 'components/Spacer';
import Dropdown from 'components/Dropdown/Dropdown';
import { Link } from 'react-router-dom';

import UserCard from 'components/UserCard/UserCard';

const UserContent = () => {
  const theme = useContext(ThemeContext);
  return <UserContentWrapper>
    <UserCard />
    <Spacer h='5px' line={theme.primaryFaded} />
    <Spacer h='5px' />
    <Link to='/2'>My Profile</Link>
    <Link to='/3'>My Wallet</Link>
    <Link to='/4'>My Offers</Link>
    <Spacer h='5px' line={theme.primaryFaded} />
    <Spacer h='5px' />
    <Link to='/4'>Setting</Link>
    <button>Log out</button>
  </UserContentWrapper>
}

export default function Userinfo() {
  const theme = useContext(ThemeContext);
  const [{ user },] = useContext(AppContext);
  return user === null ?
    <Wrapper>
      <button >log in</button>
      <Spacer w='5px' />
      <button background={theme.secondary}>sign up</button>
    </Wrapper> :
    <Wrapper>
      <Dropdown content={UserContent} position={'right'} offset={'-10px'}>
        <span className="material-icons">person</span>
      </Dropdown>
    </Wrapper>
    ;
}
