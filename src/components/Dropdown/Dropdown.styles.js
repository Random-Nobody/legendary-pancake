import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0%{
    visibility: hidden;
    opacity: 0%;
    top: 0%;
    border-width: 0px;
    pointer-events: none;
  }
  1%{
    visibility: visible;
    opacity: 1%;
  }
  99%{
    opacity: 100%;
    top: 104%;
    border-width: 0px;
  }
  100%{
    border: 1px ${p=>p.theme.primaryFaded} solid;
    border-width: 1px;
    pointer-events: unset;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  :hover{
    >div{
      visibility: visible;
      animation: ${appear} .3s;
    }
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  visibility: hidden;
  border: 1px ${p=>p.theme.primaryFaded} solid;
  border-top: none;
  background-color: ${p => p.theme.surface};

  ${p => {
    switch (p.position) {
      case 'left':
        return `
          left: ${p.offset ?? 0};
        `;
      case 'right':
        return `
          right: ${p.offset ?? 0};
        `;
      case 'center':
        return `
          left: 50%;
          transform: translateX(-50%);
        `;
      // TODO: some sort of smart alignment here
      default: return '';
    }
  }}
`;
