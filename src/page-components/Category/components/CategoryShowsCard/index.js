import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'rebass';

import Header from 'shared-components/Typography/Header';
import Paragraph from 'shared-components/Typography/Paragraph';
import { StyledCategoryShowsCard, StyledRebass_Card, Styled_ImageFrame } from './styled';

function CategoryShowsCard({ card }) {
  return (
    <StyledCategoryShowsCard>
      <StyledRebass_Card>

        <Styled_ImageFrame>
          <Image src={card.images.squareLarge.url} style={{ objectFit: "cover", marginBottom: "10px", borderRadius: "10px" }} />
        </Styled_ImageFrame>
        <Header as="h3" variant="s" text={card.name} linesToShow={1} mb="m" />
        <Paragraph text={card.description} variant="s" linesToShow={3} transparent />
        
      </StyledRebass_Card>
    </StyledCategoryShowsCard>
  );
}

CategoryShowsCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.shape({
      squareLarge: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
};

CategoryShowsCard.defaultProps = {
  card: {},
};

export default CategoryShowsCard;
