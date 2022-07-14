import styled from 'styled-components';

export default styled.div`
  height: ${p => p.h ?? ''};
  width: ${p => p.w ?? ''};
  ${p => p.line ? `border-bottom: 1px ${p.line} solid;` : ''}
`;