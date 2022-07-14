import { Wrapper, DropdownWrapper } from './Dropdown.styles.js';

export default function Dropdown(props) {
  return (
    <Wrapper>
      {props.children}
      <DropdownWrapper position={props.position} offset={props.offset}>
        <props.content/>
      </DropdownWrapper>
    </Wrapper>
  )
}
