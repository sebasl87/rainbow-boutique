import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

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
      <InputGroup>
        <InputLeftElement
          onClick={handleClickOnIcon}
          data-testid="left-icon-search"
        >
          <Search2Icon
            color="rainbowGray"
            mb={{ base: '6px', md: 0 }}
            ml={{ lg: '6px' }}
          />
        </InputLeftElement>
        <Input
          background={disabled ? 'gray.100' : 'white'}
          borderRadius="6px"
          data-testid={id}
          disabled={disabled}
          onBlur={handleOnluBlur}
          onChange={handleInputChange}
          onKeyDown={handleOnKeyDown}
          placeholder={placeHolder}
          size={{ base: 'sm', md: 'md' }}
          type={type}
          value={value}
          _placeholder={{
            color: 'gray.400',
            backgroundColor: 'white',
            fontSize: { base: '14px', md: '16px', lg: '18px' },
            fontFamily: 'RainbowRegular',
          }}
          _focus={{
            borderColor: '#C2CEC9',
            boxShadow: '0 0 0 1px #C2CEC9',
          }}
        />
      </InputGroup>
    </>
  );
};

export default InputSearch;
