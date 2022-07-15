import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import AppContext from 'App.context';
import { Wrapper, UserContentWrapper, Button } from "./Userinfo.styles";
import Spacer from 'components/Spacer';
import Dropdown from 'components/Dropdown/Dropdown';
import { Link } from 'react-router-dom';

import UserCard from 'components/UserCard/UserCard';

const UserContent = () => {
  const theme = useContext(ThemeContext);
  const [, setAppContext] = useContext(AppContext);

  const logout = () => setAppContext(cxt => ({ ...cxt, ...{ user: null } }));

  return <UserContentWrapper>
    <UserCard />
    <Spacer h='5px' line={theme.primaryFaded} />
    <Spacer h='5px' />
    <Link className='hover' to='/2'>My Profile</Link>
    <Link className='hover' to='/3'>My Wallet</Link>
    <Link className='hover' to='/4'>My Offers</Link>
    <Spacer h='5px' line={theme.primaryFaded} />
    <Spacer h='5px' />
    <Link className='hover' to='/4'>Setting</Link>
    <button onClick={logout}>Log out</button>
  </UserContentWrapper>
}

export default function Userinfo() {
  const theme = useContext(ThemeContext);
  const [{ user }, setAppContext] = useContext(AppContext);

  const mockLogIn = () => setAppContext(cxt => ({
    ...cxt, ...{
      user: {
        name: 'hello123',
        profilePic: '/placeholders/profile-example.jpeg',
        balance: 1355
      }
    }
  }));

  return user === null ?
    <Wrapper>
      <Button onClick={mockLogIn} >log in</Button>
      <Spacer w='5px' />
      <Button background={theme.secondary}>sign up</Button>
    </Wrapper> :
    <Wrapper>
      <Dropdown content={UserContent} position={'right'} offset={'-10px'}>
        <span style={{color: theme.primary}} className="material-icons">person</span>
      </Dropdown>
    </Wrapper>
    ;
}
