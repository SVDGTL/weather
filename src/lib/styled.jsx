import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const Global = createGlobalStyle`
  ${normalize}

  body {
    // COLORS
    --main-color: hsl(0, 0%, 100%);
    --no-active-color: #EBEBEB;
    --d1: linear-gradient(248.66deg, #8C6BAE 0%, #FF9696 100%);
    --d2: linear-gradient(248.66deg, #91BEF3 0%, #EEAECA 100%);
    --d3: linear-gradient(248.66deg, #7673DC 0%, #A8C8ED 100%);
    --n1: linear-gradient(248.66deg, #8C6EAB 0%, #48355B 100%);
    --n2: linear-gradient(248.66deg, #91BEF3 0%, #48355B 100%);
    --n3: linear-gradient(248.66deg, #8C6BAE 0%, #AAC0FF 100%);
    // MAIN
    --deg: 100 164px/134px Inter;
    --deg-par: 400 32px/38px Inter;
    --day-number: 400 48px/43px Inter;
    --day: 300 36px/43px Inter;
    --time: 300 24px/29px Inter;
    --card: 400 24px/30px Inter;
    --params: 400 22px/28px Inter;
    // ASIDE
    --search: 300 32px/38px Inter;
    --clock-aq-uvi: 400 28px/34px Inter;
    --clock-aq-uvi-small: 400 22px/27px Inter;
    --clock-upper-time: 400 32px/39px Inter;
    --clock-bottom-time: 400 29px/35px Inter;
    --clock-am-pm: 400 18px/22px Inter;

    // ALL
    --letter-spacing: 0em;

    //height: 100vh;
    //width: 100vw;
    background: var(--n1);
    background-repeat: no-repeat;
    background-size: contain;
    color: var(--main-color);
    max-width: 1440px;
    margin: 0 auto;
  }
  
  body {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  //#root {
  //  display: flex;
  //  justify-content: space-between;
  //  align-items: center;
  //  flex-direction: row;
  //  height: 100%;
  //  max-height: 900px;
  //  border-radius: 30px;
  //}
`;

export default Global;
