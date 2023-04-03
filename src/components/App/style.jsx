import styled from 'styled-components';

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const Root = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100%;
  //max-height: 900px;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;
// export default Loading;
