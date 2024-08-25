import { step1Atom, step2Atom } from '@/jotai/atoms';
import { Box, Button, Image } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';

export const Step3 = ({
  onComplete,
  handleClickBack,
  goStepOne,
  goStepTwo,
}) => {
  const step1Values = useAtomValue(step1Atom);
  const step2Values = useAtomValue(step2Atom);

  const handleClickFinish = () => {
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
        fontSize="20px"
        mb={0}
      >
        Método de entrega
      </Box>
      <Box mt={2} width="100%" display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          border="1px solid #797b7a"
          borderRadius={10}
          px={{ base: 2, md: 4 }}
          py={{ base: 2, md: 4 }}
        >
          <Box display="flex" width="100%" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                fontFamily="Nunito"
                fontSize="14px"
                fontWeight={600}
                color="#797B7A"
                display="flex"
                width={{ base: '60px', md: '150px' }}
              >
                Email
              </Box>
              <Box
                display="flex"
                fontFamily="Nunito"
                fontWeight={600}
                fontSize={{ base: '12px', md: '16px' }}
              >
                {step1Values.email}
              </Box>
            </Box>
            <Box
              fontFamily="Nunito"
              cursor="pointer"
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight={600}
              _hover={{ textDecoration: 'underline' }}
              onClick={goStepOne}
            >
              Cambiar
            </Box>
          </Box>
          <Box
            display="flex"
            width="100%"
            justifyContent="space-between"
            mt={4}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                fontFamily="Nunito"
                fontSize="14px"
                fontWeight={600}
                color="#797B7A"
                width={{ base: '60px', md: '150px' }}
              >
                Entrega
              </Box>
              <Box
                display="flex"
                fontFamily="Nunito"
                fontWeight={600}
                fontSize={{ base: '12px', md: '16px' }}
              >
                {step1Values.pickUpMethod === 'domicilio'
                  ? 'Envío a Domicilio'
                  : 'Retira en Showroom'}
              </Box>
            </Box>
            <Box
              fontFamily="Nunito"
              cursor="pointer"
              fontSize={{ base: '12px', md: '14px' }}
              fontWeight={600}
              _hover={{ textDecoration: 'underline' }}
              onClick={goStepOne}
            >
              Cambiar
            </Box>
          </Box>
          {step1Values.pickUpMethod !== 'domicilio' && (
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              mt={4}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  fontFamily="Nunito"
                  fontSize="14px"
                  fontWeight={600}
                  color="#797B7A"
                  width={{ base: '60px', md: '150px' }}
                >
                  Retira
                </Box>
                <Box
                  display="flex"
                  fontFamily="Nunito"
                  fontWeight={600}
                  fontSize={{ base: '12px', md: '16px' }}
                >
                  {step1Values.pickingUpPersonName}{' '}
                  {step1Values.pickingUpPersonLastName} - DNI:{' '}
                  {step1Values.pickingUpPersonDni}
                </Box>
              </Box>
              <Box
                fontFamily="Nunito"
                cursor="pointer"
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight={600}
                _hover={{ textDecoration: 'underline' }}
                onClick={goStepOne}
              >
                Cambiar
              </Box>
            </Box>
          )}
        </Box>
        {step2Values.paymentMethod === 'transfer' && (
          <>
            <Box
              display="flex"
              width="100%"
              justifyContent="flex-start"
              color="#797B7A"
              fontWeight={600}
              fontFamily="Nunito"
              fontSize="20px"
              mt={6}
            >
              Método de pago
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              border="1px solid #797b7a"
              borderRadius={10}
              px={{ base: 2, md: 4 }}
              py={{ base: 2, md: 4 }}
              mt={2}
            >
              <Box
                display="flex"
                width="100%"
                justifyContent="space-between"
                mt={4}
              >
                <Box
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  <Box
                    fontFamily="Nunito"
                    fontSize="14px"
                    fontWeight={600}
                    color="#797B7A"
                    width={{ base: '60px', md: '150px' }}
                  >
                    Método
                  </Box>
                  <Box
                    display="flex"
                    fontFamily="Nunito"
                    fontWeight={600}
                    fontSize={{ base: '12px', md: '16px' }}
                    flexDirection="column"
                  >
                    <span>Transeferencia bancaria</span>
                    <span>CBU: 123456789</span>
                    <span>Alías: 123456789</span>
                    <span>Nombre: 123456789</span>
                  </Box>
                </Box>
                <Box
                  fontFamily="Nunito"
                  cursor="pointer"
                  fontSize={{ base: '12px', md: '14px' }}
                  fontWeight={600}
                  _hover={{ textDecoration: 'underline' }}
                  onClick={goStepTwo}
                >
                  Cambiar
                </Box>
              </Box>
              <Box
                display="flex"
                fontFamily="Nunito"
                fontWeight={600}
                fontSize={{ base: '12px', md: '16px' }}
                flexDirection="column"
                mt={2}
              >
                Realiza tu transferencia y envianos el comprobante de pago a
                xxxxxxxxxxxxx
              </Box>
            </Box>
          </>
        )}
      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" mt={8}>
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
          mt={8}
          onClick={() => onComplete()}
        >
          Finalizar
        </Button>
      </Box>
    </Box>
  );
};
