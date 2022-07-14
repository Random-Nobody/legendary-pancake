import styled from 'styled-components';

export default styled.button`
  font-size: 18px;
  padding: 7px;
  border: none;
  cursor: pointer;

  background-color: ${p=>p.background??'transparent'};
  color: ${p=>p.color??'inherit'};
`;