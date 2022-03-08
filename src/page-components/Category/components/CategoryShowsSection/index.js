import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';

import Header from 'shared-components/Typography/Header';
import SortButton from 'shared-components/SortButton';
import { StyledCategoryShowsSection, Styled_HeaderRow, StyledRebass_Box } from './styled';

import CategoryShowsCard from '../CategoryShowsCard';

function CategoryShowsSecton({ shows }) {
  
  const router = useRouter();
  const podcastGroup = [...shows];
  
  const sortAsc = (a, b) => a.name > b.name ? 1 : -1;
  const sortDes = (a, b) => a.name < b.name ? 1 : -1;
  const mapCard = (card => {
    return(
      <Link key={card.id} href={`${router.asPath}/${card.slug}`} >
        <a><CategoryShowsCard card={card} /></a>
      </Link>
    )
  });

  const [filtering, setFiltering] = useState();
  const onOptionClick = (clkKey) => setFiltering(clkKey);

  return (
    <StyledCategoryShowsSection>
      
      <Styled_HeaderRow>
        <Header as="h2" variant="l" text={`${shows.length} Podcasts`} linesToShow={1} mb="m" />
        <SortButton
          side='left'
          onOptionClick={clkKey => onOptionClick(clkKey)}
          options={[{key: "default", value: "Default"}, {key: "sorta-z", value: "Sort A-Z"}, {key: "sortz-a", value: "Sort Z-A"}]}
        />
      </Styled_HeaderRow>

      <StyledRebass_Box>
        {
          filtering === 'sorta-z' ? podcastGroup.sort(sortAsc).map(mapCard) :
          filtering === 'sortz-a' ? podcastGroup.sort(sortDes).map(mapCard) :
          filtering === 'default' ? shows.map(mapCard) :
          podcastGroup.map(mapCard)
        }
      </StyledRebass_Box>
    </StyledCategoryShowsSection>
  );
}

CategoryShowsSecton.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.shape({
      squareLarge: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  })),
};

CategoryShowsSecton.defaultProps = {
  shows: [],
};

export default CategoryShowsSecton;
