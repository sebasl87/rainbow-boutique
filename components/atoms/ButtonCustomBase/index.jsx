import { Box, Button } from "@chakra-ui/react";

export const ButtonCustomBase = ({
  buttonText,
  handleClick,
  disabled,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <Box
          width={{ base: 24, md: 120, lg: 120 }}
          height={{ base: 8, md: 12, lg: 10 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Carregando...
        </Box>
      ) : (
        <Button
          isDisabled={disabled}
          onClick={handleClick}
          variant="solid"
          bg="danoneBlue"
          color="white"
          _disabled={{
            bg: "#EDF2F7",
            color: "#A0AEC0",
            cursor: "not-allowed",
            pointerEvents: "none",
          }}
          _hover={{ background: "#3182CE" }}
          _active={{ bg: "#002677" }}
          size={{ base: "sm", md: "md", lg: "lg" }}
        >
          {buttonText}
        </Button>
      )}
    </>
  );
};

export default ButtonCustomBase;
