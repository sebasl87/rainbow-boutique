import { Box, Stack, Radio, RadioGroup, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { InputForm } from '@/components/atoms';
import { useAtom } from 'jotai';
import { step1Atom } from '@/jotai/atoms';

export const Step1 = ({ onComplete }) => {
  const [input, setInput] = useState({
    email: '',
    phone: '',
    pickUpMethod: '',
    pickingUpPersonName: '',
    pickingUpPersonLastName: '',
    pickingUpPersonDni: '',
    pickingUpPersonPhone: '',
  });

  const [step1, setStep1] = useAtom(step1Atom);

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
    pickingUpPersonName: false,
    pickingUpPersonLastName: false,
    pickingUpPersonDni: false,
    pickingUpPersonPhone: false,
  });

  useEffect(() => {
    if (step1) {
      setInput(step1);
      setSelectedValue(step1.pickUpMethod || '');
    }
  }, [step1]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setInput((prevInput) => ({
          ...prevInput,
          email: value,
        }));
        validateEmail(value);
        break;
      case 'phone':
      case 'pickingUpPersonPhone':
        const phoneValue = value.replace(/[^\d]/g, '');
        setInput((prevInput) => ({
          ...prevInput,
          [name]: phoneValue,
        }));
        validatePhone(name, phoneValue);
        break;
      case 'pickingUpPersonName':
      case 'pickingUpPersonLastName':
        const nameValue = value.replace(/[^A-Za-z\s]/g, '');
        setInput((prevInput) => ({
          ...prevInput,
          [name]: nameValue,
        }));
        validateName(name, nameValue);
        break;
      case 'pickingUpPersonDni':
        const dniValue = value.replace(/[^\d]/g, '');
        setInput((prevInput) => ({
          ...prevInput,
          [name]: dniValue,
        }));
        validateDni(dniValue);
        break;
      default:
        setInput((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
        break;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: !emailRegex.test(email),
    }));
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

  const validateDni = (dni) => {
    const dniRegex = /^\d{7,}$/;
    setErrors((prevErrors) => ({
      ...prevErrors,
      pickingUpPersonDni: !dniRegex.test(dni),
    }));
  };

  const handleRadioChange = (value) => {
    setSelectedValue(value);
    if (value === 'domicilio') {
      setInput((prevInput) => ({
        ...prevInput,
        pickUpMethod: value,
        pickingUpPersonName: '',
        pickingUpPersonLastName: '',
        pickingUpPersonDni: '',
        pickingUpPersonPhone: '',
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        pickUpMethod: value,
      }));
    }
  };

  const [selectedValue, setSelectedValue] = useState('');


  const isFormValid = () => {
    const isEmailValid = !errors.email && input.email !== '';
    const isPhoneValid = !errors.phone && input.phone !== '';
    const isNameValid =
      !errors.pickingUpPersonName && input.pickingUpPersonName !== '';
    const isLastNameValid =
      !errors.pickingUpPersonLastName && input.pickingUpPersonLastName !== '';
    const isDniValid =
      !errors.pickingUpPersonDni && input.pickingUpPersonDni !== '';
    const isPickingUpPersonPhoneValid =
      !errors.pickingUpPersonPhone && input.pickingUpPersonPhone !== '';

    if (selectedValue === 'domicilio') {
      return isEmailValid && isPhoneValid;
    } else if (selectedValue === 'pickUp') {
      return (
        isEmailValid &&
        isPhoneValid &&
        isNameValid &&
        isLastNameValid &&
        isDniValid &&
        isPickingUpPersonPhoneValid
      );
    }

    return false;
  };

  const handleClick = () => {
    setStep1(input);
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
        labelError="Teléfono inválido (mínimo 10 dígitos)"
        typeForm="number"
        hasError={errors.phone}
        showError={errors.phone}
      />
      <Box mt={6} width="100%" display="flex" flexDirection="column">
        <RadioGroup onChange={handleRadioChange} value={selectedValue}>
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
              value="pickUp"
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
                {selectedValue === 'pickUp' && (
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
        {selectedValue === 'pickUp' && (
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
                <InputForm
                  label="Nombre"
                  margin="0 16px 0 0"
                  name="pickingUpPersonName"
                  value={input.pickingUpPersonName}
                  onChange={handleInputChange}
                  activeHelperText
                  labelError="Nombre inválido (mínimo 2 letras)"
                  hasError={errors.pickingUpPersonName}
                  showError={errors.pickingUpPersonName}
                />
                <InputForm
                  label="Apellido"
                  name="pickingUpPersonLastName"
                  value={input.pickingUpPersonLastName}
                  onChange={handleInputChange}
                  activeHelperText
                  labelError="Apellido inválido (mínimo 2 letras)"
                  hasError={errors.pickingUpPersonLastName}
                  showError={errors.pickingUpPersonLastName}
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
                  name="pickingUpPersonDni"
                  value={input.pickingUpPersonDni}
                  onChange={handleInputChange}
                  activeHelperText
                  labelError="DNI inválido (mínimo 7 dígitos)"
                  typeForm="number"
                  hasError={errors.pickingUpPersonDni}
                  showError={errors.pickingUpPersonDni}
                />
                <InputForm
                  label="Teléfono"
                  name="pickingUpPersonPhone"
                  value={input.pickingUpPersonPhone}
                  onChange={handleInputChange}
                  activeHelperText
                  labelError="Teléfono inválido (mínimo 10 dígitos)"
                  typeForm="number"
                  hasError={errors.pickingUpPersonPhone}
                  showError={errors.pickingUpPersonPhone}
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
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
          isDisabled={!isFormValid()}
          onClick={handleClick}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};
