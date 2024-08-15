import { Box, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const CheckoutSuccess = () => {
  const router = useRouter();

  return (
    <Box
      px={4}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        src="/logoRain.png"
        alt="logo"
        w={{ base: "200px", md: "400px" }}
        mt={6}
      />
      <Box
        fontFamily="Nunito"
        fontWeight={700}
        color="#797B7A"
        fontSize={{ base: "28px", md: "56px" }}
        mt={{ base: "-35px", md: "-80px" }}
      >
        ¡Gracias por tu compra!
      </Box>
      <Box
        fontFamily="Nunito"
        fontWeight={600}
        color="#797B7A"
        fontSize={{ base: "16px", md: "28px" }}
      >
        En breve nos pondremos en contacto.
      </Box>
      <Box display="flex" width="100%" justifyContent="center">
        <Button
          background="#D7ECE8"
          color="#4A4A4A"
          py={6}
          px={8}
          borderRadius="50px"
          fontSize="14px"
          fontFamily="Nunito"
          fontWeight={600}
          mt={6}
          onClick={() => router.push("/")}
        >
          Seguir comprando
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutSuccess;
