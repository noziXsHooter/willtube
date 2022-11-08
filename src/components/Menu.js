import styled from "styled-components";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu() {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
    </StyledMenu>
  );
}

function Logo() {
  return (
    <svg width="200px" height="200px" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(0.1, 0, 0, -0.1, -13.362208, 540.223694)" fill="#000000" stroke="none">
    <path d="M455 3260 c-38 -4 -81 -12 -95 -18 -38 -15 -79 -60 -90 -101 -31 -107 -30 -479 1 -586 25 -90 75 -114 268 -125 319 -20 759 -7 819 24 37 20 67 55 81 96 32 94 32 482 1 592 -15 52 -61 94 -117 108 -57 15 -761 23 -868 10z m432 -316 c81 -47 151 -89 155 -93 4 -4 -54 -42 -130 -86 -75 -43 -147 -85 -159 -93 l-23 -14 0 186 c0 102 2 186 4 186 3 0 71 -39 153 -86z" style={{fill: 'rgb(254, 0, 0)'}}/>
    <path d="M4060 2830 l0 -380 50 0 c45 0 50 3 56 25 l6 25 29 -24 c16 -13 42 -27 58 -31 38 -8 94 17 109 49 24 53 35 149 30 274 -6 154 -20 196 -74 218 -45 19 -79 12 -116 -24 l-28 -26 0 137 0 137 -60 0 -60 0 0 -380z m210 44 c16 -46 9 -289 -9 -321 -13 -25 -49 -31 -69 -11 -8 8 -12 61 -12 174 0 176 5 194 55 194 18 0 26 -8 35 -36z"/>
    <path d="M3340 3140 l0 -50 60 0 60 0 0 -320 0 -320 60 0 60 0 0 320 0 320 60 0 60 0 0 50 0 50 -180 0 -180 0 0 -50z"/>
    <path d="M2895 3158 c-3 -7 -4 -173 -3 -368 l3 -355 40 0 40 0 0 365 0 365 -38 3 c-24 2 -39 -1 -42 -10z"/>
    <path d="M3173 3164 c-10 -4 -13 -87 -13 -365 l0 -359 24 -6 c14 -3 33 -4 43 -2 17 3 18 23 18 368 l0 365 -30 2 c-16 1 -36 0 -42 -3z"/>
    <path d="M2614 3106 c-9 -39 -1 -60 28 -70 19 -7 35 -6 53 2 22 10 26 17 23 50 -3 37 -4 37 -50 40 -43 3 -48 1 -54 -22z"/>
    <path d="M4563 2994 c-37 -8 -80 -57 -93 -104 -7 -27 -10 -100 -8 -194 3 -136 5 -155 26 -187 27 -45 64 -61 137 -60 90 1 145 50 145 130 0 30 -1 31 -50 31 -48 0 -49 -1 -56 -35 -7 -41 -35 -61 -63 -46 -25 14 -31 32 -31 97 l0 54 100 0 100 0 0 100 c0 112 -16 169 -57 195 -25 17 -110 27 -150 19z m81 -96 c11 -15 16 -45 16 -85 l0 -63 -45 0 -45 0 0 63 c0 64 18 107 45 107 8 0 21 -10 29 -22z"/>
    <path d="M3662 2752 c3 -209 5 -241 21 -265 37 -58 115 -60 169 -6 16 16 31 29 34 29 2 0 4 -13 4 -30 0 -29 1 -30 50 -30 l50 0 -2 268 -3 267 -57 3 -58 3 0 -215 c0 -182 -2 -217 -16 -230 -20 -21 -60 -21 -68 0 -3 9 -6 112 -6 230 l0 214 -61 0 -60 0 3 -238z"/>
    <path d="M1726 2931 c-8 -12 151 -483 166 -493 17 -10 79 -10 95 0 7 4 26 55 43 112 17 58 40 136 51 174 11 38 24 65 29 60 4 -5 31 -83 59 -173 28 -91 56 -168 63 -173 17 -10 79 -10 96 0 18 12 174 484 163 495 -5 5 -24 7 -42 5 -39 -3 -33 9 -115 -250 -25 -82 -49 -148 -53 -148 -3 0 -33 86 -66 191 -32 104 -65 195 -71 200 -7 6 -27 9 -45 7 l-32 -3 -56 -190 c-32 -104 -59 -197 -62 -205 -3 -8 -34 73 -68 180 -35 107 -68 201 -73 208 -12 14 -74 17 -82 3z"/>
    <path d="M2625 2928 c-3 -7 -4 -121 -3 -253 l3 -240 40 0 40 0 0 250 0 250 -38 3 c-24 2 -39 -1 -42 -10z"/>
  </g>
</svg>
  )
}