import { Box } from "@chakra-ui/react";

export const LinkFooter = ({ buttonText, handleClick }) => {
  return (
    <Box
      onClick={handleClick}
      color="rainbowGreen"
      _hover={{ textDecoration: "underline" }}
      _active={{ color: "white" }}
      fontSize={{ base: "12px", md: "14px" }}
      fontWeight={400}
      cursor="pointer"
      textAlign={{ base: "center", md: "left" }}
      mb={{ base: "16px", md: "0px" }}
    >
      {buttonText}
    </Box>
  );
};

export default LinkFooter;
