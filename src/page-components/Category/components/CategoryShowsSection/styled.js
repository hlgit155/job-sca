import styled from 'styled-components';
import { Box } from '@rebass/grid';
import spacing from 'styling/spacing';
import screen from 'styling/screen';

export const StyledCategoryShowsSection = styled(Box)`
   width: 100%;
   padding: ${spacing.m} 0;
`;

export const Styled_HeaderRow = styled.div`
  display: grid;
  grid-template-columns: auto max-content;
  width: 100%;
`;

export const StyledRebass_Box = styled(Box)`
  display: grid;
  grid-template-columns: repeat(5,auto);

  ${screen.s_mobile} {
    grid-template-columns: repeat(1,1fr);
  }

  ${screen.mobile} {
    grid-template-columns: repeat(2,2fr);
  }

  ${screen.tablet} {
    grid-template-columns: repeat(3,3fr);
  }

  ${screen.laptop} {
    grid-template-columns: repeat(4,4fr);
  }

  ${screen.desktop} {
    grid-template-columns: repeat(5,5fr);
  }
`;
