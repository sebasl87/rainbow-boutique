import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const borderAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const CategoryCardSmall = ({
  category,  
  bgColor,  
  handleClick,

}) => {
  return (
    <Box
      onClick={handleClick}
      w={{ base: "100%", md: "259px" }}
      h={{ base: "45px" }}
      background={bgColor}
      borderRadius="8px"      
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      boxShadow={{
        base: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        md: "none",
      }}
      position="relative"
      overflow="hidden"
      _hover={{
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "8px",
          border: "4px solid transparent",
          backgroundImage:
            "linear-gradient(90deg, #EBBEB3, #F8D588, #797B7A, #AEDBE8, #D7ECE8)",
          backgroundSize: "400% 100%",
          animation: `${borderAnimation} 3s linear infinite`,
          transition: "opacity 1s ease all",
          opacity: 1,
          zIndex: 1,          
        },
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "8px",
        border: "4px solid transparent",
        backgroundImage:
          "linear-gradient(90deg, #EBBEB3, #F8D588, #797B7A, #AEDBE8, #D7ECE8)",
        backgroundSize: "400% 100%",
        opacity: 0,
        transition: "opacity 1s ease all",
        zIndex: 1,        
      }}
    >
      <Box
        color="#fff"
        fontFamily="Nunito"
        fontWeight="700"
        fontSize="28px"        
        zIndex={2}
      >
        {category}
      </Box>
    </Box>
  );
};

export default CategoryCardSmall;
