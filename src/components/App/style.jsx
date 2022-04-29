import styled from "styled-components";

const Main = styled.main`
  box-sizing: border-box;
  width: 864px;
  height: 100%;
  display: flex;
`;
const Aside = styled.aside`
  box-sizing: border-box;
  width: 576px;
  height: 100%;

  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export { Main, Aside };
