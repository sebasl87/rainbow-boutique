import { isMobile } from "react-device-detect";
import { Image } from "@chakra-ui/react";

export const FloatingWhatsApp = () => {
  const handleSubmit = () => {
    setTimeout(() => {
      if (isMobile) {
        const mensaje =
          "whatsapp://send?phone=541128802542" +
          "&text=Hola, vengo desde la pagina de Rainbow y tengo una consulta";
        window.open(mensaje, "_blank");
      } else {
        const mensaje =
          "https://web.whatsapp.com/send?phone=541128802542" +
          "&text=Hola, vengo desde la pagina de Rainbow";
        window.open(mensaje, "_blank");
      }
    }, 1500);
  };

  return (
    <span
      onClick={handleSubmit}
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/wp.svg"
        className="whatsapp-icon"
        width={{ base: "24px", md: "36px" }}
      />
    </span>
  );
};

export default FloatingWhatsApp;
