import styled from 'styled-components';

const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  max-width: 576px;
  min-height: 900px;
  height: 100%;
  padding: 40px;

  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const ProgressContainer = styled.section`
  margin-top: 50px;
  min-height: 184px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 59px;
  width: 100%;
`;

const ClockContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0;
  margin: 74px 0 0 0;
  min-height: 325px;
`;

const InfoContainer = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {
  AsideContainer,
  SearchContainer,
  ProgressContainer,
  ClockContainer,
  InfoContainer,
};
