import { Box, Stack, Radio, RadioGroup, Button, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { InputForm } from '@/components/atoms';
import { useAtom } from 'jotai';
import { step2Atom } from '@/jotai/atoms';

export const Step2 = ({ onComplete, handleClickBack }) => {
  const [input, setInput] = useState({
    paymentMethod: '',
    facturationName: '',
    facturationLastName: '',
    facturationDni: '',
    facturationPhone: '',
    facturationStreet: '',
    facturationPostalCode: '',
    facturationPiso: '',
    facturationDpto: '',
    facturationCity: '',
    facturationProv: '',
  });

  const [step2, setStep2] = useAtom(step2Atom);

  const [errors, setErrors] = useState({
    paymentMethod: false,
    facturationName: false,
    facturationLastName: false,
    facturationDni: false,
    facturationPhone: false,
    facturationStreet: false,
    facturationPostalCode: false,
    facturationPiso: false,
    facturationCity: false,
    facturationProv: false,
  });

  useEffect(() => {
    if (step2) {
      setInput(step2);
      setSelectedValue(step2.paymentMethod || '');
    }
  }, [step2]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'facturationPhone':
        const phoneValue = value.replace(/[^\d]/g, '');
        setInput((prevInput) => ({
          ...prevInput,
          [name]: phoneValue,
        }));
        validatePhone(name, phoneValue);
        break;
      case 'facturationName':
      case 'facturationLastName':
        const nameValue = value.replace(/[^A-Za-z\s]/g, '');
        setInput((prevInput) => ({
          ...prevInput,
          [name]: nameValue,
        }));
        validateName(name, nameValue);
        break;
      case 'facturationDni':
        const dniValue = value.replace(/[^\d]/g, '');
        setInput((prevInput) => ({
          ...prevInput,
          [name]: dniValue,
        }));
        validateDni(name, dniValue);
        break;
      case 'facturationStreet':
      case 'facturationPostalCode':
        setInput((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
        validateAlphanumeric(name, value, 4);
        break;
      case 'facturationPiso':
        const pisoValue = value.replace(/[^\d]/g, '');
        setInput((prevInput) => ({
          ...prevInput,
          [name]: pisoValue,
        }));
        break;
      case 'facturationCity':
      case 'facturationProv':
        setInput((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
        validateAlphanumeric(name, value, 3);
        break;
      default:
        setInput((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
        break;
    }
  };

  const validatePhone = (name, phone) => {
    const phoneRegex = /^\d{10,}$/;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !phoneRegex.test(phone),
    }));
  };

  const validateName = (name, value) => {
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !nameRegex.test(value),
    }));
  };

  const validateDni = (name, value) => {
    const dniRegex = /^\d{7,}$/;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !dniRegex.test(value),
    }));
  };

  const validateAlphanumeric = (name, value, minLength) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.length < minLength,
    }));
  };

  const handleRadioChange = (value) => {
    setSelectedValue(value);

    setInput((prevInput) => ({
      ...prevInput,
      paymentMethod: value,
    }));
  };

  const [selectedValue, setSelectedValue] = useState('');

  const isFormValid = () => {
    return (
      input.paymentMethod &&
      !errors.facturationName &&
      input.facturationName !== '' &&
      !errors.facturationLastName &&
      input.facturationLastName !== '' &&
      !errors.facturationDni &&
      input.facturationDni !== '' &&
      !errors.facturationPhone &&
      input.facturationPhone !== '' &&
      !errors.facturationStreet &&
      input.facturationStreet !== '' &&
      !errors.facturationPostalCode &&
      input.facturationPostalCode !== '' &&
      !errors.facturationCity &&
      input.facturationCity !== '' &&
      !errors.facturationProv &&
      input.facturationProv !== ''
    );
  };

  const handleClick = () => {
    setStep2(input);
    onComplete();
  };

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
        Seleccioná como quéres pagar tu compra
      </Box>
      <Box mt={6} width="100%" display="flex" flexDirection="column">
        <RadioGroup onChange={handleRadioChange} value={selectedValue}>
          <Stack>
            <Radio
              display="flex"
              alignItems="flex-start"
              size="md"
              value="transfer"
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
                  Transferencia bancaria
                </Box>
              </Box>
            </Radio>
            <Radio
              mt={3}
              display="flex"
              alignItems="flex-start"
              size="md"
              value="accordarMetodoPago"
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
                  Acordar método de pago
                </Box>

                <Box
                  fontSize="14px"
                  fontFamily="Nunito"
                  fontWeight={500}
                  color="#797B7A"
                >
                  Al finalizar, nos pondremos en contacto para coordinar el
                  pago.
                </Box>
              </Box>
            </Radio>
          </Stack>
        </RadioGroup>

        <>
          <Box
            fontSize="16px"
            fontFamily="Nunito"
            fontWeight={600}
            color="#797B7A"
            mt={6}
            ml={6}
          >
            Datos para facturación
          </Box>
          <Box display="flex" width="100%" flexDirection="column" mt={4} ml={6}>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              pr={6}
            >
              <InputForm
                label="Nombre"
                margin="0 16px 0 0"
                name="facturationName"
                value={input.facturationName}
                onChange={handleInputChange}
                activeHelperText
                labelError="Nombre inválido (mínimo 2 letras)"
                hasError={errors.facturationName}
                showError={errors.facturationName}
              />
              <InputForm
                label="Apellido"
                name="facturationLastName"
                value={input.facturationLastName}
                onChange={handleInputChange}
                activeHelperText
                labelError="Apellido inválido (mínimo 2 letras)"
                hasError={errors.facturationLastName}
                showError={errors.facturationLastName}
              />
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              pr={6}
              mt={2}
            >
              <InputForm
                label="DNI"
                margin="0 16px 0 0"
                name="facturationDni"
                value={input.facturationDni}
                onChange={handleInputChange}
                activeHelperText
                labelError="DNI inválido (mínimo 7 dígitos)"
                typeForm="number"
                hasError={errors.facturationDni}
                showError={errors.facturationDni}
              />
              <InputForm
                label="Teléfono"
                name="facturationPhone"
                value={input.facturationPhone}
                onChange={handleInputChange}
                activeHelperText
                labelError="Teléfono inválido (mínimo 10 dígitos)"
                typeForm="number"
                hasError={errors.facturationPhone}
                showError={errors.facturationPhone}
              />
            </Box>

            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              pr={6}
              mt={2}
            >
              <InputForm
                label="Calle"
                margin="0 16px 0 0"
                name="facturationStreet"
                value={input.facturationStreet}
                onChange={handleInputChange}
                activeHelperText
                labelError="Mínimo 4 caracteres"
                typeForm="number"
                hasError={errors.facturationStreet}
                showError={errors.facturationStreet}
              />
              <InputForm
                label="Código postal"
                name="facturationPostalCode"
                value={input.facturationPostalCode}
                onChange={handleInputChange}
                activeHelperText
                labelError="Mínimo 4 caracteres"
                typeForm="number"
                hasError={errors.facturationPostalCode}
                showError={errors.facturationPostalCode}
              />
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              pr={6}
              mt={2}
            >
              <InputForm
                label="Piso(opcional)"
                margin="0 16px 0 0"
                name="facturationPiso"
                value={input.facturationPiso}
                onChange={handleInputChange}
                activeHelperText
                labelError="DNI inválido (mínimo 7 dígitos)"
                typeForm="number"
                hasError={errors.facturationPiso}
                showError={errors.facturationPiso}
              />
              <InputForm
                label="Departamento(opcional)"
                name="facturationDpto"
                value={input.facturationDpto}
                onChange={handleInputChange}
                activeHelperText
                labelError="Teléfono inválido (mínimo 10 dígitos)"
                hasError={errors.facturationDpto}
                showError={errors.facturationDpto}
              />
            </Box>

            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              pr={6}
              mt={2}
            >
              <InputForm
                label="Ciudad"
                margin="0 16px 0 0"
                name="facturationCity"
                value={input.facturationCity}
                onChange={handleInputChange}
                activeHelperText
                labelError="Mínimo 3 caracteres"
                hasError={errors.facturationCity}
                showError={errors.facturationCity}
              />
              <InputForm
                label="Provincia"
                name="facturationProv"
                value={input.facturationProv}
                onChange={handleInputChange}
                activeHelperText
                labelError="Mínimo 3 caracteres"
                hasError={errors.facturationProv}
                showError={errors.facturationProv}
              />
            </Box>
          </Box>
        </>
      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" mt="24px">
          <Image src="/back.svg" alt="back" width="20px" />
          <Box
            fontSize="14px"
            fontFamily="Nunito"
            color="#797B7A"
            cursor="pointer"
            fontWeight={600}
            _hover={{
              textDecoration: 'underline',
            }}
            onClick={handleClickBack}
          >
            Paso anterior
          </Box>
        </Box>

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
          isDisabled={!isFormValid()}
          onClick={handleClick}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};
