import React from "react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export const ButtonCustomIcon = ({ buttonText, iconLeft, handleClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      variant="outlined"
      bg="#fff"
      border="1px solid #777978"
      color="#777978"
      _hover={{ background: "#777978", color: "#fff", border: 0 }}
      _active={{
        background: "#777978",
        color: "#fff",
        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
      _focus={{
        background: "#777978",
        color: "#fff",
        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
      size={{ base: "sm", md: "md", lg: "lg" }}
    >
      {React.cloneElement(iconLeft, {
        fillColor: isHovered ? "white" : "#777978",
      })}
      {buttonText}
    </Button>
  );
};
