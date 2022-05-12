import styled from 'styled-components';

const InfoLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.23);

  font-family: 'Inter';
  font-style: italic;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  cursor: pointer;
`;

const Line = styled.div`
  border: transparent;
  border-bottom: 0.6px solid #fff;
  width: 100%;
  max-width: 419px;
`;

export { InfoLogo, Line };
