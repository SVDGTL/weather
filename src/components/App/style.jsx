import styled from "styled-components";

const Main = styled.main`
  box-sizing: border-box;
  padding-inline: 4.75rem;
  padding-block: 3.875rem;
  width: 54rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Aside = styled.aside`
  box-sizing: border-box;
  width: 36rem;
  height: 100%;

  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export { Main, Aside };
