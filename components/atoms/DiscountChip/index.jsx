import { Box } from "@chakra-ui/react";

const DiscountChip = ({ discount }) => {
  return (
    <Box
      background="#FEEBCB"
      borderRadius="2px"
      color="#744210"
      fontSize={{
        base: 10,
        md: 12,
        lg: 12,
      }}
      fontWeight="700"
      px={{ base: 1, md: 1 }}
      display="flex"
      width="fit-content"
      justifyContent="center"
      alignItems="center"
    >
      {discount}% OFF
    </Box>
  );
};

export default DiscountChip;
