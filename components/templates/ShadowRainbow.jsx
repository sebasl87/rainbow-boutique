import { useEffect, useRef, useState } from "react";

const ShadowRainbow = ({ children }) => {
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
        card.style.setProperty("--active", 1);
      } else {
        card.style.setProperty("--active", config.opacity);
      }

      const cardCenter = [
        cardBounds.left + cardBounds.width * 0.5,
        cardBounds.top + cardBounds.height * 0.5,
      ];

      let angle =
        (Math.atan2(
          event?.clientY - cardCenter[1],
          event?.clientX - cardCenter[0]
        ) *
          180) /
        Math.PI;
      angle = angle < 0 ? angle + 360 : angle;

      card.style.setProperty("--start", angle + 90);
    }
  };

  const handleMouseMove = (event) => {
    updateCards(event);
  };

  useEffect(() => {
    // Initial setup
    setCards(cardRefs.current);
    containerRef.current.style.setProperty("--gap", config.gap);
    containerRef.current.style.setProperty("--blur", config.blur);
    containerRef.current.style.setProperty("--spread", config.spread);
    containerRef.current.style.setProperty(
      "--direction",
      config.vertical ? "column" : "row"
    );

    // Event listeners
    document.body.addEventListener("pointermove", handleMouseMove);

    // Cleanup
    return () => {
      document.body.removeEventListener("pointermove", handleMouseMove);
    };
  }, [config, cards]);

  return (
    <>
      <div
        className="container"
        ref={containerRef}
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: config.vertical ? "column" : "row",
          gap: `${config.gap}px`,
          margin: "0 auto",
          justifyContent: "center",
          placeItems: "center",
          position: "relative",
          touchAction: "none",
          width: "100%",
          background: "snow",
        }}
      >
        <article
          ref={(el) => (cardRefs.current[0] = el)}
          className="card"
          style={{
            backgroundColor: "#fff",
            maxWidth: "100%",
            padding: 4,
            margin: 0,
            // background: "none"
          }}
        >
          <div className="glows"></div>
          {children}
        </article>
      </div>
    </>
  );
};

export default ShadowRainbow;
