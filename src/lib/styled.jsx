import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const Global = createGlobalStyle`
  ${normalize}

  body {
    // COLORS
    --main-color: hsl(0, 0%, 100%);
    --d1: linear-gradient(248.66deg, #8C6BAE 0%, #FF9696 100%);
    --d2: linear-gradient(248.66deg, #91BEF3 0%, #EEAECA 100%);
    --d3: linear-gradient(248.66deg, #7673DC 0%, #A8C8ED 100%);
    --n1: linear-gradient(248.66deg, #8C6EAB 0%, #48355B 100%);
    --n2: linear-gradient(248.66deg, #91BEF3 0%, #48355B 100%);
    --n3: linear-gradient(248.66deg, #8C6BAE 0%, #AAC0FF 100%);
    // MAIN
    --deg: 100 164px/197px Inter;
    --deg-par: 400 32px/38px Inter;
    --day: 300 36px/43px Inter;
    --time: 300 24px/29px Inter;
    --card: 400 24px/30px Overpass;
    --params: 400 22px/28px Overpass;
    // ASIDE
    --search: 300 32px/38px Inter;
    --clock-aq-uvi: 300 28px/34px Inter;
    --clock-upper-time: 400 32px/39px Inter;
    --clock-bottom-time: 400 29px/35px Inter;
    --clock-am-pm: 400 18px/22px Inter;
    // ALL
    --letter-spacing: 0em;





    height: 100vh;
    width: 100vw;
    background: var(--n1);
    color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    border: 2px solid pink; // TODO: УДАЛИТЬ ПОТОМ
    border-radius: 0.2rem; // TODO: УДАЛИТЬ ПОТОМ

    width: 1440px;
    height: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`

export default Global
