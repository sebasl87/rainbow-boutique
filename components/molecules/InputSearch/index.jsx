import { Input, InputGroup, InputRightElement, Box } from '@chakra-ui/react';
import { IoSearch } from 'react-icons/io5';

export const InputSearch = ({
  disabled,
  handleInputChange,
  handleOnKeyDown,
  handleOnluBlur,
  handleClickOnIcon,
  id,
  placeHolder,
  type,
  value,
}) => {
  return (
    <>
      <InputGroup position="relative">
        <Box
          position="relative"
          width="100%"
          borderRadius="40px"
          _before={{
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            borderRadius: 'inherit',
            background: 'linear-gradient(45deg, #AEDBE8, #EBBEB3)',
            zIndex: -1,
            transition: 'opacity 0.2s',
            opacity: 0,
          }}
          _focusWithin={{
            _before: {
              opacity: 1,
            },
          }}
        >
          <Input
            background={disabled ? 'gray.100' : 'white'}
            borderRadius="40px"
            data-testid={id}
            disabled={disabled}
            onBlur={handleOnluBlur}
            onChange={handleInputChange}
            onKeyDown={handleOnKeyDown}
            placeholder={placeHolder}
            size={{ base: 'sm', md: 'md' }}
            type={type}
            value={value}
            border="2px solid #797B7A"
            _placeholder={{
              color: 'gray.400',
              backgroundColor: 'white',
              fontSize: { base: '14px', md: '16px', lg: '18px' },
              fontFamily: 'RainbowRegular',
            }}
            _focus={{
              outline: 'none',
              boxShadow: 'none',
              border: 0,
            }}
            height="40px"
            paddingRight="2.5rem" 
          />
        </Box>
        <InputRightElement
          onClick={handleClickOnIcon}
          data-testid="left-icon-search"
          height="100%" 
          pointerEvents="none" 
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="2.5rem"
        >
          <IoSearch />
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default InputSearch;
