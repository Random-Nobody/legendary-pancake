import styled from 'styled-components';

export default styled.button`
  height: 40px;
  font-size: 18px;
  padding-inline: 10px;
  border: none;
  cursor: pointer;

  font-family: ${p=>p.theme.font.header};
  background-color: ${p=>p.background??'transparent'};
  color: ${p=>p.color??'inherit'};

  position: relative;
  ${p=>p.theme.hoverEffect}
`;