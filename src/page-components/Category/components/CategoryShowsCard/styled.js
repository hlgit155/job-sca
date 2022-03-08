import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { Card } from 'rebass';
import spacing from 'styling/spacing';
import screen from 'styling/screen';

export const StyledCategoryShowsCard = styled(Flex)`
  padding: ${spacing.m} 0;
  border: 1px solid transparent;
  transition: .3s ease;

  &:hover{
    border-color: #838383;
    border-radius: 10px;
  }
`;

export const StyledRebass_Card = styled(Card)`
  width: 100%;
  padding: ${spacing.s};

  ${screen.s_mobile} {
    text-align: center;
  }
`;

export const Styled_ImageFrame = styled.div`
  width: 100%;
  text-align: center;
`;
