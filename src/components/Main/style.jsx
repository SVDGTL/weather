import styled from 'styled-components';

export const Container = styled.main`
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  max-width: 864px;
  min-height: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //justify-content: space-between;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Cards = styled.ul`
  display: flex;
  gap: 54px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-width: 766px;
  overflow: hidden;
`;
export const SwitchButton = styled.div``;
