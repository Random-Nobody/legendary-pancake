import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import AppContext from 'App.context';
import { Wrapper, UserContentWrapper } from "./Userinfo.styles";
import Button from 'components/Button/Button';
import Spacer from 'components/Spacer';
import Dropdown from 'components/Dropdown/Dropdown';
import { Link } from 'react-router-dom';

import UserCard from 'components/UserCard/UserCard';

const UserContent = ()=><UserContentWrapper>
  <UserCard/>
  <Link to='/2'>2</Link>
  <Link to='/3'>3</Link>
  <Link to='/4'>4</Link>
  <Link to='/5'>5</Link>
</UserContentWrapper>

export default function Userinfo() {
  const theme = useContext(ThemeContext);
  const [{user},] = useContext(AppContext);
  return user === null ?
    <Wrapper>
      <Button >log in</Button>
      <Spacer w='5px' />
      <Button background={theme.secondary}>sign up</Button>
    </Wrapper> :
    <Wrapper>
      <Dropdown content={UserContent} position={'right'} offset={'-10px'}>
        <span className="material-icons">person</span>
      </Dropdown>
    </Wrapper>
    ;
}
