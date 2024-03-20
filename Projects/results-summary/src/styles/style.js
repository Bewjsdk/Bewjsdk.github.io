import styled from "styled-components";

// Primary Colors
const PRIMARY_COLORS = {
  lightRed: 'hsl(0, 100%, 67%)',
  orangeYellow: 'hsl(39, 100%, 56%)',
  greenTeal: 'hsl(166, 100%, 37%)',
  cobaltBlue: 'hsl(234, 85%, 45%)',
};

// Gradients Colors
const GRADIENTS_COLORS = {
  lightSlateBlue_background: 'hsl(252, 100%, 67%)',
  lightRoyalBlue_background: 'hsl(241, 81%, 54%)',
  violetBlue_circle: 'hsla(256, 72%, 46%, 1)',
  persianBlue_circle: 'hsla(241, 72%, 46%, 0)',
};

// Neutral Colors
const NEUTRAL_COLORS = {
  white: 'hsl(0, 0%, 100%)',
  paleBlue: 'hsl(221, 100%, 96%)',
  lightLavender: 'hsl(241, 100%, 89%)',
  darkGrayBlue: 'hsl(224, 30%, 27%)',
};

export const Button = styled.button`
  color: ${PRIMARY_COLORS.lightRed};
`