import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

export const DividerTitle = ({
  lineColor = "#E2E8F0",
  textColor = "#718096",
  text,
  width,
}) => {
  return (
    <>
      <Box position="relative">
        <Divider borderColor={lineColor} borderBottomWidth="1px" />
        <AbsoluteCenter
          bg="white"
          px="0"
          width={width}
          fontSize={{ base: "12px", lg: "14px" }}
          color={textColor}
        >
          {text}
        </AbsoluteCenter>
      </Box>
    </>
  );
};

export default DividerTitle;
