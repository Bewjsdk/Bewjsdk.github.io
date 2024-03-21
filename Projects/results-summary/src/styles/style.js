import styled from "styled-components";
/* 
  ** Variables for all colors and mobile breakpoints**
*/

// Primary Colors
const PRIMARY_COLORS = {
  lightRed: 'hsl(0, 100%, 67%)',
  orangeYellow: 'hsl(39, 100%, 56%)',
  greenTeal: 'hsl(166, 100%, 37%)',
  cobaltBlue: 'hsl(234, 85%, 45%)',
};

// Gradients Colors
const GRADIENTS_COLORS = {
  lightSlateBlueBg: 'hsl(252, 100%, 67%)',
  lightRoyalBlueBg: 'hsl(241, 81%, 54%)',
  violetBlueCircle: 'hsla(256, 72%, 46%, 1)',
  persianBlueCircle: 'hsla(241, 72%, 46%, 0)',
};

// Neutral Colors
const NEUTRAL_COLORS = {
  white: 'hsl(0, 0%, 100%)',
  paleBlue: 'hsl(221, 100%, 96%)',
  lightLavender: 'hsl(241, 100%, 89%)',
  darkGrayBlue: 'hsl(224, 30%, 27%)',
};

// Mobile & Tablet Sizes
const MOBILE = "560px";


/* 
  ** Styled Components **
*/

// Main Container
export const Main = styled.main`
  background: ${NEUTRAL_COLORS.white};
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Responsive for mobile */
  @media screen and (max-width: ${MOBILE}){
   align-items: flex-start;
  }
`;

// Card Wrapper
export const CardMain = styled.div`
  display: flex;
  background: ${NEUTRAL_COLORS.white};
  border-radius: 1.5em;
  box-shadow: 0.28em 0.28em 1.7em ${NEUTRAL_COLORS.paleBlue};
  width: 33rem;
  margin-inline: 1rem;

  /* Styles element inside */
  h2 {
    font-size: 1rem;
  }

  /* Responsive for Mobile & Tablets */
  @media screen and (max-width: ${MOBILE}){
    flex-direction: column;
    border-radius: unset;
    margin: 0;
    min-height: 100dvh;
  }
`;

// Result Section
export const ResultSection = styled.div`
  background: linear-gradient(
    to top,
    ${GRADIENTS_COLORS.lightRoyalBlueBg} 30%, 
    ${GRADIENTS_COLORS.lightSlateBlueBg}
  );
  border-radius: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1.95em;
  padding-inline: 1.5em;
  flex: 50%;
  justify-content: space-between;

  /* Elements inside result */
  h2 {
    color: ${NEUTRAL_COLORS.lightLavender};
  }

  /* Score element style */
  .score {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    background: linear-gradient(
      to top, 
      ${GRADIENTS_COLORS.persianBlueCircle},  
      ${GRADIENTS_COLORS.violetBlueCircle}  
    );

    /* Average Score */
    &-average {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      /* Total Score */
      & + p {
        color: ${NEUTRAL_COLORS.lightLavender};
        font-weight: 600;
        font-size: 0.85rem;
        opacity: 0.6;
      }
    }

    /* Level Text */
    & + p {
      font-size: 1.7rem;
      font-weight: 600;
      /* Description Level Text */
      & + p {
        color: ${NEUTRAL_COLORS.lightLavender};
        font-size: 0.85rem;
        text-align: center;
      }
    }
  }

  /* Responsive for Mobile & Tablets */
  @media screen and (max-width: ${MOBILE}){
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`;

// Summary Section
export const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-block: 1.95em;
  padding-inline: 1.5em;
  row-gap: 1em;
  color: ${NEUTRAL_COLORS.darkGrayBlue};
  flex: 50%;

  /* Elements inside summary */
  .stat-summary {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
  }
`;

// Button Styled Component
export const Button = styled.button`
  font-family: inherit;
  border: none;
  border-radius: 2em;
  padding-block: 1em;
  background: ${NEUTRAL_COLORS.darkGrayBlue};
  cursor: pointer;  
  margin-block-start: 1em;
  /* button active state */
  &:hover {
    background: linear-gradient(
    to top,
    ${GRADIENTS_COLORS.lightRoyalBlueBg} 30%, 
    ${GRADIENTS_COLORS.lightSlateBlueBg}
  );
  }
`;

// Lists Styled component
export const ListItem = styled.li`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0.45em;
  border-radius: 0.5em;
  font-weight: 600;

  /* Elements inside Lists */
  /* Catagory p */
  p {
    display: flex;
    align-items: center;
    column-gap: 0.5em;
    z-index: 1;
    &:first-child > span  {
      color: ${({type}) => {
        switch(type) {
          case 'Reaction': return PRIMARY_COLORS.lightRed;
          case 'Memory': return PRIMARY_COLORS.orangeYellow;
          case 'Verbal': return PRIMARY_COLORS.greenTeal;
          case 'Visual': return PRIMARY_COLORS.cobaltBlue;
        }
      }};
    }
  }
  /* Score p */
  p:last-child {
    > span {
      opacity: 0.5;
    }
  }

  /* Type Condition Check */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    opacity: 0.1;

    background-color: ${({type}) => {
    switch(type) {
      case 'Reaction': return PRIMARY_COLORS.lightRed;
      case 'Memory': return PRIMARY_COLORS.orangeYellow;
      case 'Verbal': return PRIMARY_COLORS.greenTeal;
      case 'Visual': return PRIMARY_COLORS.cobaltBlue;
    }
  }};
  }
`;
