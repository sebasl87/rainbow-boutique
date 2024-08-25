import { useEffect, useRef, useState } from 'react';
import { ArticleContainer } from '../../molecules';
import { Button, useBoolean } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import { totalProducts } from '../../../jotai/atoms';

const CardContainer = () => {
  const config = {
    proximity: 40,
    spread: 80,
    blur: 20,
    gap: 24,
    vertical: false,
    opacity: 0,
  };

  const [cards, setCards] = useState([]);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [showAllProducts, setShowAllProducts] = useBoolean(false);

  const products = useAtomValue(totalProducts);
  const updateCards = (event) => {
    for (const card of cards) {
      const cardBounds = card.getBoundingClientRect();

      if (
        event?.clientX > cardBounds.left - config.proximity &&
        event?.clientX <
          cardBounds.left + cardBounds.width + config.proximity &&
        event?.clientY > cardBounds.top - config.proximity &&
        event?.clientY < cardBounds.top + cardBounds.height + config.proximity
      ) {
        card.style.setProperty('--active', 1);
      } else {
        card.style.setProperty('--active', config.opacity);
      }

      const cardCenter = [
        cardBounds.left + cardBounds.width * 0.5,
        cardBounds.top + cardBounds.height * 0.5,
      ];

      let angle =
        (Math.atan2(
          event?.clientY - cardCenter[1],
          event?.clientX - cardCenter[0],
        ) *
          180) /
        Math.PI;
      angle = angle < 0 ? angle + 360 : angle;

      card.style.setProperty('--start', angle + 90);
    }
  };

  const handleMouseMove = (event) => {
    updateCards(event);
  };

  useEffect(() => {
    // Initial setup
    setCards(cardRefs.current);
    containerRef.current.style.setProperty('--gap', config.gap);
    containerRef.current.style.setProperty('--blur', config.blur);
    containerRef.current.style.setProperty('--spread', config.spread);
    containerRef.current.style.setProperty(
      '--direction',
      config.vertical ? 'column' : 'row',
    );

    // Event listeners
    document.body.addEventListener('pointermove', handleMouseMove);

    // Cleanup
    return () => {
      document.body.removeEventListener('pointermove', handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, cards]);

  return (
    <>
      <div
        className="container"
        ref={containerRef}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: config.vertical ? 'column' : 'row',
          gap: `${config.gap}px`,
          margin: '0 auto',
          justifyContent: 'center',
          placeItems: 'center',
          position: 'relative',
          padding: '2rem 0 2rem 0',
          touchAction: 'none',
          width: '100%',
          background: 'snow',
        }}
      >
        {showAllProducts
          ? products?.map((p, index) => (
              <ArticleContainer
                key={index}
                index={index}
                cardRefs={cardRefs}
                product={p}
              />
            ))
          : products
              ?.slice(0, 8)
              .map((p, index) => (
                <ArticleContainer
                  key={index}
                  index={index}
                  cardRefs={cardRefs}
                  product={p}
                />
              ))}
      </div>
      {showAllProducts ? null : (
        <Box display="flex" width="100%" justifyContent="center" bg="#FFFAFA">
          <Button
            rightIcon={<ArrowForwardIcon />}
            size="md"
            variant="outline"
            bg="white"
            color="#777978"
            border="1px solid #C2CEC9"
            _hover={{
              color: 'white',
              background: '#777978',
              border: 0,
              opacity: 0.8,
            }}
            mb={6}
            onClick={() => setShowAllProducts.on()}
          >
            Ver todos
          </Button>
        </Box>
      )}
    </>
  );
};

export default CardContainer;
