import { FormLabel, Input, FormHelperText, Box } from "@chakra-ui/react";

export const InputForm = ({
  label,
  value,
  onChange,
  showError,
  labelHelper,
  labelError,
  typeForm,
  placeHolder,
  marginTop,
  name,
  hasError,
  margin
}) => {
  return (
    <Box width="100%" margin={margin}>
      <FormLabel color="#797B7A" fontSize="12px" mb={0} mt={marginTop}>
        {label}
      </FormLabel>
      <Input      
        isInvalid={hasError}
        type="email"
        value={value}
        name={name}
        onChange={onChange}
        type={typeForm}
        _focus={{
          borderColor: "#797B7A",
          boxShadow: "none",
        }}
        _active={{
          borderColor: "#797B7A",
          boxShadow: "none",
        }}
        _placeholder={{
          color: "gray.400",
          backgroundColor: "white",
          fontSize: { base: 14, md: 16, lg: 18 },
        }}
        size={{ base: "sm", md: "md", lg: "lg" }}
        placeholder={placeHolder}
      />
      {!showError ? (
        <Box fontSize="12px" mt={1} color="#797b7a">
          {labelHelper}
        </Box>
      ) : (
        <Box fontSize="12px" mt={1} color="#E53E3E">
          {labelError}
        </Box>
      )}
    </Box>
  );
};

export default InputForm;
