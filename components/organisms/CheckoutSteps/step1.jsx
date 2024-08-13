import { Box, Stack, Radio, RadioGroup, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { InputForm } from '@/components/atoms';

export const Step1 = () => {
  const [input, setInput] = useState({
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    email: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: !emailRegex.test(email),
    }));
  };

  const [selectedValue, setSelectedValue] = useState('');
  console.log(selectedValue);

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <Box
        display="flex"
        width="100%"
        justifyContent="flex-start"
        color="#797B7A"
        fontWeight={600}
        fontFamily="Nunito"
        fontSize="24px"
        mb={4}
      >
        Contacto
      </Box>

      <InputForm
        label="Email"
        name="email"
        value={input.email}
        onChange={handleInputChange}
        labelError="Email invalido"
        type="email"
        hasError={errors.email}
        showError={errors.email}
      />
      <InputForm
        label="Teléfono"
        name="phone"
        marginTop="16px"
        value={input.phone}
        onChange={handleInputChange}
        activeHelperText
        labelError="Email invalido"
        typeForm="number"
      />
      <Box mt={6} width="100%" display="flex" flexDirection="column">
        <RadioGroup onChange={setSelectedValue} value={selectedValue}>
          <Stack>
            <Radio
              display="flex"
              alignItems="flex-start"
              size="md"
              value="domicilio"
              _before={{
                content: '""',
                display: 'inline-block',
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              _checked={{
                bg: '#797B7A',
                borderColor: 'none',
                _before: {
                  bg: '#797B7A',
                  border: 'none',
                },
              }}
              _hover={{
                borderColor: '#797B7A',
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Box
                  fontSize="16px"
                  fontFamily="Nunito"
                  fontWeight={600}
                  color="#797B7A"
                  display="flex"
                  mt="-3px"
                >
                  Envio a domicilio
                </Box>
                {selectedValue === 'domicilio' && (
                  <Box
                    fontSize="14px"
                    fontFamily="Nunito"
                    fontWeight={500}
                    color="#797B7A"
                  >
                    Nos pondremos en contacto para informarte sobre los costos
                    de envío.
                  </Box>
                )}
              </Box>
            </Radio>
            <Radio
              mt={3}
              display="flex"
              alignItems="flex-start"
              size="md"
              value="rainbow"
              _before={{
                content: '""',
                display: 'inline-block',
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              _checked={{
                bg: '#797B7A',
                borderColor: 'none',
                _before: {
                  bg: '#797B7A',
                  border: 'none',
                },
              }}
              _hover={{
                borderColor: '#797B7A',
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Box
                  fontSize="16px"
                  fontFamily="Nunito"
                  fontWeight={600}
                  color="#797B7A"
                  display="flex"
                  mt="-3px"
                >
                  Retirar por Showroom gratis
                </Box>
                {selectedValue === 'rainbow' && (
                  <Box
                    fontSize="14px"
                    fontFamily="Nunito"
                    fontWeight={500}
                    color="#797B7A"
                  >
                    Dirección 1111- Villa Madero- Coordinar horario - Solo para
                    retiro. No es local
                  </Box>
                )}
              </Box>
            </Radio>
          </Stack>
        </RadioGroup>
        {selectedValue === 'rainbow' && (
          <>
            <Box
              fontSize="16px"
              fontFamily="Nunito"
              fontWeight={600}
              color="#797B7A"
              mt={6}
              ml={6}
            >
              Datos de quién retira
            </Box>
            <Box
              display="flex"
              width="100%"
              flexDirection="column"
              mt={4}
              ml={6}
            >
              <Box
                display="flex"
                width="100%"
                justifyContent="space-between"
                pr={6}
              >
                <InputForm label="Nombre" margin="0 16px 0 0" />
                <InputForm label="Apellido" />
              </Box>
              <Box
                display="flex"
                width="100%"
                justifyContent="space-between"
                mt={4}
                pr={6}
              >
                <InputForm label="DNI" margin="0 16px 0 0" />
                <InputForm label="Teléfono" />
              </Box>
            </Box>
          </>
        )}
        <Box display="flex" width="100%" justifyContent="flex-end">
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
          >
            Siguiente
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Step1;
