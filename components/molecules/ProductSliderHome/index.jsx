import { Box, Flex, Image, Button } from "@chakra-ui/react";
import { useState } from "react";

const ProductSliderHome = ({
  images,
  nameProduct,
  product,
  price,
  handleClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const { stock } = product;
  const colors = stock.map((item) => item.color.hex);

  return (
    <Box>
      <Box
        position="relative"
        width="290px"
        justifyContent="center"
        display="flex"
        cursor="pointer"
      >
        <Image
          src={images[currentImageIndex].url}
          alt={`Product Image ${currentImageIndex}`}
          w="263px"
          h="356px"
          objectFit="cover"
          bg="#fff"
          borderRadius="16px"
          onClick={handleClick}
        />
        <Flex
          position="absolute"
          top="45%"
          left={0}
          right={0}
          justifyContent="space-between"
          zIndex={2}
        >
          <Button
            onClick={handlePrevImage}
            background="transparent"
            border="none"
            outline="none"
            boxShadow="none"
            padding="4px"
            zIndex={2}
            sx={{
              "&:hover": {
                background: "transparent",
                border: "none",
                outline: "none",
              },
              "&:active": {
                background: "transparent",
                border: "none",
                outline: "none",
              },
              "&:focus": { boxShadow: "none", border: "none", outline: "none" },
              "&:focus-visible": {
                boxShadow: "none",
                border: "none",
                outline: "none",
              },
              "&::before": {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
            }}
          >
            {" "}
            <Image src={"/left.png"} width="30px" alt="" />
          </Button>
          <Button
            onClick={handleNextImage}
            background="transparent"
            border="none"
            outline="none"
            boxShadow="none"
            padding="4px"
            zIndex={2}
            sx={{
              "&:hover": {
                background: "transparent",
                border: "none",
                outline: "none",
              },
              "&:active": {
                background: "transparent",
                border: "none",
                outline: "none",
              },
              "&:focus": { boxShadow: "none", border: "none", outline: "none" },
              "&:focus-visible": {
                boxShadow: "none",
                border: "none",
                outline: "none",
              },
              "&::before": {
                border: "none",
                outline: "none",
                boxShadow: "none",
              },
            }}
          >
            {" "}
            <Image src={"/right.png"} width="30px" alt="" />
          </Button>
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        pl={8}
        pt={1}
        onClick={handleClick}
        cursor="pointer"
      >
        <Box
          color="#797B7A"
          fontFamily="Nunito"
          fontSize="20px"
          fontWeight="500"
        >
          {nameProduct}
        </Box>
        <Box color="#797B7A" fontFamily="Nunito" fontSize="14px">
          Del T0 al T6
        </Box>
        <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
          {colors?.map((color, index) => (
            <div
              key={index}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: color,
                borderRadius: "50%",
                border: "0px",
              }}
            ></div>
          ))}
        </div>
        <Box
          color="#797B7A"
          fontFamily="Nunito"
          fontWeight="700"
          fontSize="20px"
          mt={2}
        >
          {price}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSliderHome;
