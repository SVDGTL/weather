import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;

  height: 12.5rem;
  width: 7rem;

  padding: 1rem;
  border-radius: 0.625rem;
  border: 1px solid #a8a8a8;

  background: rgba(255, 255, 255, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  filter: drop-shadow(-2px 2.26px 0.75px rgba(0, 0, 0, 0.15));
`;

const Text = styled.p`
  margin: 0;
  padding: 0;

  font-family: Overpass;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`;

const DemoIcon = () => {
  return (
    <svg
      width="111"
      height="87"
      viewBox="0 0 111 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.67" filter="url(#filter0_f_240_2608)">
        <path
          d="M67.0015 28.5273C73.681 33.4772 89.356 38.7259 83.3278 44.2106C77.2996 49.6952 42.8437 65.3626 28.4973 59.3066C21.8178 54.3568 34.4817 38.419 40.5099 32.9343C46.5381 27.4497 60.322 23.5775 67.0015 28.5273Z"
          fill="url(#paint0_linear_240_2608)"
          fill-opacity="0.3"
        />
      </g>
      <g filter="url(#filter1_ii_240_2608)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M56.6642 49.9033V49.9037H41.4343C36.074 49.9037 31.7286 45.5584 31.7286 40.1981C31.7286 34.8378 36.074 30.4924 41.4343 30.4924H44.1964C46.7364 30.4924 49.0989 31.252 51.0694 32.5563C53.8604 26.25 60.1728 21.85 67.5128 21.85H71.4592C79.2059 21.85 85.4858 28.1299 85.4858 35.8766C85.4858 43.6233 79.2059 49.9033 71.4592 49.9033H56.6642Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_240_2608"
          x="0.986399"
          y="0.632517"
          width="109.311"
          height="85.6602"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="12.8083"
            result="effect1_foregroundBlur_240_2608"
          />
        </filter>
        <filter
          id="filter1_ii_240_2608"
          x="21.482"
          y="13.3111"
          width="68.5579"
          height="42.8545"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4.55407" dy="-8.53888" />
          <feGaussianBlur stdDeviation="8.53888" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_240_2608"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-10.2467" dy="6.26184" />
          <feGaussianBlur stdDeviation="8.53888" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_240_2608"
            result="effect2_innerShadow_240_2608"
          />
        </filter>
        <linearGradient
          id="paint0_linear_240_2608"
          x1="35.591"
          y1="61.7318"
          x2="66.1571"
          y2="19.9554"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#254659" />
          <stop offset="1" stop-color="#023553" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { DemoIcon, Container, Text };
