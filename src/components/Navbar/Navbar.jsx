import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import AppContext from 'App.context';
import { Wrapper, Left, Right, Logo } from './Navbar.styles';

import Dropdown from 'components/Dropdown/Dropdown';
import Button from 'components/Button/Button';
import Spacer from 'components/Spacer';

export default function Navbar() {
  const theme = useContext(ThemeContext);
  const [appState, setState] = useContext(AppContext);
  return (
    <Wrapper>
      <Left>
        <Logo>
          <img src="/logo/logo192.png" alt='logo' />
          <Spacer w='5px' />
          atlas corp
        </Logo>
        <Spacer w='5px' />
        <Dropdown />
      </Left>
      <Right>
        <Button >log in</Button>
        <Spacer w='5px' />
        <Button background={theme.secondary}>sign up</Button>
      </Right>
    </Wrapper>
  )
}
