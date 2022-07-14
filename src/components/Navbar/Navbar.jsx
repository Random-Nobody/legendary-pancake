import { Wrapper, Left, Right, Logo } from './Navbar.styles';
import 'material-icons/iconfont/material-icons.css';

import Spacer from 'components/Spacer';
import Userinfo from 'components/Userinfo/Userinfo';

export default function Navbar() {
  return (
    <Wrapper>
      <Left>
        <Logo>
          <img src="/logo/logo192.png" alt='logo' />
          <Spacer w='5px' />
          ATLAS CORP
        </Logo>
        <Spacer w='5px' />
      </Left>
      <Right>
        <Userinfo />
      </Right>
    </Wrapper>
  )
}
