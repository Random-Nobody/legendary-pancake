import { Wrapper, Left, Right } from './Navbar.styles';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';

import Spacer from 'components/Spacer';
import Userinfo from 'components/Userinfo/Userinfo';

export default function Navbar() {
  return (
    <Wrapper>
      <Left>
        <Link to='/'>
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/cropped-atlas-3-2.png" alt='logo' />
          <Spacer w='5px' />
          ATLAS CORP
        </Link>
        <Spacer w='5px' />
      </Left>
      <Right>
        <Userinfo />
      </Right>
    </Wrapper>
  )
}
